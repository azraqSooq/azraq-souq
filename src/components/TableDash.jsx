import React from 'react'
import styles from '../../styles/component/dashTable.module.scss'
import Button from '@material-ui/core/Button';
import {Table } from 'react-bootstrap' 
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const TableDash = () => {
    return (
        <div className={styles.tableDashConParent} >
            <div className={styles.tableDashContainer}>

                <div className={styles.addProduct}>
                    <Button  variant="contained"  className={styles.addProductBtn}>أضــــف منـتــــج < AddCircleOutlineIcon className={styles.addIcon} /> </Button>
                    <p>فرز</p>

                </div>

                <Table className={styles.table} striped bordered hover>
                    <thead>
                        <tr>
                            <input type="checkbox" />
                            <th>#</th>
                            <th>اسم المنــتج</th>
                            <th>عدد المنتجـات</th>
                            <th>التــاريخ</th>
                            <th>تعديـــل</th>
                            <th>ازالــــة</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <input type="checkbox" />
                            <td>1</td>
                            <td>تشيز كــيك</td>
                            <td>5</td>
                            <td>2/8/2021</td>
                            <td>#</td>
                            <td>X</td>
                        </tr>
                        {/* <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr> */}
                    </tbody>
                    </Table>

                {/* <div className={styles.tableHeader}>
                    <input type="checkbox" />
                    <p>اسم المنــتج</p>
                    <p>عدد المنتجــــات</p>
                    <p>التـــاريخ</p>
                    <p>تعـــــديل</p>
                    <p>ازالـــــة</p>

                </div>
                <div className={styles.tableMain}>
                    <input type="checkbox" />
                    <p> ## تشيز كـــيك</p>
                    <p>25</p>
                    <p>1 /5 /2021</p>
                    <p>+</p>
                    <p>X</p>

                </div> */}


            </div>
            
        </div>
    )
}

export default TableDash 
