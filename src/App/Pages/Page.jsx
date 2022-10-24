import React from 'react';
import Section from '../../DesignSystem/Section';
import Text from "../../DesignSystem/Text";
import Flex from "../../DesignSystem/Utils";
import Container from "../../DesignSystem/Container";

const Page = () => {
  return (
      <>
    <Container width='sm'>
          <Text fontSize={3} weight='600' marginBottom={3}>this is text here </Text>    
          <Text fontSize={2}> - this is text here </Text>    
          <Text fontSize={2}> - this is text here </Text>    
          <Text fontSize={2}> - this is text here </Text>    
          <Text fontSize={2}> - this is text here </Text>    
          <Text fontSize={2}> - this is text here </Text>    
    </Container>
          
      </>
  )
}

export default Page