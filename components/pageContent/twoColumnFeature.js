import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    ScaleFade,
    Show,
  } from '@chakra-ui/react';
  import React, { useRef } from "react";
  import { useInView } from "framer-motion";
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
  
  export default function TwoColumnFeature(props) {
    const pageContent = props.content;

    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
      <ScaleFade initialScale={0.6}
      in={isInView}>
        <Container  maxW={'6xl'}  minHeight={"75vh"} centerContent >
        
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} p={{base:7, md: 0}}>
            <Stack spacing={4}       ref={ref}>
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
              pb={{base:7}}
              >
                {pageContent.whoWeAreTitle}
              </Heading>

              <Text color={'gray.500'} fontSize={'lg'}>
                {pageContent.whoWeAreContentParagraph1}
              </Text>
              <Text color={'gray.500'} fontSize={'lg'}>
              {pageContent.whoWeAreContentParagraph2}
              </Text>
              <Text color={'gray.500'} fontSize={'lg'}>
              {pageContent.whoWeAreContentParagraph3}
              </Text>
              <Text color={'gray.500'} fontSize={'lg'}>
              {pageContent.whoWeAreContentParagraph4}
              </Text>

            </Stack>
            <Flex pb={{base:10}}>
              <Show below='sm'>
                <Image
                    w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('anguyo.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={1349}
                    height={1450} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
                  />
                  <Image
                    w="full"
                    layout='fill'
                    h={[56, 72, 96, "full"]}
                    alt={`Cover Image`}
                    fit="cover"
                    src={urlForImage(coverImageRef).height(1000).width(2000).url()}
                    // sizes="100vw"
                    priority={true}
                  />  

                  
              </Show>
              <Show above='md'>
                <Image
                    w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('anguyo.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={1349}
                    height={1400} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
                  />
              </Show>
            </Flex>
          </SimpleGrid>
        </Container>
      </ScaleFade>

    );
  }