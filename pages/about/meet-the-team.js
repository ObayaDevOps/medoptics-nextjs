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
    Link,
    UnorderedList,
    ListItem,
    Box,
    chakra
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
  
  export default function AskOptometristSplitWithImage() {
    return (
  
      
      <Container maxW={'7xl'} py={12} minHeight={{md:'110vh'}}>
        <Head>
          <title>Meet The Team | MedOptics Ltd</title>
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
          textAlign='center'
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
            Meet The Team
          </Text>{" "}
          
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}  paddingBottom={15} >
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
            Our Story
          </Text>
          <Heading>A Modern Eye-Care Specialist</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Mr Anguyo Dralega our founder and Managing director returned from the UK in 2001 to contribute to the development of Optometry in Uganda. Having completed his Masters of Optometry at the University of Bradford in the UK, he returned home to find a fledgeling industry: no regulation, no standards and no accountability. Thus Med-Optics was borne of the conviction that Uganda can and should have high quality, accurate vision care services.
            </Text>
            <UnorderedList p={4}>
              <ListItem color={'gray.500'} fontSize={'lg'}>
              Registered with the Optical Council UK
              </ListItem>
              <ListItem color={'gray.500'} fontSize={'lg'}>
              Member of the Association of Optometrists, UK
              </ListItem>
              <ListItem color={'gray.500'} fontSize={'lg'}>
              Chairman of the Legislation Committee of Optometrist Association of Uganda,
              </ListItem>
              <ListItem color={'gray.500'} fontSize={'lg'}>
              Former President of African Council of Optometry, Governing Board
              </ListItem >
              <ListItem color={'gray.500'} fontSize={'lg'}>
              Member of World Council of Optometry
              </ListItem>
              <ListItem color={'gray.500'} fontSize={'lg'}>
              Head of Department for Allied Health Department & Coordinator for the Optometry Program, Makerere University
              </ListItem>
              <ListItem color={'gray.500'} fontSize={'lg'}>
              Accredited member of the Ultra Lase Eye-Care Co-management scheme: for pre and post laser operation screening, UK.              
              </ListItem>
            </UnorderedList>

          <Stack>

          </Stack>

        </Stack>
        
        <Image
            w="full"
            rounded="lg"
            shadow="2xl"
            src={getCloudinaryImage('anguyo.jpg')} 
            alt="Hellonext feedback boards software screenshot"
            width={492}
            height={513} 
            placeholder="blur"
            blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
          />
      </SimpleGrid>
  
  
        {/* <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
           <Feature Name='Anguyo' Title={'Director'} imageTag={'anguyo.jpg'} />
           <Feature Name='Anguyo' Title={'Director'} imageTag={'anguyo.jpg'} />
           <Feature Name='Anguyo' Title={'Director'} imageTag={'anguyo.jpg'} />
           <Feature Name='Anguyo' Title={'Director'} imageTag={'anguyo.jpg'} />
           <Feature Name='Anguyo' Title={'Director'} imageTag={'anguyo.jpg'}/>
           <Feature Name='Anguyo' Title={'Director'}  imageTag={'anguyo.jpg'} />
        </SimpleGrid> */}
      </Container>
    );
  }