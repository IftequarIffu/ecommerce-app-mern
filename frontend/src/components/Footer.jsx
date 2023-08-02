import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {

    const currentYear = new Date().getFullYear;
    
  return (
    <footer>
        <Row>
            <Col className='text-center py-3'>
                <h1>ProShop &copy;{currentYear}</h1>
            </Col>
        </Row>
    </footer>
  )
}

export default Footer