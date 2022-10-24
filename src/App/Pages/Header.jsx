import React from 'react';
import { BsHeartFill } from "react-icons/bs";
import Section from '../../DesignSystem/Section';
import Text from "../../DesignSystem/Text";
import Flex from "../../DesignSystem/Utils";
import Container from "../../DesignSystem/Container";
import { VscSettingsGear  } from "react-icons/vsc";

const Header = () => {
  return (
    <>
      <Container width='sm'>
        <Section marginTop={6} marginBottom={6}>
          <Flex>
              <Text marginRight={6} >
              <BsHeartFill size={120} />
              </Text>
              <Section>
                  <Text fontSize={3} weight='600'> Studio | Dashboard and Ui Design System</Text>
                  <Text weight='600'>@engsiraj</Text>
                  <Text fontSize={2}>Ui Design system builds with reactjs</Text>
              <Text weight='600' fontSize={2} > V.0.1.1 <VscSettingsGear size={14} /></Text>
            </Section>   
          </Flex>
        </Section>  
      </Container>
      </>
  )
}

export default Header