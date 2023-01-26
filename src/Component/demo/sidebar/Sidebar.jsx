import React from 'react'
import { VscFiles,VscGithub,VscNote,VscLibrary } from "react-icons/vsc";
import { MdOutlineDashboard } from "react-icons/md";
import { Section, Flex } from '../../library/common/Util'
import Text from '../../library/common/Text'

const Sidebar = () => {
  const SideBartop = {
    width: '55px',
    position:'fixed'
  }
  const SideBarHieght = {height:'100vh'}
  return (
    <>
      <Section bg='dark' darktext style={SideBartop}>
        <Flex flexDirection='Column' Justify='between' style={SideBarHieght} >
          {/* top */}
          <Section top='3' start='3'>
              <Text mediumHeading><MdOutlineDashboard /></Text>
          </Section>
          {/* middle */}
          <Section>
            <Section  start='3' >
            <Text smallHeading><VscNote/></Text>
            </Section>
            <Section space='3'>
            <Text smallHeading><VscFiles/></Text>
            </Section>
            <Section space='3'>
            <Text smallHeading><VscLibrary/></Text>
            </Section>
          </Section>
          {/* bottom */}
          <Section bottom='3'  start='3'>
            <Text smallHeading><VscGithub /></Text>
          </Section>
        </Flex>
      </Section>
    </>
  )
}

export default Sidebar