import React from 'react'
import {Container,Row, Col } from 'react-bootstrap';


const Category = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={4} lg={3}> col 1 </Col>
                    <Col xs={12} md={4} lg={3}>  col 2</Col>
                    <Col xs={12} md={4} lg={3}> col 3 </Col>
                    <Col xs={12} md={4} lg={3}> col 4 </Col>

                </Row>
            </Container>

            
        </div>
    )
}

export default Category