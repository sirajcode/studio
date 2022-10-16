import React from 'react'
import Button from '../../DesignSystem/Button'
import Container from '../../DesignSystem/Container'
const Navbar = () => {

    return (
        <div>
            <Container size='sm' >
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vero aliquam, sed iusto, soluta provident quo nesciunt 
            </Container>
            <Container size='lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa similique cum ea, cupiditate aspernatur quia  
            </Container>
            <Container size='xl' >
                <Button size='med' variant ='suc' >login</Button>
            </Container>
        </div>
    )
}

export default Navbar
