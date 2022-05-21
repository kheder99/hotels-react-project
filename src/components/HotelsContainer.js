import React from 'react'
import { HotelContext } from '../Context'
import HotelsFilter from './HotelsFilter'
import HotelsList from './HotelsList';
import { useContext } from 'react';
import Loading from './Loading'
export default function HotelsContainer() {
    const context = useContext(HotelContext);
    const {loading,hotels,sortedHotels } = context;
    if(loading) {
        return <Loading />
    }
    return (
        <>
            <HotelsFilter hotels = {hotels}/>
            <HotelsList hotels = {sortedHotels}/>
        </>
    )
}

