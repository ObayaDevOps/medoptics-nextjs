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
  Show,
  SimpleGrid,
  Avatar
} from '@chakra-ui/react';

import Head from 'next/head'
import NextLink from 'next/link'
import NextImage from 'next/image'

import { getCloudinaryImage, getCloudinaryImageBlur } from '../../components/utils/cloudinaryImageRetreival';


//future improvement: The Exhbition cards should be defined once and can be passed here, will autopopulate the feed


const serviceCentreDetails = [
  {
    serviceCentreName: 'Forest Mall, Lugogo',
    address: 'Forest Mall, Lugogo bypass (Opp. Centenary Bank)',
    location: ['Kampala'],
    telephone: '0393 216 102 / 0706134668',
    email: 'forestmall@medopticsltd.com',
    active: true,
    insuranceCompanies: ['UAP, ', 'JUBILEE, ', 'ICEA, ', 'APA, ', 'AON-MINET, ', 'LIBERTY, ', 'GA, ', 'MARIE STOPES, ', 'BOU ' ],
    openingHours:"Monday – Friday: 08:00 – 17:00, Saturday: 09:00 – 15:00",
    photo: "forestmall.png",
    linkToExhibition: '',
    followLink:
        '',
  },
  {
    serviceCentreName: 'Kampala Road Service Centre',
    address: 'Mabirizi complex, Kampala Road, Opposite Pioneer Mall.',
    location: ['Kampala'],
    telephone: '0312 370 373 / 0706131253',
    email: 'mabirizi@medopticsltd.com',
    active: true,
    insuranceCompanies: ['UAP, ', 'JUBILEE, ', 'ICEA, ', 'APA, ', 'AON-MINET, ', 'LIBERTY, ', 'GA, ', 'MARIE STOPES, ', 'BOU, ', 'BUGEMA UNIVERSITY '],
    openingHours:"Monday – Friday: 08:00 – 17:00, Saturday: 09:00 – 15:00",
    photo: "mabirizi.png",
    linkToExhibition: '',
    followLink:
        'https://www.instagram.com/afropocene/',
  },
  {
    serviceCentreName: 'Ntinda Service Centre',
    address: 'Aponye Complex, Ntinda, 2 Semawata Road, Kampala',
    location: ['Kampala'],
    telephone: '0392175616 / 0706136613',
    email: 'ntinda@medopticsltd.com',
    active: true,
    insuranceCompanies: ['UAP, ', 'APA, ', 'ICEA, ', 'MARIE STOPES'],
    openingHours:"Monday – Friday: 10:00 – 18:00, Saturday: Closed",
    photo: "aponye_f6lixf.png",
    linkToExhibition: '',
    followLink:
        'https://www.instagram.com/afropocene/',
  },
  {
    serviceCentreName: 'Lubaga Service Center',
    address: 'Lubaga Hospital, Mutesa Road, Kampala (Outpatient Gate)',
    location: ['Kampala'],
    telephone: '0761001873 / 0701200197',
    email: 'lubaga@medopticsltd.com',
    active: true,
    insuranceCompanies: ['UAP, ', 'CIGNA, ', 'APA, ', 'MARIE STOPES '],
    openingHours:"Monday – Friday: 08:00 – 17:00, Saturday: 09:00 – 15:00",
    photo: "lubaga_sermov.jpg",
    linkToExhibition: '',
    followLink:
        'https://www.instagram.com/afropocene/',
  },
  {
    serviceCentreName: 'Mukono Service Centre',
    address: 'Purple Complex, Next to Church of Uganda Hospital, Mukono',
    location: ['Mukono'],
    telephone: '0753474567 / 0760641633',
    email: 'mukono@medopticsltd.com',
    active: true,
    insuranceCompanies: ['UAP, ', 'JUBILEE, ', 'ICEA, ', 'LIBERTY, ', 'APA,  ', 'MARIE STOPES, ', 'BOU '],
    openingHours:"Monday – Friday: 08:00 – 17:00, Saturday: 09:00 – 15:00",
    photo: "mukono_ctpr1s.jpg",
    linkToExhibition: '',
    followLink:
        'https://www.instagram.com/afropocene/',
  },
  {
    serviceCentreName: 'Masaka City Service Center',
    address: 'City View Complex, Elgin Street',
    location: ['Masaka'],
    telephone: '0771 890 100 / 0706131922',
    email: 'masaka@medopticsltd.com',
    active: true,
    insuranceCompanies: ['UAP, ', 'JUBILEE, ', 'ICEA, ', 'PRUDENTIAL, ', 'LIBERTY, '],
    openingHours:"Monday – Friday: 08:00 – 17:00, Saturday: 09:00 – 15:00",
    photo: "Masaka.png",
    linkToExhibition: '',
    followLink:
        'https://www.instagram.com/afropocene/',
  },
  {
    serviceCentreName: 'Arua City Service Center',
    address: 'Arua City, Avenue Street, Opposite Bank of Africa',
    location: ['Arua'],
    telephone: '0393 216 151 / 0706136602 ',
    email: 'arua@medopticsltd.com',
    active: true,
    insuranceCompanies: ['UAP, ', 'JUBILEE, ', 'ICEA, ','PRUDENTIAL, ', 'GA, ', 'LIBERTY, ', 'MARIE STOPES '],
    openingHours:"Monday – Friday: 08:00 – 17:00, Saturday: 09:00 – 15:00",
    photo: "arua_wqdswp.jpg",
    linkToExhibition: '',
    followLink:
        '',
  }
];





