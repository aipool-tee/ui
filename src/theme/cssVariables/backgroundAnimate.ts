import * as THREE from 'three';

// Initialize variables
let container: HTMLDivElement | null = null;
let scene: THREE.Scene | null = null;
let camera: THREE.PerspectiveCamera | null = null;
let renderer: THREE.WebGLRenderer | null = null;
let crystals: THREE.Mesh[] = [];
let animationFrameId: number | null = null;

// Only initialize if we're in a browser environment
if (typeof window !== 'undefined') {
  console.log('Initializing background animation in browser environment');
  
  // Create container for the animation
  container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '10';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.zIndex = '-1';
  container.style.pointerEvents = 'none';
  container.style.backgroundColor = 'transparent';

  // Initialize scene, camera, and renderer
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
  directionalLight.position.set(0, 1, 1);
  scene.add(directionalLight);

  // Create crystals
  const crystalCount = 5; // Increased count for more visibility

  interface CrystalOptions {
    position: THREE.Vector3;
    color: THREE.Color;
    size: number;
  }

  const createCrystal = (options: CrystalOptions): THREE.Mesh => {
    const geometry = new THREE.OctahedronGeometry(options.size, 0);
    const material = new THREE.MeshPhongMaterial({
      color: options.color,
      transparent: true,
      opacity: 0.8, // Increased opacity
      shininess: 100,
    });
    const crystal = new THREE.Mesh(geometry, material);
    crystal.position.copy(options.position);
    return crystal;
  };

  // Define bright colors for crystals
  const crystalColors = [
    new THREE.Color(0xFF0000), // Red
    new THREE.Color(0x00FF00), // Green
    new THREE.Color(0x0000FF), // Blue
    new THREE.Color(0xFFFF00), // Yellow
    new THREE.Color(0xFF00FF), // Magenta
    new THREE.Color(0x00FFFF), // Cyan
    new THREE.Color(0xFFA500), // Orange
    new THREE.Color(0x800080), // Purple
  ];

  // Initialize crystals with random positions and colors
  for (let i = 0; i < crystalCount; i++) {
    const position = new THREE.Vector3(
      (Math.random() - 0.5) * 15, // Increased spread
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 10
    );
    
    // Use predefined colors instead of random ones
    const colorIndex = Math.floor(Math.random() * crystalColors.length);
    const color = crystalColors[colorIndex];
    
    const size = Math.random() * 1.0 + 0.5; // Increased size
    
    const crystal = createCrystal({ position, color, size });
    scene.add(crystal);
    crystals.push(crystal);
  }

  // Position camera
  camera.position.z = 20; // Moved camera back for better view

  // Animation variables
  const rotationSpeed = 0.01; // Increased rotation speed
  const floatSpeed = 0.001; // Increased float speed
  const floatAmplitude = 0.2; // Increased float amplitude

  // Animation loop
  const animate = (): void => {
    if (!scene || !camera || !renderer) return;
    
    animationFrameId = requestAnimationFrame(animate);
    
    // Rotate crystals
    crystals.forEach((crystal) => {
      crystal.rotation.x += rotationSpeed;
      crystal.rotation.y += rotationSpeed;
      
      // Add floating effect
      crystal.position.y += Math.sin(Date.now() * floatSpeed) * floatAmplitude * 0.01;
    });
    
    renderer.render(scene, camera);
  };

  // Handle window resize
  const handleResize = (): void => {
    if (!camera || !renderer) return;
    
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener('resize', handleResize);

  // Start animation
  animate();
  console.log('Background animation started');
}

// Cleanup function
const cleanup = (): void => {
  if (typeof window === 'undefined') return;
  
  window.removeEventListener('resize', handleResize);
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
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
  if (container && renderer && container.contains(renderer.domElement)) {
    container.removeChild(renderer.domElement);
  }
  
  // Dispose of renderer
  if (renderer) {
    renderer.dispose();
  }
  
  // Reset variables
  container = null;
  scene = null;
  camera = null;
  renderer = null;
  crystals = [];
  animationFrameId = null;
  
  console.log('Background animation cleaned up');
};

// Define handleResize outside the if block so it can be referenced in cleanup
const handleResize = (): void => {
  if (!camera || !renderer) return;
  
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

export { container, cleanup };