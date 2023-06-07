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
          <title> People Trust Us | MedOptics Ltd</title>
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
          paddingBottom={5}
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
            Why People Trust Us
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

            <Heading>Discover why Med-Optics is the trusted choice for all your eye care needs.</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            At Med-Optics, we do not just offer eye care services and products; we provide solutions that make a difference. Our years of experience in the industry have given us the expertise to diagnose and treat a wide range of eye conditions. We have helped countless customers achieve better vision and improved eye health. 
            At Med-Optics, we understand that your vision is an essential aspect of your overall health and well-being. That is why our experienced optometrists and trained optical assistants are dedicated to providing you with the highest quality care and service possible.  Our team is committed to helping you achieve optimal vision health. 
            Our state-of-the-art clinics offer advanced diagnostic tools and treatments, such as OCT imaging to help you achieve optimal vision health.
            We have a wide collection of lenses, frames, and sunglasses that suit every style and budget. Trust in our expertise, commitment to quality, and personalized care. We believe that your vision deserves nothing but the best, and we are confident that you will be satisfied with the care and service you receive from us.             </Text>

            <Heading>Standards</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Quality and professionalism are at the core of what we do at Med-Optics. Our Optometrists are not only fully qualified but also registered with the Optical Association of Uganda and Allied Health Professionals Council, ensuring that you receive care from the best in the field. We strictly adhere to internationally recognized standards, guaranteeing you the highest level of service and care.            </Text>

            <Heading>Partnerships</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            At our core, we firmly believe in the age-old adage that "teamwork makes the dream work." That's why we collaborate with a diverse range of partners both locally and internationally, who share our unwavering commitment to improving eye health in Uganda.
            </Text>

            {/* <Heading>Our Partnerships</Heading>
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={5}>
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('anguyo.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={20}
                    height={50} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
                />
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('anguyo.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={20}
                    height={50} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
                />
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('anguyo.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={20}
                    height={50} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
                />
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('anguyo.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={20}
                    height={50} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
                />
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('anguyo.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={20}
                    height={50} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
                />
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('anguyo.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={20}
                    height={50} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
                />
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('anguyo.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={20}
                    height={50} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
                />
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('anguyo.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={20}
                    height={50} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
                />
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('anguyo.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={20}
                    height={50} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
                />                                                                                                                                

            </SimpleGrid> */}

            <Text color={'gray.500'} fontSize={'lg'}>
            We also offer optical care packages for corporate bodies. Ask us for details.
            </Text>

            <Heading>Giving Back</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            We are committed to making eye screening accessible to everyone in the different 	communities through our outreach and CSR program. If your organization, school, or place of 	worship is interested in receiving mobile screening services, please reach out to us. We will be 		more than happy to come to you!            </Text>

          </Stack>
        </SimpleGrid>
      </Container>
    );
  }