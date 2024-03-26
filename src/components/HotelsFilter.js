import React from "react";
import { useContext } from "react";
import { HotelContext } from "../Context";
import Title from "../components/Title";
import ReactStars from "react-rating-stars-component";

export default function HotelsFilter() {
  const context = useContext(HotelContext);
  const { handleChange, ratingChanged, searchedHotel, rating } = context;
  return (
    <section className="filter-container">
      <Title title="Search For hotels" />
      <div className="search">
        <form>
          {/* search By Name */}
          <div className="form-group">
            <label htmlFor="search-by-name">Search By Name</label>
            <input
              name="search-by-name"
              type="text"
              value={searchedHotel}
              onChange={handleChange}
            />
          </div>
          {/* end search By Name */}

          {/* search By Rate */}
          <div className="general-rate">
            <h5>Search By Rate</h5>
            <ReactStars
              classNames="react-stars"
              value={rating}
              size="30"
              onChange={ratingChanged}
            />
          </div>
          {/* end search By Rate */}
        </form>
      </div>
    </section>
  );
}
