import BackgroundAnimation from '@/components/BackgroundAnimation'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Box, Collapse, Flex, HStack, Text, Skeleton } from '@chakra-ui/react'

// Use dynamic import with ssr: false to ensure this component only renders on the client
const TestingPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
    <Box
    position="relative"
    boxShadow={'rgba(255, 78, 163,0.1)'}
    bg={'transparent'}
    borderWidth="1px"
    borderStyle="solid"
    borderColor={'rgba(255, 78, 163,0.1)'}
    rounded="md"
    px={4}
    pt={1.5}
    pb={2}
    >
     <BackgroundAnimation />
     </Box>
    </div>

  )
}

// Use Next.js dynamic import with ssr: false to ensure this component only renders on the client
const Testing = dynamic(() => Promise.resolve(TestingPage), {
  ssr: false,
});

export default Testing