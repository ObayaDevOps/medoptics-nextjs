import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    ScaleFade
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import React, { useRef } from "react";
  import { useInView } from "framer-motion";
    import Head from 'next/head';
  import Image from 'next/image';
  import { getCloudinaryImage, getCloudinaryImageBlur } from '../../components/utils/cloudinaryImageRetreival';
  
  
  
  const Feature = ({ text, icon, iconBg }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
      <ScaleFade initialScale={0.6}
      in={isInView}>
        <Stack direction={'row'} align={'center'}>
          <Flex
            w={8}
            h={8}
            align={'center'}
            justify={'center'}
            rounded={'full'}
            bg={iconBg}
            ref={ref}>
            {icon}
          </Flex>
          <Text fontWeight={600}>{text}</Text>
        </Stack>
      </ScaleFade>
    );
  };
  
  export default function TwoColumnFeature() {
    return (
      
      <Container  maxW={'6xl'} py={120} paddingTop={70} minHeight={"75vh"} centerContent >
       
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'green.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Who We Are
            </Text>
            <Heading
            fontSize={'5xl'}
            bgClip="text"
            bgGradient='linear(to-r, green.600, green.300)'
            fontWeight="extrabold"

            >
                A Modern Eye-Care Specialist</Heading>

            <Text color={'gray.500'} fontSize={'lg'}>
            Med-Optics  is a private company that was established in 2002 to provide a
             high standard of quality eye care services.  We have modern equipment and experienced staff to take care of all patients’ needs.
            </Text>
            <Stack
              spacing={4}
>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'9 Service Centres'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'20 Years of Service'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'100,000 patients served'}
              />
                          <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'200+ Outreaches Conducted'}
              />
            </Stack>
          </Stack>
          <Flex>
          <Image
              w="full"
              rounded="lg"
              shadow="2xl"
              src={getCloudinaryImage('anguyo.jpg')} 
              alt="Hellonext feedback boards software screenshot"
              width={1349}
              height={550} 
              placeholder="blur"
              blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }