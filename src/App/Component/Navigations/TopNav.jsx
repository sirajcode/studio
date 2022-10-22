import React from 'react'
import Section from '../../../DesignSystem/Section'
import Text from '../../../DesignSystem/Text'
import Flex from '../../../DesignSystem/Utils'
import { BsHeartFill } from "react-icons/bs";

const TopNav = () => {
  return (
        <Section bg='green'  paddingTop={2}>
                <Flex justify='SpaceBetween'>
                    <Flex>
                        <Text fontSize={2} marginLeft={3} marginTop={2} weight='600'><BsHeartFill size={20} /></Text>
                        <Text fontSize={2} marginLeft={4} weight='600'>File</Text>
                        <Text fontSize={2} marginLeft={4} weight='600'>Text </Text>
                       <Text fontSize={2} marginLeft={4} weight='600'>Color</Text>                   
                        <Text fontSize={2} marginLeft={4} weight='600'>View</Text>                   
                    </Flex>
                <Section  fontSize={2} weight='600'>
                   Studio-designsystem
                </Section> 
                <Section  fontSize={2} marginRight={4} weight='600'>
                   Button
                </Section> 
                </Flex>
            </Section>
  )
}

export default TopNav