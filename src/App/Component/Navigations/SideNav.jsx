import React from 'react'
import Section from '../../../DesignSystem/Section'
import Flex from '../../../DesignSystem/Utils'
import Text from '../../../DesignSystem/Text'

const SideNav = () => {
  return (
     <Section fontSize={2}  bg='green' padding={2} style={{width:'40px'}}> 
      <Flex FLexDirection='Column' justify='SpaceBetween' style={{height:'88vh'}} >
        <Text>icon</Text>
        <Text>icon</Text>    
      </Flex>
    </Section>
  )
}

export default SideNav