import React from 'react'
import { VscFiles,VscGithub,VscNote,VscLibrary } from "react-icons/vsc";
import { MdOutlineDashboard } from "react-icons/md";
import {Link} from 'react-router-dom'
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
              <Text mediumHeading><Link to='/'><MdOutlineDashboard /></Link></Text>
          </Section>
          {/* middle */}
          <Section>
            <Section  Start='3' >
            <Text smallHeading><Link to='intro'><VscNote/></Link></Text>
            </Section>
            <Section Space='3'>
            <Text smallHeading><Link to='component'><VscFiles/></Link></Text>
            </Section>
            <Section Space='3'>
            <Text smallHeading><Link to='library'><VscLibrary/></Link></Text>
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