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
  
  
  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={550}>{text}</Text>
      </Stack>
    );
  };
  
  export default function AskOptometristSplitWithImage() {
    return (
  
      
      <Container maxW={'6xl'} py={12} minHeight={{md:'110vh'}}>
        <Head>
          <title>Ask The Optometrist | MedOptics Ltd</title>
          <meta name="description" content="MedOptics Ltd Webpage" />
          {/* <link rel="shortcut icon" href="../public/favicon.ico"></link> */}
          <link rel="shortcut icon" href="../../../images/icon/medoptics-logo-mini-square.jpeg"></link>
        </Head>
        <Heading
         as={'h1'}
          mb={6}
          fontSize={{
            base: "4xl",
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
            pb={10}
          >
            Ask The Optometrist
          </Text>{" "}
          
        </Heading>
  
  
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
          <Stack spacing={8}>
            {/* <Text
              textTransform={'uppercase'}
              color={'green.400'}
              fontWeight={600}
              fontSize={'sm'}
              paddingBottom={10}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Questions & Answers
            </Text> */}

            {/* <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('anguyo.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={(984/2)}
                    height={(1026/2)} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
                  /> */}

            <Heading>What is the difference between short and long sightedness?</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
                Short sightedness, also known as myopia, is a refractive error in which objects nearby are clear, while objects at a distance appear blurry. Conversely, long sightedness or hyperopia, is a condition where distant objects are clear, but nearby objects appear blurry. Presbyopia, on the other hand, is a type of long sightedness that typically occurs in people over the age of 40 and is caused by the natural aging process of the eye.
            </Text>

            <Heading>What are the common risk factors to eye health?</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Certain diseases, including diabetes and hypertension, pose a significant risk to eye health. Additionally, age is a factor that should be considered, as the eyes tend to become less efficient, particularly with regards to reading, as one grows older. Consequently, it is highly probable that one may experience eyesight problems. Furthermore, traumatic injuries to the eyes can also increase the likelihood of developing eye health issues.
            </Text>

            <Heading>What is the difference between an Optometrist and an Ophthalmologist?</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            An Ophthalmologist is an eye doctor. They study medicine first, then specialize in eye health. 	Ophthalmologists examine your eyes to identify diseases and other conditions like squint, glaucoma 	or cateracts. They can operate on eyes, recommend refraction with an Optometrist or prescribe 		medicine.

            An Optometrist is a vision specialist. They also examine the outer part of the eye and the back of the 	eye and will advise you on whether you need spectacles and the best type for you. The eye test also 	can reveal whether you have underlying conditions such as high blood pressure or diabetes or 	infections that require medication. In most Med-Optics practices you will meet an Optometrist. In 	hospital practice like Lubaga Eye Department, you will have access to the Ophthalmologist. If the 	eye examination shows that you need further investigation, you will be referred to an 	Ophthalmologist.
            </Text>

          </Stack>
        </SimpleGrid>
      </Container>
    );
  }