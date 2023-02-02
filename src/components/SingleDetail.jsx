import { HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react'

    const SingleDetail = ({ name, username, email, address }) => {
      console.log(address)
        return (
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
                <Text fontWeight={'bold'}>{address.street}</Text>
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
        );
      };
 

export default SingleDetail
