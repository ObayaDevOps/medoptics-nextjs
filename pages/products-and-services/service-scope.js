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
  
  export default function ServiceScopeSplitWithImage() {
    return (
  
      
      <Container maxW={'6xl'} py={12} minHeight={{md:'110vh'}}>
        <Head>
          <title>Service Scope | MedOptics Ltd</title>
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
           Service Scope
          </Text>{" "}
          
        </Heading>
  
  
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
          <Stack spacing={8}>
            {/* <Image
                    w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('anguyo.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={349}
                    height={400} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
                  /> */}

            <Heading>Optometry</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Our team of experienced optometrists and optical assistants use the latest technology to provide you with the highest quality eye care services. 
            We offer comprehensive eye exams for patients of all ages. Our state-of-the-art equipment allows us to detect and diagnose a wide range of vision problems, including short sightedness, long sightedness, astigmatism, and age-related vision loss. We also provide screenings for eye diseases such as glaucoma, cataracts, diabetic retinopathy and many more.
            We carry a wide selection of frames, lenses, and contact lenses to meet your needs. Our on-site lab ensures fast turnaround times for eye glasses and contact lenses, and our team will work with you to find the perfect frames to suit your style and needs.
            Thank you for considering us for your optical needs. We look forward to helping you see better, look better and feel better!            </Text>

            <Heading>Lens Production, Glazing and Fitting</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Our team of experts have decades of experience in the industry, and we use the latest technology to ensure that you receive the highest quality products and services.

            Our glazing process involves cutting and edging the lenses to fit your frames perfectly. We use state-of-the-art equipment to ensure precision and accuracy, and we also inspect each lens individually to ensure that they meet our high standards.

            Once the lenses have been cut and edged, we will fit them into your frames and adjust them for a comfortable and secure fit. We take great care to ensure that the lenses are aligned correctly, so that your vision will be clear.            </Text>

            <Heading>Dispensing and Free Repairs</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Whether you are in need of new eye glasses or contact lenses, or are experiencing issues with your current pair of spectacles, our team of experienced optometrists and opticians is here to help.
            And if you ever experience any problems with your eye glasses or contacts, simply bring them back to us and we'll repair them for free (terms and conditions apply) 
            </Text>

          </Stack>
        </SimpleGrid>
      </Container>
    );
  }