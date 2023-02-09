import React from 'react'
import { VscFiles,VscGithub,VscNote,VscLibrary } from "react-icons/vsc";
import { MdOutlineDashboard } from "react-icons/md";
import { Section, Flex, Text, StyledLink } from '../App'

const Sidebar = () => {
  const SideBartop = {
    width: '55px',
    position: 'fixed',
  }
  return (
    <>
      <Section bg='bgc' darktext style={SideBartop}>
        <Flex flexDirection='column' justifyContent='space-between' height='100vh' >
          {/* top */}
          <Section Top='3' Start='3'>
              <Text mediumHeading><StyledLink  to='/'><MdOutlineDashboard /></StyledLink></Text>
          </Section>
          {/* middle */}
          <Section>
            <Section  Start='3' >
            <Text smallHeading><StyledLink  to='intro'><VscNote/></StyledLink></Text>
            </Section>
            <Section Space='3'>
            <Text smallHeading><StyledLink  to='component'><VscFiles/></StyledLink></Text>
            </Section>
            <Section Space='3'>
            <Text smallHeading><StyledLink  to='library'><VscLibrary/></StyledLink></Text>
            </Section>
          </Section>
          {/* bottom */}
          <Section Bottom='3'  Start='3'>
            <Text smallHeading><StyledLink ><VscGithub /></StyledLink></Text>
          </Section>
          </Flex>
      </Section>
    </>
  )
}

export default Sidebar