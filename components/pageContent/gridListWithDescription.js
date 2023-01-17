import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
    useColorModeValue,
    Text,
    ScaleFade
  } from '@chakra-ui/react';
  import {} from '@chakra-ui/react';
  
  import Image from 'next/image';
  import { getCloudinaryImage, getCloudinaryImageBlur } from '../../components/utils/cloudinaryImageRetreival';
  
import React, { useRef } from "react";
import { useInView } from "framer-motion";
  
  
  const Feature = ({ heading, text }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
      <ScaleFade initialScale={0.6}
      in={isInView}>
      <GridItem 
        ref={ref}
      >
        <Box border="3px" borderColor="gray.200">
        <Image
              w="full"
              rounded="lg"
              shadow="2xl"
              src={getCloudinaryImage('anguyo.jpg')} 
              alt="Hellonext feedback boards software screenshot"
              width={500}
              height={600} 
              placeholder="blur"
              blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
            />
        <chakra.h3 fontSize="xl" fontWeight="600">
          {heading}
        </chakra.h3>
        <chakra.p>{text}</chakra.p>
        </Box>
      </GridItem>
      </ScaleFade>
    );
  };
  
  export default function GridListWithDescription() {
    return (
      <Box as={Container} maxW="6xl" mt={14} p={4} paddingTop={20} minHeight={'80vh'}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
            <Text
              textTransform={'uppercase'}
              color={'green.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              What We Offer
            </Text>
              <chakra.h2 
              fontSize="6xl" 
              fontWeight="700"
              bgClip="text"
              bgGradient='linear(to-r, green.600, green.300)'
              fontWeight="extrabold"
              
              >
                Our Service Scope
              </chakra.h2>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
              Potenti vivamus ac mi nam inceptos lacus at sociosqu sapien.
               Dictumst sit at quam aliquet consequat eros viverra cubilia gravida fringilla interdum.
                Dis mauris metus
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}>
          <Feature
            heading={'Comprehensive Eye Exams'}
            text={'Eros consectetuer suspendisse feugiat egestas luctus aliquam dolor ridiculus phasellus magna.'}
          />
          <Feature
            heading={'Complete Optical Services'}
            text={'Eros consectetuer suspendisse feugiat egestas luctus aliquam dolor ridiculus phasellus magna.'}
          />
          <Feature
            heading={'Contact Lens Examination'}
            text={'Eros consectetuer suspendisse feugiat egestas luctus aliquam dolor ridiculus phasellus magna.'}
          />
          <Feature
            heading={'Urgent Vision Care'}
            text={'Eros consectetuer suspendisse feugiat egestas luctus aliquam dolor ridiculus phasellus magna.'}
          />
        </Grid>
      </Box>
    );
  }