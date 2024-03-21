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
  
  export default function QualityPolicyPage() {
    return (
  
      
      <Container maxW={'6xl'} py={12} minHeight={{md:'110vh'}}>
        <Head>
          <title>Quality Policy | MedOptics Ltd</title>
          <meta name="description" content="MedOptics Ltd Webpage" />
          {/* <link rel="shortcut icon" href="../public/favicon.ico"></link> */}
          <link rel="shortcut icon" href="../../../images/icon/medoptics-logo-mini-square.jpeg"></link>
        </Head>
        <Heading
        //  as={'h1'}
          mb={4}
          fontSize={{
            base: "5xl",
            md: "7xl",
          }}
          // minHeight={'1vh'}
          fontWeight="bold"
          lineHeight="tall"
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
            Quality Policy
          </Text>{" "}
        </Heading>


  

<Text pt={2} pb={8} fontSize={'2xl'} fontWeight={300}>The Management and Staff of Med-Optics Uganda commit to providing comprehensive eye
examination and customized optical products and services by:</Text>
<UnorderedList spacing={2}>
  <ListItem>
    <Text color={'gray.900'} fontSize={'xl'}>
    Employing professional and competent workforce focused on enhancing the client experience;
    </Text>
  </ListItem>

  <ListItem>
    <Text color={'gray.900'} fontSize={'xl'}>
    Educating patients;
    </Text>
  </ListItem>

  <ListItem>
    <Text color={'gray.900'} fontSize={'xl'}>
    Investing in suitable infrastructure, technology and instrumentation that advances our
competitive advantage;
    </Text>
  </ListItem>

  <ListItem>
    <Text color={'gray.900'} fontSize={'xl'}>
    Building a reliable and resilient supply chain;
    </Text>
  </ListItem>

  <ListItem>
    <Text color={'gray.900'} fontSize={'xl'}>
    Leveraging strategic partnerships to improve access to services;
    </Text>
  </ListItem>

  <ListItem>
    <Text color={'gray.900'} fontSize={'xl'}>
    Establishing efficient and effective processes and;
    </Text>
  </ListItem>

  <ListItem>
    <Text color={'gray.900'} fontSize={'xl'}>
    Continually improving the performance of the QMS while ensuring compliance with the
mandatory regulatory and statutory requirements.
    </Text>
  </ListItem>

</UnorderedList>

<Box pt={8}>
  <Text color={'gray.900'} fontSize={'xl'}>
  This policy will be communicated to all interested parties and shall be reviewed annually in order to
ensure its continued suitability.
  </Text>
</Box>

      </Container>
    );
  }