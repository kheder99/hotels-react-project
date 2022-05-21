import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Cover from '../components/Cover'
import Services from'../components/Services'
import FeaturedHotels from '../components/FeaturedHotels'
export default function Home() {
    return (
        <>
        <Cover cover="defaultCover">
            <Banner title="hotel world" subtitle=" search for deluxe hotels">
                <Link to="/hotels" className='btn-primary'>hotels</Link>
            </Banner>
        </Cover>
        <Services />
        <FeaturedHotels />
        </>
    )
}
