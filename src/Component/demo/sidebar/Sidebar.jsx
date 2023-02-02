import React from 'react'
import { VscFiles,VscGithub,VscNote,VscLibrary } from "react-icons/vsc";
import { MdOutlineDashboard } from "react-icons/md";
import { Section, Flex } from '../../library/Util'
import {Text} from '../App'

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
              <Text mediumHeading><MdOutlineDashboard /></Text>
          </Section>
          {/* middle */}
          <Section>
            <Section  Start='3' >
            <Text smallHeading><VscNote/></Text>
            </Section>
            <Section Space='3'>
            <Text smallHeading><VscFiles/></Text>
            </Section>
            <Section Space='3'>
            <Text smallHeading><VscLibrary/></Text>
            </Section>
          </Section>
          {/* bottom */}
          <Section Bottom='3'  Start='3'>
            <Text smallHeading><VscGithub /></Text>
          </Section>
          </Flex>
      </Section>
    </>
  )
}

export default Sidebar