import React from 'react'
import Section from '../../../DesignSystem/Section'
import Text from '../../../DesignSystem/Text'
import Flex from '../../../DesignSystem/Utils'

const TopNav = () => {
  return (
        <Section  bg='green' padding={2}>
                <Flex justify='SpaceBetween'>
                    <Flex>
                        <Text fontSize={2} marginLeft={2} weight='600'>DS</Text>
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