export const BlogAuthor = (props) => {
  return (
    <VStack marginTop="2" spacing="0" display="flex" alignItems="right">
      {/* <Image
        borderRadius="full"
        boxSize="40px"
        src={artistPFP}
        alt={`Avatar of ${props.artistName}`}
      /> */}
      <Text fontWeight="medium">{props.serviceCentreName}</Text>
      <Text  as="p" fontSize="md" marginTop="2">Address: {props.address}</Text>
      <Text  as="p" fontSize="md" marginTop="2">Telephone: {props.telephone}</Text>
      <Text  as="p" fontSize="md" marginTop="2"> Email: {props.email}</Text>
      <Text  as="p" fontSize="md" marginTop="2">Insurance: {props.insuranceCompanies}</Text>
    </VStack>
  );
};

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag alignContent="center" size={{base:'sm',lg:'md'}} variant="solid" colorScheme="green" key={tag}  >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};


function ServiceCentreCard(props) {
  const { serviceCentreName, address, location,telephone, email, active, insuranceCompanies, openingHours,
     photo ,index  } = props;

  return (
          <Box w="100%">
            <Box overflow="hidden" >
              {/* <NextLink passHref> */}
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {/* <NextImage src={photo} ></NextImage> */}
                <Show above='md'>
                  <Image
                    w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage(photo)} 
                    alt="Hellonext feedback boards software screenshot"
                    width={1000}
                    height={350} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur(photo)}
                  />
                </Show>
                <Show below='sm'>
                  <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage(photo)} 
                    alt="Hellonext feedback boards software screenshot"
                    width={550}
                    height={250} 
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur(photo)}
                  />
                </Show>                
              </Link>
              {/* </NextLink> */}
            </Box>
            <BlogTags tags={location} marginTop="3"  />
            <Heading fontSize="3xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {serviceCentreName}
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
                {openingHours}
            </Text>
            <BlogAuthor
              name={serviceCentreName}
              address={address}
              telephone={telephone}
              email={email}
              insuranceCompanies={insuranceCompanies}
              openingHours={openingHours}
            />
          </Box>




  )

}


const ServiceCentreList = () => {

  return (
    <Container maxW={'7xl'} p={{base:7, lg:0}}>
      <Head>
        <title>Service Centres | Med-Optics</title>
        <meta name="description" content="Med-Optics Ltd Webpage" />
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

// export async function getServerSideProps() {

//   var Odoo = require('odoo-xmlrpc');

//   var odoo = new Odoo({
//     url:'https://erp.medopticsltd.com',
//     port: 443,
//     db: 'erp',
//     username: 'audrey@medopticsltd.com',
//     password: 'J@maica22?'
// });


// // odoo.connect(function (err) {
// //   if (err) { return console.log(err); }
// //   console.log('Connected to Odoo server!');    
// // });

// //Now get a list of all products
// odoo.connect(function (err) {
//   if (err) { return console.log(err); }
//   console.log('Connected to Odoo server.');
  
//   var inParams = [];
//   inParams.push([['name']]);
//   var params = [];
//   params.push(inParams);

//   odoo.execute_kw('stock.inventory', 'search', params, function (err, value) {
//       if (err) { return console.log(err); }

//       console.log('Result: ', value);
//   });
// });

//     return {props: {products: "data"}};
// };


export default ServiceCentreList;



