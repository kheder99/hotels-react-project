import React from 'react';
import Cover from '../components/Cover';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import HotelsContainer from '../components/HotelsContainer';
export default function Hotels() {
    return (
        <>
            <Cover cover="hotelsCover">
                <Banner title="Hotels">
                    <Link to="/" className='btn-primary'>return home</Link>
                </Banner>
            </Cover>
            <HotelsContainer />
        </>
    )
}
