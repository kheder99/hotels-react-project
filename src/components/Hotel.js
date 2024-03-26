import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { HotelContext } from "../Context";

export default function Hotel(props) {
  const { images, id, name } = props.hotel;
  const { deleteHotel } = useContext(HotelContext);
  const del =
    localStorage.getItem("role") === "Admin" ? (
      <button
        className="hot "
        type="submit"
        onClick={(e) => {
          deleteHotel(e, id);
        }}
      >
        Delete
      </button>
    ) : null;
  return (
    <article className="hotel">
      <div className="img-container">
        <img
          src={"https://midnight-aback-eater.glitch.me/" + images[0]}
          alt="Error"
        />

        <Link to={`/hotels/${id}`} className="btn-primary hotel-link">
          Features
        </Link>
        {del}
        <div className="hotel-info">{name}</div>
      </div>
    </article>
  );
}
Hotel.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
