import Head from 'next/head'
import {  Box, Icon } from '@chakra-ui/react'
import LandingPage from '../components/pageContent/landingPage'
import Image from 'next/image'
import HeadImage from '../public/images/icon/africa.png'
import { buildUrl } from 'cloudinary-build-url';
import { createClient } from "next-sanity";
import sanityClient from "@sanity/client";

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   apiVersion: "2023-01-13",
//   useCdn: false,
//   token: process.env.SANITY_API_READ_TOKEN
// });

const client = sanityClient({ 
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-01-13"
  })



  export async function getStaticProps() {
    // const posts = await client.fetch(`*[_type == "landingPage"]`);
    const posts = await client.fetch(`
    *[_type == "post"]`);

  
  
    return {
      props: {
        posts
      }
    };
  }
  




export default function Home(props) {

  return (
    <div >
      <Head>
        <title>Home | MedOptics Ltd</title>
        <meta name="description" content="MedOptics Ltd Webpage" />
        {/* <link rel="shortcut icon" href="../public/favicon.ico"></link> */}
        <link rel="shortcut icon" href="../../../images/icon/logosquare.svg"></link>
      </Head>

      <Box>
        <LandingPage posts={props.posts} />
      </Box>

    </div>
  )
}
