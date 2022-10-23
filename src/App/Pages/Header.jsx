import React from 'react';
import Section from '../../DesignSystem/Section';
import { BsHeartFill } from "react-icons/bs";
import Text from "../../DesignSystem/Text";
import Flex from "../../DesignSystem/Utils";

const Header = () => {
    return (
        <>
            <Section bg='green'>
                <Flex FLexDirection='Column' alignItems='Center' Justify='Center' style={{ height: '100vh'}}>
                    <Text><BsHeartFill size={200} /></Text>
                    <Text weight='600'>npm: npm install studiods</Text>         
                    <Text weight='600'>this is text</Text>         
                    <Text weight='600'>this is text</Text>         
                    <Text weight='600'>this is text</Text>         
               </Flex>
            </Section>
        </>
  )
}

export default Header