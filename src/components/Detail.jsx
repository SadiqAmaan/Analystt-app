import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Detail = ({ data: { name, email, username, address, company } }) => {
  const [isOpen, toogleOpen] = React.useState(false);
  return (
    <>
      <VStack
        mx={'auto'}
        w={'70%'}
        mt={'3rem'}
        boxShadow={'0px 0px 2px '}
        borderRadius="20px"
        pb="20px"
      >
        <HStack
          h={'20vh'}
          justifyContent={'space-evenly'}
          w={'100%'}
        >
          <VStack w={'15%'}>
            <Text fontSize={'1.5rem'} fontWeight={'bold'}>
              Name
            </Text>
            <Text fontWeight={'bold'} whiteSpace="nowrap">
              {name}
            </Text>
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
            <Text>{address.city}</Text>
          </VStack>
          <VStack w={'15%'}>
            <Heading fontSize={'1.5rem'} size={'md'} fontWeight={'bold'}>
              Company
            </Heading>
            <Text>{company?.name}</Text>
          </VStack>
          <VStack w={'15%'}>
            <Button
              colorScheme={'purple'}
              size={'sm'}
              onClick={() => toogleOpen(e => !e)}
            >
              {isOpen ? 'Close' : 'View'} Details
            </Button>
          </VStack>
        </HStack>
        {isOpen && (
          <HStack
            w={'90%'}
            h={'20vh'}
            boxShadow={'0px 0px 2px '}
            borderRadius="20px"
            pl={'1rem'}
          >
            <VStack alignItems={'flex-start'} w={'20%'} m={'1rem'} p='1rem' >
              <VStack alignItems={'flex-start'}>
                <Text fontSize={'1.3rem'} fontWeight={'bold'} >
                  Name
                </Text>
                <Text fontWeight={'bold'} whiteSpace="nowrap" >
                  {name}
                </Text>
              </VStack>
              <VStack alignItems={'flex-start'}>
                <Text fontSize={'1.3rem'} fontWeight={'bold'} >
                  Username
                </Text>
                <Text fontWeight={'bold'}>{username}</Text>
              </VStack>
            </VStack>
            <VStack alignItems={'flex-start'} w={'20%'} m={'1rem'} p='1rem'>
            <VStack alignItems={'flex-start'} >
                <Text fontSize={'1.3rem'} fontWeight={'bold'} >
                  Email
                </Text>
                <Text fontWeight={'bold'}>{email}</Text>
              </VStack>
              <VStack alignItems={'flex-start'}>
                <Text fontSize={'1.3rem'} fontWeight={'bold'} >
                  Street
                </Text>
                <Text fontWeight={'bold'}>{address.street}</Text>
              </VStack>
            </VStack>
            <VStack alignItems={'flex-start'} w={'20%'} m={'1rem'} p='1rem'>
            <VStack alignItems={'flex-start'}>
                <Text fontSize={'1.3rem'} fontWeight={'bold'} >
                  Suite
                </Text>
                <Text fontWeight={'bold'}>{address.suite}</Text>
              </VStack>
              <VStack alignItems={'flex-start'}>
                <Text fontSize={'1.3rem'} fontWeight={'bold'} >
                  Zipcode
                </Text>
                <Text fontWeight={'bold'}>{address.zipcode}</Text>
              </VStack>
            </VStack>
          </HStack>
        )}
      </VStack>
    </>
  );
};

export default Detail;
