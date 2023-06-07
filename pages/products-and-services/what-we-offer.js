import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    Box,
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
  
  export default function WhatWeOfferSplitWithImage() {
    return (
  
      
      <Container maxW={'6xl'} py={12} minHeight={{md:'110vh'}}>
        <Head>
          <title>What We Offer | MedOptics Ltd</title>
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
            Products and Services
          </Text>{" "}
        </Heading>

        <Text color={'gray.500'} fontSize={'3xl'} pb={5}>Transform your vision with the trusted experts at Med-Optics.</Text>

  
  
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} paddingBottom={10}>
            <Box>
              <Heading pb={3}>Lens Types</Heading>
              <Text color={'gray.500'} fontSize={'lg'} pb={3} >
              We offer single vision, bi-focal and progressive lenses. Your Optometrist and Optical Assistant will give you information on the various lens features and coatings available. 
              In addition to manufacturing our own lenses, we have established partnerships with BBGR Optical, Kodak, Thai Opticals and Spec Savers to offer our patients a diverse range of international products and ensure they have access to the highest  and best quality lenses available.            </Text>

              <Image
                      w="full"
                      rounded="lg"
                      shadow="2xl"
                      src={getCloudinaryImage('IMG_9687_hxrtym.jpg')} 
                      alt="Hellonext feedback boards software screenshot"
                      width={5472}
                      height={3648} 
                      placeholder="blur"
                      blurDataURL={getCloudinaryImageBlur('IMG_9687_hxrtym.jpg')}
                    />
            </Box>


            <Box>
            <Heading>Lens Coatings</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            We offer a range of features to enhance the functionality of our lenses. These include anti-glare coating to protect against harsh white light and photo-chromic technology that darkens in sunlight to safeguard sensitive eyes from harmful UV rays. In addition, we can customize your lenses with a tint to create a personalized pair of prescription sunglasses.
            </Text>
            <Image
                    w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('pexels-ferenc-tóth-700728_cbpvry.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={5184}
                    height={3456} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('pexels-ferenc-tóth-700728_cbpvry.jpg')}
                  />
            </Box>

            <Box>
            <Heading>Contact Lenses</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Contact lens examination and fitting is quite a lengthy and specialized service. It is currently available only at Forest Mall branch (link to Contact Us). However, for clients who need to purchase contact lens solutions, they are available in several branches. Contact us for availability.
            </Text>
            <Image
                    w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('pexels-nataliya-vaitkevich-5842842_rspx6j.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={6420}
                    height={4160} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('pexels-nataliya-vaitkevich-5842842_rspx6j.jpg')}
                  />
            </Box>

            <Box>
            <Heading>Sunglasses</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            To avoid damage from prolonged exposure to UV rays, it is always best to but 100% UV Protection shades. They are available in all our centres from only UGX 50,000.            </Text>
            <Image
                    w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('Medoptics-sunglasses-5-scaled-1000x1000_mnzdbx.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={1000}
                    height={1000} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('Medoptics-sunglasses-5-scaled-1000x1000_mnzdbx.jpg')}
                  />
            </Box>

            <Box>
            <Heading>Frames</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Med-Optics offers a vast collection of frames in diverse styles, colors, and sizes, catering to everyone's preferences. 
            </Text>
            <Image
                    w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('IMG_9798_xqaihq.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={5472}
                    height={3648} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('IMG_9798_xqaihq.jpg')}
                  />
            </Box>

            <Box>
            <Heading>Accessories</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            In addition to providing eye glasses and contact lenses, we offer a range of accessories to keep them in excellent condition and optimize their use. These include hard and soft cases, chords, cleaning cloths, and cleaning solutions, all designed to help you maintain your eyewear and maximize their longevity.
            </Text>
            <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('IMG_7477-1000x1000_nbrbgt.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={1000}
                    height={1000} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('IMG_7477-1000x1000_nbrbgt.jpg')}
                  />
          {/* </Stack> */}
          </Box>


        </SimpleGrid>

        <Heading pt={15}>Computerized Eye Examination</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            A new experience in vision
Experience clear vision with our comprehensive eye exams and personalized eyewear solutions.
Our state-of-the-art equipment, combined with the expertise of our highly trained eye care professionals ensures accurate diagnoses and effective treatments, and allows us to provide the highest level of care to our patients.            </Text>

            <Heading pt={10}>Lifelong Aftercare</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            You can count on our support to be available to you even long after you have left our service centres. We are here for you whenever you need us.
All completed glasses undergo rigorous quality control checks before being dispensed. We recommend coming in yourself to fit your glasses and ensure they are correct. Adjustments sometimes need to be made.
Repairs: Most repairs take place within the Centre, but some may need to be made at the lab. Small repairs involving specs dispensed by Med-Optics are free of charge. and there is a small charge for spectacles from other companies. 
We have a simple policy that gives our valued clients peace of mind: if we get it wrong, we will put it right free of charge. *Terms and conditions apply*            </Text>


      </Container>
    );
  }