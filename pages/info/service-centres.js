import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  useColorMode,
  Container,
  VStack,
  SimpleGrid,
  Avatar
} from '@chakra-ui/react';

import Head from 'next/head'
import NextLink from 'next/link'
import NextImage from 'next/image'

import odurMuwawaPhoto from '../../public/images/exhibitions/odur-muwawa-kla-art/odur-studio-plants.jpg'
import { getCloudinaryImage, getCloudinaryImageBlur } from '../../components/utils/cloudinaryImageRetreival';


//future improvement: The Exhbition cards should be defined once and can be passed here, will autopopulate the feed


const serviceCentreDetails = [
  {
    serviceCentreName: 'Forest Mall, Lugogo',
    address: 'Forest Mall, Lugogo bypass (Opp. Centenary Bank)',
    telephone: '0393 216 102',
    email: 'forestmall@medopticsltd.com',
    active: true,
    insuranceCompanies: ['UAP', 'JUBILEE', 'ICEA', 'APA', 'AON-MINET', 'CASE MEDCARE'],
    openingHours:"Monday – Friday: 08:00 – 17:00, Saturday: 09:00 – 15:00",
    photo: "Med-Optics-Slide1.png",
    linkToExhibition: '',
    followLink:
        'https://www.instagram.com/afropocene/',
  },
  {
    serviceCentreName: 'Mabirizi Complex',
    address: 'Mabirizi Complex, Plot 47, Kampala Road (Opp Antonio’s)',
    telephone: '0312 370 373',
    email: 'mabirizi@medopticsltd.com',
    active: true,
    insuranceCompanies: ['UAP', 'JUBILEE', 'ICEA', 'APA', 'AON-MINET', 'CASE MEDCARE'],
    openingHours:"Monday – Friday: 08:00 – 17:00, Saturday: 09:00 – 15:00",
    photo: "Med-Optics-Slide1.png",
    linkToExhibition: '',
    followLink:
        'https://www.instagram.com/afropocene/',
  },
  {
    serviceCentreName: 'Muwawa',
    address: 'Odur',
    telephone: '2021-04-06',
    email: '2021-04-06',
    active: true,
    insuranceCompanies: ['Installation', 'Sculpture', 'Aluminium'],
    openingHours:"Odur reconstructs his living space, placing a hanging installation of sand cast aluminium shaped like bullets, in the centre of the room. ",
    photo: "Med-Optics-Slide1.png",
    linkToExhibition: '',
    followLink:
        'https://www.instagram.com/afropocene/',
  },
  {
    serviceCentreName: 'Muwawa',
    address: 'Odur',
    telephone: '2021-04-06',
    email: '2021-04-06',
    active: true,
    insuranceCompanies: ['Installation', 'Sculpture', 'Aluminium'],
    openingHours:"Odur reconstructs his living space, placing a hanging installation of sand cast aluminium shaped like bullets, in the centre of the room. ",
    photo: "Med-Optics-Slide1.png",
    linkToExhibition: '',
    followLink:
        'https://www.instagram.com/afropocene/',
  },
  {
    serviceCentreName: 'Muwawa',
    address: 'Odur',
    telephone: '2021-04-06',
    email: '2021-04-06',
    active: true,
    insuranceCompanies: ['Installation', 'Sculpture', 'Aluminium'],
    openingHours:"Odur reconstructs his living space, placing a hanging installation of sand cast aluminium shaped like bullets, in the centre of the room. ",
    photo: "Med-Optics-Slide1.png",
    linkToExhibition: '',
    followLink:
        'https://www.instagram.com/afropocene/',
  },
  {
    serviceCentreName: 'Muwawa',
    address: 'Odur',
    telephone: '2021-04-06',
    email: '2021-04-06',
    active: true,
    insuranceCompanies: ['Installation', 'Sculpture', 'Aluminium'],
    openingHours:"Odur reconstructs his living space, placing a hanging installation of sand cast aluminium shaped like bullets, in the centre of the room. ",
    photo: "Med-Optics-Slide1.png",
    linkToExhibition: '',
    followLink:
        'https://www.instagram.com/afropocene/',
  }
];





export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      {/* <Image
        borderRadius="full"
        boxSize="40px"
        src={artistPFP}
        alt={`Avatar of ${props.artistName}`}
      /> */}
      <Text fontWeight="medium">{props.serviceCentreName}</Text>
      <Text>—</Text>
      {/* <Text>{props.date.toLocaleDateString()}</Text> */}
    </HStack>
  );
};

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="green" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

//   {
//   serviceCentreName: 'Muwawa',
//   address: 'Odur',
//   telephone: '2021-04-06',
//   email: '2021-04-06',
//   active: true,
//   insuranceCompanies: ['Installation', 'Sculpture', 'Aluminium'],
//   openingHours:"Odur reconstructs his living space, placing a hanging installation of sand cast aluminium shaped like bullets, in the centre of the room. ",
//   photo: odurMuwawaPhoto,
//   linkToExhibition: '',
//   followLink:
//       'https://www.instagram.com/afropocene/',
// },

function ServiceCentreCard(props) {
  const { serviceCentreName, telephone, email, active, insuranceCompanies, openingHours, exhibitionDescription,
     photo,linkToExhibition,  followLink ,index  } = props;

  return (
          <Box w="100%">
            <Box overflow="hidden">
              <NextLink href={linkToExhibition} passHref>
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {/* <NextImage src={photo} ></NextImage> */}
                <Image
                  w="full"
                  rounded="lg"
                  shadow="2xl"
                  src={getCloudinaryImage(photo)} 
                  alt="Hellonext feedback boards software screenshot"
                  width={1349}
                  height={550} 
                  placeholder="blur"
                  blurDataURL={getCloudinaryImageBlur(photo)}
                />
              </Link>
              </NextLink>
            </Box>
            <BlogTags tags={insuranceCompanies} marginTop="3" />
            <Heading fontSize="2xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {serviceCentreName}
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
                {openingHours}
            </Text>
            <BlogAuthor
              name={serviceCentreName}
            />
          </Box>

  )

}


const ServiceCentreList = () => {

  return (
    <Container maxW={'7xl'} p="3">
      <Head>
        <title>Service Centres | Med-Optics</title>
        <meta name="description" content="Med-Optics Ltd Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/medoptics-logo-mini-square.jpeg"></link>
      </Head>

      <Heading
       as={'h1'}
        mb={6}
        fontSize={{
          base: "5xl",
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
          Our Service Centres
        </Text>{" "}
        
      </Heading>
{/* 
      <Heading
      
      as="h2" 
      marginTop="10"
      w="full"
      bgClip="text"
      bgGradient='linear(to-r, green.500, green.300)'
      fontWeight="extrabold"
      >
        Kampala
      </Heading> */}
      {/* <Divider marginTop="5" /> */}

      <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={'20'}
          mt={16}
          mx={'auto'}>
          {serviceCentreDetails.map((cardInfo, index) => (
            <ServiceCentreCard {...cardInfo} index={index} key={index} />
          ))}
        </SimpleGrid>
    </Container>
  );
};

export default ServiceCentreList;



