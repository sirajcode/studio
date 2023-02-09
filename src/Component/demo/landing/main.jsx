import React from 'react'
import styled from 'styled-components';
import {VscAccount,VscGithub,VscGlobe,VscTwitter } from "react-icons/vsc";
import { Section, Text, Flex, Column,Button, headerimg, design, component, library,Row } from '../App'


/*
todo: landing page  
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
      <Row justifyContent='space-between'>
        <Column two border Padded='4' round  bg='bgc' Top='3'>
          <Row justifyContent='space-between'>
          <Section>
           <Text smallHeading bold darktext Bottom='3' >Studio, Dashboard ui Design system.</Text>
           <Text darkdisable Bottom='4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, corporis! Sed, quisquam. Harum, excepturi quod?</Text>
           <Button med default round>Get started</Button>
          </Section>
          {/* <Section width='5'>
          <img src={} alt="Header Image" />
           </Section> */}
          </Row>
        </Column>
        <Column  two border Padded='4' round bg='bgc' Top='3'>
          <Text  Bottom='3' darktext smallHeading bold>Siraj <Button default circle>developer</Button></Text>
          <Text darkdisable Bottom='4' >  Hi, i am siraj. a Front-end engineer and designs system developer</Text>
        
              <Button default oval round><VscGithub size={20}/> </Button>
              <Button Start='2' default  oval round ><p><VscTwitter size={20}/></p></Button>
              <Button Start='2' default oval round ><p><VscGlobe size={20} /></p></Button>
          </Column>
      </Row>
       <StyledSec>
        <Row justifyContent='space-between' >
          <Column three border round Padded='4' bg='bgc' Top='3'>
          <Text regular bold darktext Bottom='2'>Component Library</Text>
            <Text darkdisable Bottom='6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe suscipit harum </Text>
            <Text darkdisable>Lorem ipsum dolor sit amet consectetur </Text>
          </Column>
          <Column three border round Padded='4' bg='bgc' Top='3'>
           <Text regular bold darktext Bottom='2'>Component Library</Text>
            <Text darkdisable Bottom='6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe suscipit harum </Text>
            <Text darkdisable>Lorem ipsum dolor sit amet consectetur </Text>
          </Column>
          <Column three border round Padded='4' bg='bgc' Top='3'>
          <Text regular bold darktext Bottom='2'>Component Library</Text>
            <Text darkdisable Bottom='6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe suscipit harum </Text>
            <Text darkdisable>Lorem ipsum dolor sit amet consectetur </Text>
          </Column>
        </Row>
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
        <Row justifyContent='space-between' >
          <Column three border round Padded='3' bg='bgc' Top='3'>
          <img src={design} alt="Header Image" />
            <Text Top='4'regular strong darktext Bottom='1'>Grid</Text>
            <Text darkdisable>grid system props</Text>
          </Column>
          <Column three border round Padded='3' bg='bgc' Top='3'>
            <img src={library} alt="Header Image" />
          <Text Top='4' regular strong darktext Bottom='1'>Grid</Text>
          <Text darkdisable>grid system props</Text>
          </Column>
          <Column three border round Padded='3' bg='bgc' Top='3'>
            <img src={component} alt="Header Image" />
          <Text Top='4' regular strong darktext Bottom='1'>Component Library</Text>
          <Text darkdisable>Lorem ipsum dolor sit amet consectetur </Text>
          </Column>
        </Row>
        </Section>
    </>
  )
}

const Comp = () => {
 
  return (
    <>
      <Section>
          <Wrapper>
          <Text center darktext largeHeading bold Bottom='4' >Props & Styles</Text>
           <Text center darklabel>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, modi?</Text>
          </Wrapper>
        <Row justifyContent='space-between' >
          <Column three border round Padded='4' Top='3' bg='dark'>
            <Text regular bold darktext Bottom='2'>Component Library</Text>
            <Text darkdisable Bottom='6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe suscipit harum </Text>
            <Text darkdisable>Lorem ipsum dolor sit amet consectetur </Text>
          </Column>
          <Column three border round Padded='4' Top='3' bg='dark'>
          <Text regular bold darktext Bottom='2'>Component Library</Text>
            <Text darkdisable Bottom='6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe suscipit harum </Text>
            <Text darkdisable>Lorem ipsum dolor sit amet consectetur </Text>
          </Column>
          <Column three border round Padded='4' Top='3' bg='dark'>
            <Text regular bold darktext Bottom='2'>Component Library</Text>
            <Text darkdisable Bottom='6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe suscipit harum </Text>
            <Text darkdisable>Lorem ipsum dolor sit amet consectetur </Text>
          </Column>
        </Row>
        </Section>
    </>
  )
}