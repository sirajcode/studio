import React from 'react'
import styled from 'styled-components';
import {VscAccount,VscGithub,VscGlobe,VscTwitter } from "react-icons/vsc";
import { Section, Button, Text, Flex, Column, Link, headerimg, design, component, library} from '../App'

/*
todo: landing page components 
- have to create full page with description
---------------
? sections
- header
- update and news
- library 
- components
---------------

*/

const Wrapper = styled.div`
  padding-top: 5%;
  padding-bottom: 5%;
  img{
    border-radius: 0.75rem;
  }
 
 `
 const StyledSec = styled.div`
  padding-top: 5%;
 `

const Landingpage = () => {
  return (
    <>
     <>
        <Wrapper>
          <Header />
          <Design />
          <Comp/>
        </Wrapper>
    </>
    </>
  )
}

export default Landingpage

const Header = () => {
  return (
      <>
        <Flex justifyContent='space-between'>
        <Section width='9' border Padded='6' round bg='bgc'>
          <Flex justifyContent='space-between'>
          <Section width='5'>
           <Text smallHeading bold darktext Bottom='3'>Studio, Dashboard ui Design system.</Text>
           <Text darklabel Bottom='4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, corporis! Sed, quisquam. Harum, excepturi quod?</Text>
           <Button  primary round>Get started</Button>
          </Section>
          <Section width='5'>
          <img src={headerimg} alt="Header Image" />
           </Section>
          </Flex>
        </Section>
        <Column four border Padded='6' Start='4' round bg='bgc'>
          <Text center largeHeading darktext Bottom='2'><VscAccount size={50}/></Text>
            <Text center darklabel Bottom='4' >Hi, i am siraj. a Front-end engineer and designs system developer </Text>
           <Section center>
             <Button primary oval round><VscGithub size={20}/> </Button>
              <Button Start='2' primary oval round ><p><VscTwitter size={20}/></p></Button>
            <Button Start='2' primary oval round ><p><VscGlobe size={20} /></p></Button>
             </Section>
          </Column>
      </Flex>
       <StyledSec>
        <Flex justifyContent='space-between' >
          <Column three border round Padded='4' bg='bgc'>
          <Text regular bold darktext Bottom='2'>Component Library</Text>
            <Text darkdisable Bottom='6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe suscipit harum </Text>
            <Text darkdisable>Lorem ipsum dolor sit amet consectetur </Text>
          </Column>
          <Column three border round Padded='4' bg='bgc'>
           <Text regular bold darktext Bottom='2'>Component Library</Text>
            <Text darkdisable Bottom='6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe suscipit harum </Text>
            <Text darkdisable>Lorem ipsum dolor sit amet consectetur </Text>
          </Column>
          <Column three border round Padded='4' bg='bgc'>
          <Text regular bold darktext Bottom='2'>Component Library</Text>
            <Text darkdisable Bottom='6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe suscipit harum </Text>
            <Text darkdisable>Lorem ipsum dolor sit amet consectetur </Text>
          </Column>
        </Flex>
        </StyledSec>
     </>
  )
}

const Design = () => {
 
  return (
    <>
      <Section>
          <Wrapper>
          <Text center darktext largeHeading bold Bottom='4' >Design & Library</Text>
           <Text center darklabel>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, modi?</Text>
          </Wrapper>
        <Flex justifyContent='space-between' >
          <Column three border round Padded='3' bg='bgc'>
          <img src={design} alt="Header Image" />
            <Text Top='4'regular strong darktext Bottom='1'>Grid</Text>
            <Text darkdisable>grid system props</Text>
          </Column>
          <Column three border round Padded='3' bg='bgc'>
            <img src={library} alt="Header Image" />
          <Text Top='4' regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
          <Column three border round Padded='3' bg='bgc'>
            <img src={component} alt="Header Image" />
          <Text Top='4' regular strong darktext Bottom='1'>Component Library</Text>
          <Text darkdisable>Lorem ipsum dolor sit amet consectetur </Text>
          </Column>
        </Flex>
        </Section>
    </>
  )
}

const Comp = () => {
 
  return (
    <>
      <Section>
          <Wrapper>
          <Text center darktext largeHeading bold Bottom='4' >Reusable Components</Text>
           <Text center darklabel>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, modi?</Text>
          </Wrapper>
        <Flex justifyContent='space-between' >
          <Column three border round Padded='4' >
            <Text regular bold darktext Bottom='2'>Component Library</Text>
            <Text darkdisable Bottom='6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe suscipit harum </Text>
            <Text darkdisable>Lorem ipsum dolor sit amet consectetur </Text>
          </Column>
          <Column three border round Padded='4' >
          <Text regular bold darktext Bottom='2'>Component Library</Text>
            <Text darkdisable Bottom='6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe suscipit harum </Text>
            <Text darkdisable>Lorem ipsum dolor sit amet consectetur </Text>
          </Column>
          <Column three border round Padded='4' >
            <Text regular bold darktext Bottom='2'>Component Library</Text>
            <Text darkdisable Bottom='6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe suscipit harum </Text>
            <Text darkdisable>Lorem ipsum dolor sit amet consectetur </Text>
          </Column>
        </Flex>
        </Section>
    </>
  )
}