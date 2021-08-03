import React, { useState } from 'react'
import styles from '../../styles/component/dashTable.module.scss'
import Button from '@material-ui/core/Button';
import { Table, Carousel, } from 'react-bootstrap'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Checkbox from '@material-ui/core/Checkbox';
import Image from 'next/image'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link'

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
                        <Link href="/seller/ad"><a>

                            <Button variant="contained" className={styles.addProductBtn}>أضــــف منـتــــج < AddCircleOutlineIcon className={styles.addIcon} /> </Button>
                       
                        </a></Link>
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
                                    <Image placeholder="plur" src="/images/categoriesImage/cars.jpeg" alt="hero" width={50} height={50} />
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
                                    <Image placeholder="plur" src="/images/categoriesImage/shoes.jpeg" alt="hero" width={50} height={50} />
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

                <div className={styles.cardDashContainer}>
                    <Link href="/seller/ad"><a >
                        <Button variant="contained" className={styles.addProductBtn}>أضــــف منـتــــج < AddCircleOutlineIcon className={styles.addIcon} /> </Button>
                    </a></Link>

                    <div className={styles.card}>
                        <div className={styles.row1}>
                            <EditIcon className={styles.editIcon} />
                            <DeleteIcon className={styles.deleteIcon} />
                        </div>
                        <div className={styles.row2}>
                            <Image placeholder="plur" src="/images/categoriesImage/cars.jpeg" alt="hero" width={80} height={70} />
                            <h3>حلويـــــات</h3>
                        </div>
                        <div className={styles.row3}>
                            <p>تاريــخ: 1/1/2021</p>
                            <p>كميــة: 5</p>
                        </div>
                    </div>

                </div>
                <div className={styles.cardDashContainer}>
                    <div className={styles.card}>
                        <div className={styles.row1}>
                            <EditIcon className={styles.editIcon} />
                            <DeleteIcon className={styles.deleteIcon} />
                        </div>
                        <div className={styles.row2}>
                            <Image placeholder="plur" src="/images/categoriesImage/cars.jpeg" alt="hero" width={80} height={70} />
                            <h3>حلويـــــات</h3>
                        </div>
                        <div className={styles.row3}>
                            <p>تاريــخ: 1/1/2021</p>
                            <p>كميــة: 5</p>
                        </div>
                    </div>

                </div>
                <div className={styles.cardDashContainer}>
                    <div className={styles.card}>
                        <div className={styles.row1}>
                            <EditIcon className={styles.editIcon} />
                            <DeleteIcon className={styles.deleteIcon} />
                        </div>
                        <div className={styles.row2}>
                            <Image placeholder="plur" src="/images/categoriesImage/cars.jpeg" alt="hero" width={80} height={70} />
                            <h3>حلويـــــات</h3>
                        </div>
                        <div className={styles.row3}>
                            <p>تاريــخ: 1/1/2021</p>
                            <p>كميــة: 5</p>
                        </div>
                    </div>

                </div>
                <div className={styles.cardDashContainer}>
                    <div className={styles.card}>
                        <div className={styles.row1}>
                            <EditIcon className={styles.editIcon} />
                            <DeleteIcon className={styles.deleteIcon} />
                        </div>
                        <div className={styles.row2}>
                            <Image placeholder="plur" src="/images/categoriesImage/cars.jpeg" alt="hero" width={80} height={70} />
                            <h3>حلويـــــات</h3>
                        </div>
                        <div className={styles.row3}>
                            <p>تاريــخ: 1/1/2021</p>
                            <p>كميــة: 5</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TableDash
