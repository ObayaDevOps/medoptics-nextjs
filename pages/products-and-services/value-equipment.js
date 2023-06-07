import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    Box,
    Link,
    chakra,
    useColorModeValue,
    UnorderedList,
    ListItem
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  import Head from 'next/head';
  import Image from 'next/image';
  import { getCloudinaryImage, getCloudinaryImageBlur } from '../../components/utils/cloudinaryImageRetreival';
  
  
  
  const Feature = ({ Name, Title, imageTag }) => {
    return (
        <Flex
        p={5}
        w="full"
        alignItems="center"
        justifyContent="center"
        >
        <Box
            // w="xs"
            bg="white"
            _dark={{
            bg: "gray.800",
            }}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            mx="auto"
        >
            <Image
                w="full"
                rounded="lg"
                shadow="2xl"
                src={getCloudinaryImage(imageTag)} 
                alt="Hellonext feedback boards software screenshot"
                width={349}
                height={400} 
                placeholder="blur"
                blurDataURL={getCloudinaryImageBlur(imageTag)}
            />

            <Box py={5} textAlign="center">
            <Link
                display="block"
                fontSize="2xl"
                color="gray.800"
                _dark={{
                color: "white",
                }}
                fontWeight="bold"
            >
                {Name}
            </Link>
            <chakra.span
                fontSize="sm"
                color="gray.700"
                _dark={{
                color: "gray.200",
                }}
            >
                {Title}
            </chakra.span>
            </Box>
        </Box>
        </Flex>
    );
  };
  export default function OurValueSplitWithImage() {
    return (
  
      
      <Container maxW={'6xl'} py={12} minHeight={{md:'110vh'}}>
        <Head>
          <title>Our Value | MedOptics Ltd</title>
          <meta name="description" content="MedOptics Ltd Webpage" />
          {/* <link rel="shortcut icon" href="../public/favicon.ico"></link> */}
          <link rel="shortcut icon" href="../../../images/icon/medoptics-logo-mini-square.jpeg"></link>
        </Head>
        <Heading
         as={'h1'}
          mb={6}
          fontSize={{
            base: "6xl",
            md: "8xl",
          }}
          minHeight={'1vh'}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{
            base: "normal",
            md: "tight",
          }}
          color="green.900"
          _dark={{
            color: "green.100",
          }}
        >
           {" "}
          <Text
            display={{
              base: "block",
              // lg: "inline",
            }}
            w="full"
            bgClip="text"
            bgGradient='linear(to-r, green.500, green.300)'
            fontWeight="extrabold"
          >
           Our Value
          </Text>{" "}
          
        </Heading>
  
  
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
          <Stack spacing={8}>


            <Heading>Our Equipment</Heading>
            <Text color={'gray.500'} fontSize={'lg'} pb={10}>
            At Med-Optics Vision Centre, we are proud to offer our patients the latest in state-of-the-art eye care equipment. Our cutting-edge technology allows us to provide accurate and precise diagnoses, as well as effective treatments for a wide range of eye conditions.
            Even with the best instrumentation, we recognize that our best resource is our highly trained eye care professionals. They go above and beyond to give accurate, thorough examinations and truthful recommendations. This allows us to provide the highest level of care to our patients.
            </Text>

            <Image
                    w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('pexels-ksenia-chernaya-5752309_bvqsze.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={3800}
                    height={2537} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('pexels-ksenia-chernaya-5752309_bvqsze.jpg')}
                  />

          {/* <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
           <Feature Name='Anguyo' Title={'Eye Machine'} imageTag={'anguyo.jpg'} />
           <Feature Name='Anguyo' Title={'Eye Machine'} imageTag={'anguyo.jpg'} />
           <Feature Name='Anguyo' Title={'Eye Machine'} imageTag={'anguyo.jpg'} />
           <Feature Name='Anguyo' Title={'Eye Machine'} imageTag={'anguyo.jpg'} />
           <Feature Name='Anguyo' Title={'Eye Machine'} imageTag={'anguyo.jpg'}/>
           <Feature Name='Anguyo' Title={'Eye Machine'}  imageTag={'anguyo.jpg'} />
        </SimpleGrid> */}

          </Stack>
        </SimpleGrid>
      </Container>
    );
  }