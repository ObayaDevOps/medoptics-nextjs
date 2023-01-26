import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function FullWidthBannerWithBackgroundImage({props}) {
    return (
      <Flex
        w={'full'}
        h={useBreakpointValue({ base: '70vh', md: '40vh' })}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              High End Equipments
            </Text>

            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: 'sm', md: '2xl' })}>
              Scelerisque enim mauris aliquam hendrerit dictumst velit vitae nisi morbi porttitor. Sapien himenaeos cras integer lorem faucibus venenatis montes laoreet pulvinar id.

Elit imperdiet congue urna senectus tortor finibus hac placerat neque habitant malesuada. Venenatis magna sociosqu finibus a ornare maximus ultricies tellus imperdiet nostra congue.
            </Text>

            <Stack direction={'row'}>
              <Button
                bg={'green.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'green.500' }}>
                Show me more
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Show me more
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }