import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface BackgroundAnimationProps {
  children?: React.ReactNode;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Store Three.js objects in refs to persist between renders
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const crystalsRef = useRef<THREE.Mesh[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    try {
      console.log('Initializing background animation directly...');
      
      // Create scene
      const scene = new THREE.Scene();
      sceneRef.current = scene;
      
      // Create camera
      const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 20;
      cameraRef.current = camera;
      
      // Create renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current = renderer;
      
      // Add renderer to container
      if (containerRef.current) {
        containerRef.current.appendChild(renderer.domElement);
      }
      
      // Add lights with adjusted intensities
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);
      
      // Create crystals
      const crystalCount = 12;
      const crystals: THREE.Mesh[] = [];
      crystalsRef.current = crystals;
      
      // Define bright colors for crystals
      const crystalColors = [
        new THREE.Color(0xFA9442), // Warm orange
        new THREE.Color(0xB5FFC2), // Mint green
        new THREE.Color(0x96BFE6), // Soft blue
        new THREE.Color(0xF2FF26), // Bright yellow-green
        new THREE.Color(0xFA9442), // Warm orange
      ];
      
      // Create crystal function with enhanced material properties
      const createCrystal = (position: THREE.Vector3, color: THREE.Color, size: number): THREE.Mesh => {
        const geometry = new THREE.OctahedronGeometry(size, 0);
        const material = new THREE.MeshPhongMaterial({
          color: color,
          transparent: true,
          opacity: 0.7,
          shininess: 100,
          specular: 0xffffff,
          emissive: color,
          emissiveIntensity: 0.2
        });
        const crystal = new THREE.Mesh(geometry, material);
        crystal.position.copy(position);
        
        // Add random initial rotation
        crystal.rotation.x = Math.random() * Math.PI;
        crystal.rotation.y = Math.random() * Math.PI;
        
        // Store animation properties
        crystal.userData = {
          rotationSpeedX: Math.random() * 0.01 - 0.005,
          rotationSpeedY: Math.random() * 0.01 - 0.005,
          floatSpeed: Math.random() * 0.005 + 0.002,
          floatDistance: Math.random() * 0.2 + 0.1,
          originalY: position.y
        };
        
        return crystal;
      };
      
      // Initialize crystals
      for (let i = 0; i < crystalCount; i++) {
        const position = new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10
        );
        
        const colorIndex = Math.floor(Math.random() * crystalColors.length);
        const color = crystalColors[colorIndex];
        
        const size = Math.random() * 1.0 + 0.5;
        
        const crystal = createCrystal(position, color, size);
        scene.add(crystal);
        crystals.push(crystal);
      }
      
      // Animation loop
      const animate = (): void => {
        if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
        
        animationFrameIdRef.current = requestAnimationFrame(animate);
        
        // Animate crystals with enhanced movement
        crystals.forEach((crystal) => {
          // Rotate crystals
          crystal.rotation.x += crystal.userData.rotationSpeedX;
          crystal.rotation.y += crystal.userData.rotationSpeedY;
          
          // Add floating effect
          const time = Date.now() * 0.001;
          crystal.position.y = crystal.userData.originalY + 
                             Math.sin(time * crystal.userData.floatSpeed) * 
                             crystal.userData.floatDistance;
        });
        
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      };
      
      // Handle window resize
      const handleResize = (): void => {
        if (!cameraRef.current || !rendererRef.current) return;
        
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Start animation
      animate();
      setIsInitialized(true);
      console.log('Background animation started successfully');
      
      // Cleanup function
      return () => {
        console.log('Cleaning up background animation...');
        window.removeEventListener('resize', handleResize);
        
        if (animationFrameIdRef.current !== null) {
          cancelAnimationFrame(animationFrameIdRef.current);
        }
        
        // Dispose of geometries and materials
        crystals.forEach((crystal) => {
          if (crystal.geometry) crystal.geometry.dispose();
          if (crystal.material) {
            if (Array.isArray(crystal.material)) {
              crystal.material.forEach(material => material.dispose());
            } else {
              crystal.material.dispose();
            }
          }
        });
        
        // Remove renderer from container
        if (containerRef.current && rendererRef.current && containerRef.current.contains(rendererRef.current.domElement)) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
        
        // Dispose of renderer
        if (rendererRef.current) {
          rendererRef.current.dispose();
        }
        
        // Reset refs
        sceneRef.current = null;
        cameraRef.current = null;
        rendererRef.current = null;
        crystalsRef.current = [];
        animationFrameIdRef.current = null;
      };
    } catch (error) {
      console.error('Failed to initialize background animation:', error);
      setError('Failed to initialize animation');
    }
  }, []);

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh',
      overflow: 'hidden'
    }}>
      <div 
        ref={containerRef} 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw', 
          height: '100vh', 
          pointerEvents: 'none',
          opacity: isInitialized ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          backgroundColor: 'transparent',
          zIndex: 0,
        }} 
      >
        {error && (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {error}
          </div>
        )}
      </div>
      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        width: '100%',
        height: '100%'
      }}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundAnimation; 