import {
    Stack,
    Flex,
    Button,
    Text,
    Box,
    Show,
    VStack,
    useBreakpointValue,
    useColorModeValue,
    chakra,


  } from '@chakra-ui/react';



  export default function FullWidthBannerWithBackgroundImage(props) {
    const pageContent = props.content;

    return (
      <Box>
        <Show below='sm'>
        <Flex
        w={'full'}
        h={useBreakpointValue({ base: '800px', md: '80vh' })}
        backgroundImage={
          // 'url(https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1686144658/Slide-5_rzjiaj.png)'
          // 'url(https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1687177643/pexels-anna-shvets-3846023_xipiiv.jpg)'
          'url(https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1687177749/pexels-pavel-danilyuk-5996704_fhvero.jpg)'

        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
          // paddingBottom={{md: 15}}
          p={{base:12}}
          >
          <Stack maxW={'2xl'} align={'flex-start'} >
          <VStack alignItems="flex-start" spacing="20px">
            <Text
              textTransform={'uppercase'}
              color={'green.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Why Choose Us?
            </Text>
              <chakra.h2 
              fontSize={{base: '5xl', md:"6xl"}} 
              fontWeight="700"
              bgClip="text"
              // bgGradient='linear(to-r, green.600, green.300)'
              fontWeight="extrabold"
              color={'white'}
              letterSpacing={{
                base: "normal",
                md: "tight",
                }}
                pb={{base:5}}
              >
                {/* State-Of-The-Art Eye Care Equipment */}
              </chakra.h2>
            </VStack>

            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '2xl', md: '2xl' })}>
                We exist to make sure you and your loved ones have the best vision possible we protected enhanced vision through comprehensive examinations with the expertise of our highly trained optimists and by equipping them with state-of-the-art equipment we want you to look good too so we offer a great range of lens'.
            </Text>
          </Stack>
        </VStack>
      </Flex>
        </Show>


        <Show above='md'>
        <Flex
        w={'full'}
        h={useBreakpointValue({ base: '800px', md: '80vh' })}
        backgroundImage={
          'url(https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1686144658/Slide-5_rzjiaj.png)'
          // 'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
          // paddingBottom={{md: 15}}
          p={{base:12}}
          >
          <Stack maxW={'2xl'} align={'flex-start'} >
          <VStack alignItems="flex-start" spacing="20px">
            <Text
              textTransform={'uppercase'}
              color={'green.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Why Choose Us?
            </Text>
              <chakra.h2 
              fontSize={{base: '5xl', md:"6xl"}} 
              fontWeight="700"
              bgClip="text"
              // bgGradient='linear(to-r, green.600, green.300)'
              fontWeight="extrabold"
              color={'white'}
              letterSpacing={{
                base: "normal",
                md: "tight",
                }}
                pb={{base:5}}
              >
                {/* State-Of-The-Art Eye Care Equipment */}
              </chakra.h2>
            </VStack>

            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: 'lg', md: '2xl', lg: '4xl' })}>
                We exist to make sure you and your loved ones have the best vision possible. We protect and enhance vision through comprehensive examinations with the expertise of our highly trained optometrists and by equipping them with state-of-the-art equipment you can be assured of the best quality care. We want you to look good too, so we offer a great range of frames and lenses.
            </Text>
          </Stack>
        </VStack>
      </Flex>
        </Show>

      </Box>

    );
  }