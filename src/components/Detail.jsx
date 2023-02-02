import {  Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';


const Detail = ({ name, email, username, address, company }) => {
  return (
    <>
      <VStack mt={'3rem'} mb={'3rem'}>
        <HStack
          w={'70%'}
          h={'25vh'}
          maxH={'35vh'}
          justifyContent={'space-evenly'}
          boxShadow={'0px 0px 2px '}
          borderRadius={'20px'}
        >
          <VStack w={'15%'}>
            <Text fontSize={'1.5rem'} fontWeight={'bold'}>
              Name
            </Text>
            <Text fontWeight={'bold'}>{name}</Text>
          </VStack>
          <VStack w={'15%'}>
            <Heading fontSize={'1.5rem'} size={'md'} fontWeight={'bold'}>
              Contact
            </Heading>
            <Text>{email}</Text>
          </VStack>
          <VStack w={'15%'}>
            <Heading fontSize={'1.5rem'} size={'md'} fontWeight={'bold'}>
              City
            </Heading>
            <Text>{address}</Text>
          </VStack>
          <VStack w={'15%'}>
            <Heading fontSize={'1.5rem'} size={'md'} fontWeight={'bold'}>
              Company
            </Heading>
            <Text>{company}</Text>
          </VStack>
          <VStack w={'15%'}>
            <Button colorScheme={'purple'} size={'sm'}>
              View Details
            </Button>
          </VStack>
        </HStack>
        <HStack
            w={'70%'}
            h={'25vh'}
            maxH={'35vh'}
            justifyContent={'space-evenly'}
            boxShadow={'0px 0px 2px '}
            borderRadius={'20px'}
          >
            <VStack w={'50%'} alignItems={'space-evenly'}>
              <HStack w={'50%'}  > 
                <Text fontSize={'1.2rem'} fontWeight={'bold'}>
                  Name
                </Text>
                <Text fontWeight={'bold'}>{name}</Text>
              </HStack>
              <HStack>
                <Text fontSize={'1.2rem'} fontWeight={'bold'}>
                  Username
                </Text>
                <Text fontWeight={'bold'}>{username}</Text>
              </HStack>
              <HStack>
                <Text fontSize={'1.2rem'} fontWeight={'bold'}>
                  Email
                </Text>
                <Text fontWeight={'bold'}>{email}</Text>
              </HStack>
            </VStack>
            <VStack w={'50%'} alignItems={'space-evenly'} >
              <HStack>
                <Text fontSize={'1.2rem'} fontWeight={'bold'}>
                  Street
                </Text>
                <Text fontWeight={'bold'}>Kuch Bhi</Text>
              </HStack>
              <HStack>
                <Text fontSize={'1.2rem'} fontWeight={'bold'}>
                  Suite
                </Text>
                <Text fontWeight={'bold'}>Kuch Bhi</Text>
              </HStack>
              <HStack>
                <Text fontSize={'1.2rem'} fontWeight={'bold'}>
                  Zipcode
                </Text>
                <Text fontWeight={'bold'}>Kuch Bhi</Text>
              </HStack>
            </VStack>
          </HStack>
      </VStack>
    </>
  );
};

export default Detail;
