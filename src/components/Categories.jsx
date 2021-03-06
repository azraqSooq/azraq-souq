import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/component/categories.module.scss'
import { MDBCard } from 'mdb-react-ui-kit'

const Categories = () => {

    const categories = [
        { name: 'ملابس', image: '/images/categoriesImage/clothes.jpeg' },
        { name: 'كيك', image: '/images/categoriesImage/cake.jpeg' },
        { name: 'حلويات', image: '/images/categoriesImage/sweets.jpeg' },
        { name: 'سيارات', image: '/images/categoriesImage/cars.jpeg' },
        { name: 'تلفونات', image: '/images/categoriesImage/phone.jpeg' },
        { name: 'طعام', image: '/images/categoriesImage/food.jpeg' },
        { name: 'احذيـة', image: '/images/categoriesImage/shoes.jpeg' },
        { name: 'اثـاث', image: '/images/categoriesImage/furniture.jpeg' },
        { name: 'أدوات منزلية', image: '/images/categoriesImage/housewares.jpeg' },
        { name: 'ادوات كهربائية', image: '/images/categoriesImage/electricaltools.jpeg' }
    ]
 
    return (
        <div>
            <Container className={styles.categoriesContainer}>
                <Row className={styles.categoryTitle}>
                    <Col>
                        <p>الفئــات</p>
                    </Col>
                </Row>
                <Row className={styles.categories} >
    
                    {categories.map((el, inx) => {
                        return (
                            <Col className={styles.category} key={inx} xs={6} md={4} lg={{ span: 3 }}>
                                <MDBCard className={` ${styles.categoryCard} bg-image hover-zoom `} >

                                   <Link href="/products"><a><Image className={styles.categoryImage} key={el.image} src={el.image} alt={el.name} width={500} height={450} /></a></Link> 
                                    <h2 key={el.name}> {el.name} </h2>
                                </MDBCard>
                            </Col>
                        )
                    })}
                </Row>

            </Container>
        </div>
    )
}

export default Categories

