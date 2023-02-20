import Head from 'next/head';
import React from "react";

import HeroWithSideImage from './heroWithSideImage';
import TwoColumnFeature from './twoColumnFeature';
import BasicStatistics from './statisticsBar';
import GridListWithDescription from './gridListWithDescription';
import FullWidthBannerWithBackgroundImage from './fullWidthBackgroundBanner';

import ThreeFeature from './threeFeatures';
import CallToActionBanner from './callToActionBanner';
import WithSpeechBubbles from './testimonials';







// pass the sanity retrieved data in here - first just display the text below Heading
export default function CallToActionWithAnnotation(props) {
  const { posts } = props

  console.log("PRoject ID:");
  console.log(process.env.NEXT_PUBLIC_SANITY_DATASET);
  console.log(props); //confirmed link - here we have all the props
  //now pass the parts needed into each of the compoenents

  //see what content they need


  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <HeroWithSideImage />
      <ThreeFeature />
      <TwoColumnFeature />
      <BasicStatistics />
      <GridListWithDescription />
      <FullWidthBannerWithBackgroundImage />
      <WithSpeechBubbles />
      <CallToActionBanner />

    </>
  );
}



// export const getStaticProps = async (ctx) => {
//   const { preview = false, previewData = {} } = ctx

//   const [settings, posts = []] = await Promise.all([
//     getSettings(),
//     getAllPosts(),
//   ])

//   return {
//     props: {
//       posts,
//       settings,
//       preview,
//       token: previewData.token ?? null,
//     },
//     revalidate: 10, // In seconds
//   }
// }
