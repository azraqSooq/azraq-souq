import React from 'react'
import styles from '../../styles/component/about.module.scss'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image'


const About = () => {
    return (
        <div className={styles.aboutConParent}>
            <Container className={styles.aboutContainer}>
                <Row className={styles.aboutRowOne} >
                    <Col  className={styles.paragraphContainer} xs={12} md={6}>
                        <h2>أزرق ستور | Azraq Store</h2>
                        <p >السوق المفتوح هو واحد من أهم روّاد المواقع الإلكترونية المتخصصة في مجال الإعلانات المبوبة والتي تمكّن المستخدمين سواء كانوا بائعين أم مشترين من بيع وشراء مختلف السلع والمنتجات والخدمات خلال أقصر وقت ممكن وبأقل جهد يُذكر، وسواء كانت حالة تلك المنتجات جديدة أم مستعملة. وحتى يسهل على المستخدم إيجاد ما يبحث عنه أو الإعلان عمّا يريد بيعه يوجد أقسام رئيسية وفرعية لعرض وتصفّح مختلف أنواع السلع والخدمات المتداولة بينهم وإتاحة التواصل المباشر فيما بينهم بكل سهولة </p>
                    </Col>

                    <Col className={styles.imageContainer} xs={12} md={6}>
                       <Image placeholder="plur" className={styles.aboutImage}  src="/images/about.jpg"alt="hero" width={500} height={400} /> 
                    
                    </Col>
                </Row>
            </Container>

            
        </div>
    )
}

export default About;