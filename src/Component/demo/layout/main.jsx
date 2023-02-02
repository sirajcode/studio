import React from 'react'
import styled from 'styled-components'
import { Section, Text, Flex, Column, Link} from '../App'

const Wrapper = styled.div`
  padding-top: 5%;
  padding-bottom: 5%;
  li{
    padding:1px 0;
  }
`
const Layout = () => {
  return (
    <Wrapper>
       <Section Top='6'>
        <Text darktext smallHeading strong Bottom='4' >Layout</Text>
        <Flex justifyContent='space-between' >
          <Column four border round Padded='4' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
            <Column four border round Padded='4' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Container</Text>
          <Text darkdisable>layout first component</Text>
          </Column>
            <Column four border round Padded='4' bg='bgc'>
          <Text regular strong darktext Bottom='1'>Width</Text>
          <Text darkdisable>layout main part</Text>
          </Column>
            <Column four border round Padded='4' bg='bgc'>
         <Text regular strong Bottom='1'><Link darktext>Section</Link></Text>
          <Text darkdisable>div element enhance with props</Text>
          </Column>
        </Flex>
        </Section>
    </Wrapper>
  )
}

export default Layout