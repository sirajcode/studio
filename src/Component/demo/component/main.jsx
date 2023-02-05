import React from 'react'
import styled from 'styled-components'
import { Section, Text, Flex, Column } from '../App'




/*
todo: Components page 
------------
? sections
! - container width  width='8'



------------
*/


const Wrapper = styled.div`
  padding-top: 5%;
  padding-bottom: 5%;
  li{
    padding:1px 0;
  }
 
`

const Components = () => {
  return (
    <Wrapper>
      <Section  width='8'>
      <Text darktext largeHeading bold Bottom='4' >Components</Text>
      <Text Bottom='6' darklabel> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, accusamus.</Text>
        <Flex justifyContent='space-between' >
          <Column four border round Padded='3' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
            <Column four border round Padded='3' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
            <Column four border round Padded='3' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
            <Column four border round Padded='3' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
        </Flex>
        <Section Top='3'>
        <Flex justifyContent='space-between' >
           <Column four border round Padded='3' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>  <Column four border round Padded='3' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>  <Column four border round Padded='3' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>  <Column four border round Padded='3' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
          </Flex>
        </Section>
      </Section>
        <Text darktext smallHeading Top='6' Bottom='4'> Component name </Text>
        <Text darklabel  Bottom='4'> props and description show etc</Text>
          <Section darklabel>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          </Section>


    </Wrapper>
  )
}

export default Components