import React from 'react'
import styled from 'styled-components'
import { Section, Button, Text} from '../App'
import Code from './Code'

/*
todo: Introduction page 
------------
? sections
! - container width  width='8'
- intro center
- guide section
- features
- creator
------------
*/

const Wrapper = styled.div`
  padding-top: 5%;
  padding-bottom: 5%;
  li{
    padding:1px 0;
  }
 
`
const Intro = () => {
   const here = `this.close(ok);`
  return (
    <Wrapper>
      <Section width='8'>
              <Text  darktext largeHeading bold Bottom='4' >Introduction</Text>
              <Text darklabel>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis expedita distinctio id blanditiis doloribus vero cumque alias explicabo sed esse, quibusdam voluptas sequi iusto quisquam officia deleniti quo repudiandae? Facere!
              </Text>
            <Section  Top='6'>
              <Button End='2' round primary outline>library </Button> 
              <Button Start='2' round danger outline>components </Button>
            </Section>
          <Section Top='6'><Code code={here} language="javascript" /></Section>
          <Text darktext smallHeading Top='6' Bottom='4'> Guide and Resources</Text>
          <Section darklabel>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          </Section>
        <Text darktext smallHeading strong Top='6' Bottom='4'>Features ✨</Text>
          <Section darklabel>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          <li>this is some text here </li>
          </Section>
        <Text darktext smallHeading strong Top='6' >Who Created? ✨</Text>
       </Section>
    </Wrapper>
  )
}
export default Intro

// How to get best out the Dashboard ui design system? well that's a good point to start. but its really based on tech stack using for your design(always keep it simple) and what you goona build? using design system for your large projects may release your pain same time if your project is small it may cause effect on loading speed of website! choose wisely