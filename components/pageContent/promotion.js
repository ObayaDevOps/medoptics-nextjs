import React from "react";
import { chakra, Box, Container,Flex, Center, useColorModeValue, Stack, Button, Icon, Image, Heading, Text } from "@chakra-ui/react";
import NextLink from 'next/link';

import NextImage from 'next/image';
import { urlForImage } from '../../lib/sanity.image'
import { getCloudinaryImage, getCloudinaryImageBlur } from '../../components/utils/cloudinaryImageRetreival';




export default function PromotionsPage(props) {
    const pageContent = props.content;
    const coverImageRef= pageContent.promotionImage.asset._ref;


    return (
        <Box>
            <Container  maxW={'4xl'}  minHeight={"50vh"} centerContent pb={{base:6, md:24}} >
                <Image
                    w="full"
                    layout='fill'
                    h={[ "full"]}
                    alt={`Cover Image`}
                    fit="cover"
                    src={urlForImage(coverImageRef).height(1200).width(1200).url()}
                    // sizes="100vw"
                    priority={true}
                    shadow={'2xl'}
                /> 
                    </Container>

        </Box>
    )
}