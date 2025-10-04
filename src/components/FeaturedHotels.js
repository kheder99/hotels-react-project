import React, { Component } from "react";
import Title from "./Title";
import { HotelContext } from "../Context";
import Loading from "./Loading";
import Hotel from "./Hotel";

export default class FeaturedHotels extends Component {
  static contextType = HotelContext;
  render() {
    let { loading, featuredHotels: hotels } = this.context;
    hotels = hotels.map((hotel) => {
      //   console.log(hotel);
      return <Hotel key={hotel.id} hotel={hotel} />;
    });
    return (
      <div>
        <section className="featured-hotels">
          <Title title="featured hotels" />
          <div className="featured-hotels-center">
            {loading ? <Loading /> : hotels}
          </div>
        </section>
      </div>
    );
  }
}
