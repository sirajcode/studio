import React from 'react'
import Section from '../../../DesignSystem/Section'
import Flex from '../../../DesignSystem/Utils'
import Text from '../../../DesignSystem/Text'
import {  VscSettingsGear,VscFiles } from "react-icons/vsc";

const SideNav = () => {
  return (
    <Section fontSize={2} bg='green' paddingTop={4} paddingBottom={4} paddingLeft={3} style={{width:'45px'}}> 
      <Flex FLexDirection='Column' justify='SpaceBetween' style={{height:'84vh'}} >
        <Text><VscFiles size={30} /></Text>
        <Text><VscSettingsGear size={30} /></Text>    
      </Flex>
    </Section>
  )
}

export default SideNav