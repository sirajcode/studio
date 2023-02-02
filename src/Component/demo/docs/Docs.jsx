import React from 'react'
import styled from 'styled-components'
import {VscAccount,VscGithub,VscGlobe,VscTwitter } from "react-icons/vsc";
import { Section, Button, Text, Flex, Column, Link, img } from '../App'
import Code from './Code'


/*
 todo:
 - build design system page
   - docs(working...)
 */

const Wrapper = styled.div`
  padding-top: 5%;
  padding-bottom: 5%;
  li{
    padding:1px 0;
  }
  img{
    border-radius: 0.75rem;
  }
 
`
const Docs = () => {
  return (
    <>
        <Wrapper>
          <Header />
          <Intro/>
        </Wrapper>
    </>
  )
}

export default Docs



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
          <Column two>
          <img src={img} alt="Header Image" />
           </Column>
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
     </>
  )
}

const Intro = () => {
   const here = `this.close(ok);`
  return (
    <>
       <Section Top='6'>
        <Text darktext smallHeading strong Bottom='4' >Introduction</Text>
        <Section width='9'>
          <Text darklabel>How to get best out the Dashboard ui design system? well that's a good point to start. but its really based on tech stack using for your design(always keep it simple) and what you goona build? using design system for your large projects may release your pain same time if your project is small it may cause effect on loading speed of website! choose wisely</Text>
          <Section Top='6'><Code code={here} language="javascript" /></Section>
        </Section>
        <Text darktext regular strong Top='6' Bottom='4'> Guide and Resources</Text>
        <Section darklabel  strong>
      
        </Section>
        <Text darktext regular strong Top='6' Bottom='4'>Features ✨</Text>
        <Text Bottom='4'darklabel>this is some text here Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab non quisquam officiis.</Text>
        <Section darklabel>
         <Button round primary>here i am</Button> 
          <Section Top='2' ><Button round danger>here i am</Button> </Section>
          <Section Top='2'><Button round succes>here i am</Button> </Section>
          <Section Top='2'><Button round dark>here i am</Button> </Section>
          <Section Top='2'><Button round>here i am</Button> </Section>
          </Section>
      </Section>
      
       <Text darktext regular strong Top='6' Bottom='4'>Background ✨</Text>
        <Text Bottom='4' darklabel>this is some text here Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab non quisquam officiis.</Text>
          <Section Top='2' width='3' Padded='5' bg='primary'></Section>
          <Section Top='2' width='3' Padded='5' bg='danger'></Section>
          <Section Top='2' width='3' Padded='5' bg='succes'></Section>
          <Section Top='2' width='3' Padded='5' bg='warning'></Section>
          <Section Top='2' width='3' Padded='5' bg='primaryshade'></Section>
          <Section Top='2' width='3' Padded='5' bg='dangershade'></Section>
          <Section Top='2' width='3' Padded='5' bg='warningshade'></Section>
          <Section Top='2' width='3' Padded='5' bg='successhade'></Section>
          <Section Top='2' width='3' Padded='5' bg='darkshade'></Section>
          <Section Top='2' width='3' Padded='5' bg='dark'></Section>
          <Section Top='2' width='3' Padded='5' bg='white'></Section>
          <Section Top='2' width='3' Padded='5' bg='whiteshade'></Section>
    </>
  )
}


