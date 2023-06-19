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
    Center,
    Link,
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
          <title>Safety Wear | MedOptics Ltd</title>
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
          >Safety Wear
          </Text>{" "}
        </Heading>

        <Text color={'gray.500'} fontSize={'2xl'} pb={5}>
            Optimizing Efficiency & Productivity though Optical Services and Safety Wear 
        </Text>

        <Center pb={10}>
        <Image
                    // w="full"
                    rounded="lg"
                    align='center'
                    shadow="2xl"
                    src={getCloudinaryImage('WhatsApp_Image_2023-06-17_at_18.18.59_z7oaw1.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    width={800}
                    height={450}
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('WhatsApp_Image_2023-06-17_at_18.18.59_z7oaw1.jpg')}
                />

        </Center>


        <Text color={'gray.500'} fontSize={'lg'} pb={5}>
        We understand that protecting workers from a range of workplace hazards is a top priority for your organization. As an oil and gas company operating in Uganda's new oil fields, your commitment to health and safety is crucial not only for the well-being of your employees and for efficiency and productivity.
        </Text>

        <Text color={'gray.500'} fontSize={'lg'} pb={10} >
        The specific requirements of the industry can only be reliably delivered by a qualified, registered specialist provider with a track record for giving high-level eye health care; Med-Optics offers a 360 solution to the health and protection of your employees’ sight; whether they are engaging in medium to higher-risk procedures such as welding and manufacture or in the low-risk office environment where comfortable vision supports efficiency.
        </Text>


        <Text color={'gray.500'} fontSize={'xl'}  >
        Med-Optics offers:   
        </Text>
        <UnorderedList>
            <ListItem>
                <Text color={'gray.500'} fontSize={'lg'}  >
                Pre-employment screening 
                </Text>
            </ListItem>

            <ListItem>
                <Text color={'gray.500'} fontSize={'lg'}  >
                Driver and machine operator sight tests  
                </Text>
            </ListItem>

            <ListItem>
                <Text color={'gray.500'} fontSize={'lg'}  >
                Joint needs assessment with Health and Safety officers
                </Text>
            </ListItem>

            <ListItem>
                <Text color={'gray.500'} fontSize={'lg'}  >
                Provision of eye protection that is EN166 certified 
                </Text>
            </ListItem>

            <ListItem>
                <Text color={'gray.500'} fontSize={'lg'}  >
                Partnership with reputable international suppliers – Essilor and Infield
                </Text>
            </ListItem>

            <ListItem>
                <Text color={'gray.500'} fontSize={'lg'}  >
                Safety glasses that are specific to individual workers’ needs (known as RX or prescription glasses). 
                </Text>
            </ListItem>


        </UnorderedList>


        <Text color={'gray.500'} fontSize={'xl'} pt={6} >
        Which Hazards do we deal with?
        </Text>
        <UnorderedList>
        <ListItem>
            <Text color={'gray.500'} fontSize={'lg'}  >
            Low and medium velocity particles.
            </Text>
        </ListItem>

        <ListItem>
            <Text color={'gray.500'} fontSize={'lg'}  >
            Welding.
            </Text>
        </ListItem>

        <ListItem>
            <Text color={'gray.500'} fontSize={'lg'}  >
            High exposure to UV light.
            </Text>
        </ListItem>

        <ListItem>
            <Text color={'gray.500'} fontSize={'lg'}  >
            Chemical spill/splash and gases.
            </Text>
        </ListItem>
        </UnorderedList>

        <Link href='/info/contact-enquiry'> 
            <Text color={'gray.500'} fontSize={'lg'}  >
            Contact us  for further information
            </Text>
        </Link>

            <SimpleGrid 
                columns={{ base: 1, md: 1 }} 
                spacing={'20'}
                mt={16}
                mx={'auto'}
            >
                <Center>
                    <Image
                        // w="full"
                        rounded="lg"
                        align='center'
                        shadow="2xl"
                        src={getCloudinaryImage('WhatsApp_Image_2023-06-17_at_18.19.55_zmrdgj.jpg')} 
                        alt="Hellonext feedback boards software screenshot"
                        width={800}
                        height={450}
                        placeholder="blur"
                        blurDataURL={getCloudinaryImageBlur('WhatsApp_Image_2023-06-17_at_18.19.55_zmrdgj.jpg')}
                    />
                </Center>
                <Center>
                    <Image
                        w="full"
                        rounded="lg"
                        align='center'
                        shadow="2xl"
                        src={getCloudinaryImage('WhatsApp_Image_2023-06-17_at_18.20.21_kt1k8f.jpg')} 
                        alt="Hellonext feedback boards software screenshot"
                        width={800}
                        height={450}
                        placeholder="blur"
                        blurDataURL={getCloudinaryImageBlur('WhatsApp_Image_2023-06-17_at_18.20.21_kt1k8f.jpg')}
                    />
                </Center>
                <Center>
                    <Image
                        // w="full"
                        rounded="lg"
                        align='center'
                        shadow="2xl"
                        src={getCloudinaryImage('WhatsApp_Image_2023-06-17_at_18.21.32_mjmosb.jpg')} 
                        alt="Hellonext feedback boards software screenshot"
                        width={800}
                        height={450}
                        placeholder="blur"
                        blurDataURL={getCloudinaryImageBlur('WhatsApp_Image_2023-06-17_at_18.21.32_mjmosb.jpg')}
                    />
                </Center>
                <Center>
                    <Image
                        // w="full"
                        rounded="lg"
                        align='center'
                        shadow="2xl"
                        src={getCloudinaryImage('WhatsApp_Image_2023-06-17_at_18.22.29_wfgr4v.jpg')} 
                        alt="Hellonext feedback boards software screenshot"
                        width={800}
                        height={450}
                        placeholder="blur"
                        blurDataURL={getCloudinaryImageBlur('WhatsApp_Image_2023-06-17_at_18.22.29_wfgr4v.jpg')}
                    />
                </Center>


            </SimpleGrid>


      </Container>
    );
  }