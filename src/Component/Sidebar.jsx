import React from 'react'
import { Section, Flex } from '../DesignSystem/Utils'
import Text from '../DesignSystem/Text'

const Sidebar = () => {
  return (
    <>
      <Section bg='dark' darktext style={{ width: '64px', position:'fixed'}}>
        <Flex flexDirection='Column' Justify='between' style={{height:'100vh'}} >
          <Section space='2'>
            <Text regular>Siraj</Text>
          </Section>
          <Section>
            <Text>siraj</Text>
            <Text>siraj</Text>
            <Text>siraj</Text>
            <Text>siraj</Text>
          </Section>
          <Section bottom='6'>
            <Text>siraj</Text>
          </Section>
        </Flex>
      </Section>
      <Section bg='blue'  style={{height:'200vh'}}>
      </Section>
       <Section bg='dark3'  style={{height:'200vh'}}>
      </Section>
    </>
  )
}

export default Sidebar