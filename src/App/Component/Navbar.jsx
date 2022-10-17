import React from 'react'
import Button from '../../DesignSystem/Button'
import Container from '../../DesignSystem/Container'
const Navbar = () => {
    return (
        <div>
        <Container width='sm' >
           
                <Button  bg='green'  size='med' border={16}  top={64}>login</Button>
                <Button bg='yellow' size='med' radii={2} left={64} >login</Button>    
                
         </Container>
         
           
        </div>
    )
}

export default Navbar
