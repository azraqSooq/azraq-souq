import React, {useState} from 'react'
import styles from '../../styles/component/dashTable.module.scss'
import Button from '@material-ui/core/Button';
import {Table, Carousel,  } from 'react-bootstrap' 
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Checkbox from '@material-ui/core/Checkbox';
import Image from 'next/image'

const TableDash = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <>
            <div className={styles.tableDashConParent} >
                <div className={styles.tableDashContainer}>

                    <div className={styles.addProduct}>
                        <Button  variant="contained"  className={styles.addProductBtn}>أضــــف منـتــــج < AddCircleOutlineIcon className={styles.addIcon} /> </Button>
                        <p>فرز</p>

                    </div>

                    <Table className={styles.table} striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <Checkbox
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />

                                </th>

                                <th>#</th>
                                <th>اسم المنــتج</th>
                                <th>عدد المنتجـات</th>
                                <th>التــاريخ</th>
                                <th>تعديـــل</th>
                                <th>ازالــــة</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                            <tr className={styles.tableRow} >
                                <td>
                                    <Checkbox
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />

                                </td>
                                <td>1</td>
                                <td >
                                    <Image placeholder="plur"  src="/images/categoriesImage/cars.jpeg"alt="hero" width={50} height={50} />  
                                    <p>تشيز كــيك  </p>                     
                                </td>
                                <td>5</td>
                                <td>2/8/2021</td>
                                <td>#</td>
                                <td>X</td>
                            </tr>
                            <tr>
                                <td>

                                    <Checkbox
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </td>
                                <td>1</td>
                                <td>
                                    <Image placeholder="plur"  src="/images/categoriesImage/shoes.jpeg"alt="hero" width={50} height={50} />  
                                    <p>تشيز كــيك  </p>                     
                                    
                                </td>
                                <td>5</td>
                                <td>2/8/2021</td>
                                <td>#</td>
                                <td>X</td>
                            </tr>
                        </tbody>
                        </Table>
                </div>

                <div className={styles.carouselContainer}>

                    <Carousel className={styles.carousel} activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <Image
                            width={300}
                            height={300}
                            style={{position: "relative"}}
                            src="/images/categoriesImage/sweets.jpeg"
                            alt="First slide"
                            />
                            <h3 style={{position: "absolute", backgroundColor: "black"}} >First slide label</h3>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* <Carousel.Item>
                            <Image
                            width={300}
                            height={300}
                            className="d-block w-100"
                            src="/images/categoriesImage/sweets.jpeg"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3 >Second slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                            width={300}
                            height={300}
                            src="/images/categoriesImage/shoes.jpeg"
                            className="d-block w-100"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3 >Third slide label</h3>
                         
                            </Carousel.Caption>
                        </Carousel.Item> */}
                    </Carousel>
            </div>

        </div>
    </>
    )
}

export default TableDash 
