import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

type PageHeaderProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

export function PageHeader(props: PageHeaderProps) {
  const { title, subtitle, children } = props;

  return (
    <Box pt={['20px', '20px', '45px']} pb={['15px', '15px', '30px']} borderBottomWidth={1} mb='30px'>
      <Container maxW='container.md' position='relative'>
        <Heading
          as='h1'
          color='black'
          fontSize={['25px', '25px', '35px']}
          fontWeight={700}
          mb={['2px', '2px', '5px']}
        >
          {title}
        </Heading>
        <Text fontSize={['14px', '14px', '15px']}>{subtitle}</Text>
      </Container>

      {children && (
        <Container maxW='container.md'>
          {children}
        </Container>
      )}
    </Box>
  );
}
