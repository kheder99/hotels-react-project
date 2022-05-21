import React from 'react';
import { useContext } from 'react';
import { HotelContext } from '../Context';

export default function Reservation() {
    const {booking} = useContext(HotelContext);
    const table = booking.map(item => {
        return <li class="table-row">
        <div class="col col-1" data-label="Hotel Name">{item.hotelName}</div>
        <div class="col col-2" data-label="Created Date">{item.createdDate}</div>
        </li>
    })
    return (
        <>
            <div class="container">
                <h2 className='reservation-header'>Reservation <small>Table</small></h2>
                <ul class="responsive-table">
                    <li class="table-header">
                    <div class="col col-1">Hotel Name</div>
                    <div class="col col-2">Created Date</div>
                    </li>
                    {table}
                </ul>
            </div>
        </>
    )
}
