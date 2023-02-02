import React from 'react'
import styled from 'styled-components'
import { Section, Text, Flex, Column } from '../App'

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
      <Section Top='6'>
        <Text darktext smallHeading strong Bottom='4' >Components</Text>
        <Flex justifyContent='space-between' >

          <Column five border round Padded='4' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>

           <Column five border round Padded='4' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
           <Column five border round Padded='4' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
           <Column five border round Padded='4' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
           <Column five border round Padded='4' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
           
        </Flex>
        <Section Top='4'>
        <Flex justifyContent='space-between' >
          <Column five border round Padded='4' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
           <Column five border round Padded='4' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
           <Column five border round Padded='4' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
           <Column five border round Padded='4' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
           <Column five border round Padded='4' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
          </Flex>
          </Section>
        </Section>
    </Wrapper>
  )
}

export default Components