import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <Container>
            <footer>My footer</footer>
            <Row><Col className='text-center py-3'>Copyright &copy; Proshop</Col></Row>
        </Container>
    )
}

export default Footer