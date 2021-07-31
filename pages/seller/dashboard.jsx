import React from 'react'
import OverViewDash from '../../src/components/OverViewDash'
import TableDash from '../../src/components/TableDash'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'


export default function dashboard() {
    return (
        <div>
            <Header/>
            <OverViewDash />
            <TableDash />
            <Footer/>
        </div>
    )
}
