import React from "react";
import { Link } from "react-router-dom";
import Hotel from "./Hotel";

export default function HotelsList(props) {
  const addHotel =
    localStorage.getItem("role") === "Admin" ? (
      <Link to="/addHotel">
        <button className="logout-btn " type="submit">
          Add Hotel
        </button>
      </Link>
    ) : null;
  console.log(props.hotels);
  let hotels = [];
  if (props.hotels !== undefined) {
    hotels = props.hotels.map((hotel) => {
      if (hotel) {
        return <Hotel key={hotel.id} hotel={hotel} />;
      }
    });
  }
  if (hotels.length === 0) {
    return (
      <div className="empty-search">
        <div className="addHotel">{addHotel}</div>
        <h3>Unfortunate No Hotels Matched Your Search Parameters</h3>
      </div>
    );
  }

  return (
    <section className="hotelsList">
      <div className="addHotel">{addHotel}</div>
      <div className="hotelsList-center">{hotels}</div>
    </section>
  );
}
