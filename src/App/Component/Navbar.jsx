import React from 'react'
import Button from '../../DesignSystem/Button'
import Container from '../../DesignSystem/Container';
import Section from '../../DesignSystem/Section';
const Navbar = () => {
    return (
        <div>
            <Container width='sm' >
                <Section top={8} bg='blue' style={{height:'300px', width:'400px'}}>
                    <Button size='med'>Hi There hello</Button>      
                </Section>                  
         </Container>          
        </div>
    )
}

export default Navbar
