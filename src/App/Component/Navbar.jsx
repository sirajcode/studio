import React from 'react'
import Button from '../../DesignSystem/Button';
import Container from '../../DesignSystem/Container';
import Section from '../../DesignSystem/Section';
import Flex from '../../DesignSystem/Utils';
import Text from '../../DesignSystem/Text'

// TODO:
//1. creating multiple navigations
//  1.1 There are three navigation in design system ui
//      1.1.1 top navigation /
//      1.1.2 side navigation
//      1.1.3 bottom navigation
// HINTS:
//1) All Navigations will fixed at thier postion




const Navbar = () => {
    return (

        <Section bg='green' padding={3}>
            <Flex justify='SpaceBetween'>
                <Flex>
                        <Text fontSize={2} marginLeft={2} weight='600'>Logo</Text>
                        <Text fontSize={2} marginLeft={4} weight='600'>File</Text>
                        <Text fontSize={2} marginLeft={4} weight='600'>Text </Text>
                        <Text fontSize={2} marginLeft={4} weight='600'>Color</Text>                   
                        <Text fontSize={2} marginLeft={4} weight='600'>View</Text>                   
                </Flex>
                <Section  fontSize={2} weight='600'>
                this is navigation section
                </Section> 
                <Section  fontSize={2} marginRight={4} weight='600'>
                this is navigation section
                </Section> 
            </Flex>
        </Section>
    )
}

export default Navbar
