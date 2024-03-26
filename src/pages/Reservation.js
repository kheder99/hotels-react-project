import React from "react";
import { useContext } from "react";
import { HotelContext } from "../Context";
import GoToTop from "../components/GoToTop";

export default function Reservation() {
  const { booking } = useContext(HotelContext);
  const table = booking.map((item) => {
    return (
      <li class="table-row">
        <div class="col col-1" data-label="Hotel Name">
          {item.hotelName}
        </div>
        <div class="col col-2" data-label="Created Date" id="created-date">
          {item.createdDate.slice(0, 10)}
        </div>
      </li>
    );
  });
  return (
    <>
      <div class="reservation-container">
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">Hotel Name</div>
            <div class="col col-2">Created Date</div>
          </li>
          {table}
        </ul>
      </div>
      <GoToTop />
    </>
  );
}
