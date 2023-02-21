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

export default function CallToActionWithAnnotation(props) {
  const landingPageContent  = props.pageContent[0] || [];

  console.log("PRoject ID:");
  console.log(process.env.NEXT_PUBLIC_SANITY_DATASET);
  console.log(landingPageContent); //confirmed link - here we have all the props

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <HeroWithSideImage content={landingPageContent}  />
      <ThreeFeature content={landingPageContent} />
      <TwoColumnFeature content={landingPageContent} />
      <BasicStatistics content={landingPageContent} />
      <GridListWithDescription content={landingPageContent} />
      <FullWidthBannerWithBackgroundImage content={landingPageContent} />
      <WithSpeechBubbles content={landingPageContent} />
      <CallToActionBanner content={landingPageContent} />

    </>
  );
}