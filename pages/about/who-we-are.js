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
    Center,
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
          <title>Who We Are | MedOptics Ltd</title>
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
              // xl: "inline",
            }}
            w="full"
            bgClip="text"
            bgGradient='linear(to-r, green.500, green.400)'
            fontWeight="extrabold"
          >
            Who We Are
          </Text>{" "}
          
        </Heading>
  
  
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
          <Stack spacing={8}>
            <Text
              textTransform={'uppercase'}
              color={'green.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              About Us
            </Text>
            <Heading
                        // bgClip="text"
                        // bgGradient='linear(to-r, green.800, green.400)'
                        // fontWeight="extrabold"
            >Experience the confidence of better vision with Med-Optics' personalized eye care</Heading>
            <Text color={'gray.500'} fontSize={'xl'}>
            Med-Optics Vision Centre has been at the forefront of Uganda's eye care industry since 2002, consistently pushing boundaries in eye health care to provide optimal outcomes for our clients.
            Our focus at Med-Optics is to develop and lead the Ugandan Optometry industry with novel solutions that advance the existing standard of eye care, and enrich the lives and treatment alternatives for clients across the country, and beyond.
            Our inspiration is to help our clients see better, look better, and live to the fullest. We are committed to improving eye health through collaborations, education, and community outreach efforts to ensure that everyone has access to the best  solutions.
            Our culture is built around quality and a deep commitment to our customers, employees, and the community. We are unwavering in our pursuit to transform eye care standards and improve the lives of patients across Uganda, and beyond.            </Text>
                        
            {/* <Text color={'gray.500'} fontSize={'xl'}>
            Our focus at Med-Optics is to develop and lead the Ugandan Optometry industry with novel solutions that advance the existing standard of eye care, and enrich the lives and treatment alternatives for clients across the country, and beyond.
            </Text>
            <Text color={'gray.500'} fontSize={'xl'}>
            Our inspiration is to help our clients see better, look better, and live to the fullest. We are committed to improving eye health through collaborations, education, and community outreach efforts to ensure that everyone has access to the best  solutions.
            </Text>
            <Text color={'gray.500'} fontSize={'xl'}>
            Our culture is built around quality and a deep commitment to our customers, employees, and the community. We are unwavering in our pursuit to transform eye care standards and improve the lives of patients across Uganda, and beyond.
            </Text> */}

            <Heading
                        // bgClip="text"
                        // bgGradient='linear(to-r, green.800, green.400)'
                        // fontWeight="extrabold"
            >Our Vision</Heading>
            <Text color={'gray.500'} fontSize={'xl'}>
            To provide excellence in eye health care.
            </Text>

            <Heading
                        // bgClip="text"
                        // bgGradient='linear(to-r, green.800, green.400)'
                        // fontWeight="extrabold"
            >Our Mission</Heading>
            <Text color={'gray.500'} fontSize={'xl'}>
            Med Optics is devoted to improving our client’s vision. We passionately enhance and protect eye health by providing expertise, accessible services and high-quality products tailored to our client’s needs.
            </Text>



            <Heading
                        // bgClip="text"
                        // bgGradient='linear(to-r, green.800, green.400)'
                        // fontWeight="extrabold"
            >Our Story</Heading>
            <Text color={'gray.500'} fontSize={'xl'}>
            Upon completing his Masters of Optometry  completing the Professional Qualifying Exams (P.Q.Es) at the University of Bradford in the UK, our founder and Managing Director, Mr. Anguyo Dralega, returned to Uganda in 2001 with a mission to contribute to the advancement of the Optometry field in his home country. He noticed a lack of regulation, standards, and accountability in the fledgling industry. As a result, he founded Med-Optics, driven by the belief that Uganda deserves and can have access to high-quality and precise vision care services.
            Since our inception with a single Optometrist on Buganda Road in Kampala, we have grown significantly to become a team of over 30, stationed across 7 different service centers. Our primary objective of improving the optometry standards in Uganda remains unchanged, and we continue to uphold our core values of Professionalism, Honesty, Quality, and Excellence in all our endeavors.
             </Text>

             <Heading>Standards</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Quality and professionalism are at the core of what we do at Med-Optics. Our Optometrists are not only fully qualified but also registered with the Optical Association of Uganda and Allied Health Professionals Council, ensuring that you receive care from the best in the field. We strictly adhere to internationally recognized standards, guaranteeing you the highest level of service and care.            </Text>

            <Heading>Partnerships</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            At our core, we firmly believe in the age-old adage that "teamwork makes the dream work." That's why we collaborate with a diverse range of partners both locally and internationally, who share our unwavering commitment to improving eye health in Uganda.
            </Text>

            {/* <Heading>Our Partnerships</Heading> */}
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={5}>
                <Center>
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('marie_stopes_yvwpfp.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={298}
                    height={169}
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('marie_stopes_yvwpfp.jpg')}
                />
                </Center>
                <Center>
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('GA_ngnhmk.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={394}
                    height={128}
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('GA_ngnhmk.jpg')}
                />
                </Center>
                <Center>
                <Image
                    // w="full"
                    rounded="lg"
                    align='center'
                    shadow="2xl"
                    src={getCloudinaryImage('LIBERTY_liyt1v.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={225/1.5}
                    height={225/1.5}
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('LIBERTY_liyt1v.jpg')}
                />
                </Center>
                <Center>
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('AON-MINET_jwjmeq.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={400/1.5}
                    height={400/1.5}
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('AON-MINET_jwjmeq.jpg')}
                />
                </Center>
                <Center>
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('APA_pra0ek.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={271/1.25}
                    height={186/1.25} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('APA_pra0ek.jpg')}
                />
                </Center>
                <Center>
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('ICEA_cumz8v.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={800/3}
                    height={566/3}
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('ICEA_cumz8v.jpg')}
                />
                </Center>
                
                <Center>
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('JUBILEE_fnzxai.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={321}
                    height={157} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('JUBILEE_fnzxai.jpg')}
                />
                </Center>
                <Center>
                <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('UAP_rdhv3n.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={100}
                    height={100} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('UAP_rdhv3n.jpg')}
                />  
                </Center>                                                                                                                          

            </SimpleGrid>

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