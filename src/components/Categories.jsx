import React from 'react'
import {Container,Row, Col } from 'react-bootstrap';


const Categories = () => {

    const arr = []
    for (let i = 0; i < 14; i++) {
        arr.push(i)
        
    }
    return (
        <div>
            <Container>
                {arr.map((el, inx ) => {
                    return (
                    <Row key={inx}>
                        <Col xs={12} md={4} lg={3}> col 1 </Col>
                        <Col xs={12} md={4} lg={3}>  col 2</Col>
                        <Col xs={12} md={4} lg={3}> col 3 </Col>
                        <Col xs={12} md={4} lg={3}> col 4 </Col>

                    </Row>

                    )
                } )}
            </Container>

            
        </div>
    )
}

export default Categories