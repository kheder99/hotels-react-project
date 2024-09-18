import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { HotelContext } from "../Context";
import StyledCover from "../components/StyledCover";
import StyledCover2 from "../components/StyledCover2";
import Banner from "../components/Banner";
import ReactStars from "react-rating-stars-component";
import Title from "../components/Title";
import GoToTop from "../components/GoToTop";

export default function SingleHotel(props) {
  const {
    getHotel,
    handleAddReview,
    reviewRate,
    newReview,
    onAddReview,
    deleteService,
    addReviewRatingChanged,
    addReservation,
    reservationPending,
    AddReviewPending,
  } = useContext(HotelContext);
  const params = useParams();
  const id = params.id;
  const hotel = getHotel(params.id);
  const [width, setWidth] = useState();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });
  if (!hotel) {
    return (
      <div className="error">
        <h3> no such hotel found ... </h3>
        <Link to="/hotels" className="btn-primary">
          return to Hotels
        </Link>
      </div>
    );
  } else {
    const { name, images, rate, services, rates, description } = hotel;
    const [mainImg, ...sectionImgs] = images;

    const service = services.map((service, index) => {
      return (
        <div key={index} className="service-section">
          <div className="delete-service">
            {localStorage.getItem("role") === "Admin" ? (
              <form method="DELETE">
                <button
                  className="delete-service-btn"
                  type="submit"
                  onClick={(e) => {
                    deleteService(e, service._id);
                  }}
                >
                  Delete
                </button>
              </form>
            ) : null}{" "}
          </div>
          <div className="service2">
            <h4>{service.name}</h4>
            <ReactStars
              value={service.rate}
              edit={false}
              size="20"
              activeColor="#ffd700b3"
            />
          </div>

          <div className="description">{service.description}</div>
          {/* <hr /> */}
        </div>
      );
    });
    const review = rates.map((rate, index) => {
      return (
        <div className="review" key={index}>
          <ReactStars
            value={rate.rate}
            edit={false}
            size="20"
            activeColor="#ffd700b3"
          />
          <div className="h6">{rate.comment}</div>
        </div>
      );
    });
    const addService =
      localStorage.getItem("role") === "Admin" ? (
        <Link to={`/addService/${params.id}`}>
          <button
            className="btn-primary "
            type="submit"
            style={{ marginLeft: "0.5rem" }}
          >
            + Add Service
          </button>
        </Link>
      ) : null;
    const addReview =
      localStorage.getItem("accessToken") !== null ? (
        <form
          className="review-form"
          onSubmit={(e) => {
            onAddReview(e, id);
          }}
        >
          {AddReviewPending !== true ? (
            <div className="add-review">
              <div className="review-input">
                <input
                  type="text"
                  placeholder="Please add your opinion..."
                  required
                  name="addReview"
                  value={newReview}
                  onChange={handleAddReview}
                />
                <ReactStars
                  value={reviewRate}
                  size="20"
                  required
                  activeColor="#ffd700b3"
                  onChange={addReviewRatingChanged}
                />
              </div>
              <div>
                <button className="submit">Submit</button>
              </div>
            </div>
          ) : (
            <div className="add-review">
              <div className="review-input">
                <input
                  type="text"
                  placeholder="Comment is publishing..."
                  disabled
                  name="addReview"
                  value={newReview}
                  onChange={handleAddReview}
                />
                <ReactStars
                  value={reviewRate}
                  size="20"
                  disabled
                  style={{ cursor: "auto" }}
                  activeColor="#ffd700b3"
                  onChange={addReviewRatingChanged}
                />
              </div>
              <div>
                <button className="disabled" disabled>
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      ) : (
        <form
          className="review-form"
          onSubmit={(e) => {
            onAddReview(e, id);
          }}
        >
          <div className="add-review">
            <div className="review-input">
              <input
                type="text"
                placeholder="Login and share your opinion..."
                disabled
                name="addReview"
                value={newReview}
                onChange={handleAddReview}
              />
              <ReactStars
                value={reviewRate}
                size="20"
                disabled
                style={{ cursor: "pointer" }}
                activeColor="#808080"
                onChange={addReviewRatingChanged}
              />
            </div>

            <div>
              <button className="disabled" disabled>
                Submit
              </button>
            </div>
          </div>
        </form>
      );
    console.log(reservationPending);
    console.log(AddReviewPending);
    return (
      <>
        {width >= 575 ? (
          localStorage.getItem("accessToken") === null ? (
            <StyledCover image={mainImg} id="singleHotelCover">
              <Banner title={name}>
                <Link to="#">
                  <button
                    className="btn-primary-disabled "
                    onClick={(e) => {
                      addReservation(e, id);
                    }}
                    disabled
                  >
                    reservation
                  </button>
                </Link>
              </Banner>
            </StyledCover>
          ) : (
            <StyledCover image={mainImg} id="singleHotelCover">
              <Banner title={name}>
                <Link to="/hotels">
                  {reservationPending === true ? (
                    <button
                      className="btn-primary-pending"
                      onClick={(e) => {
                        addReservation(e, id);
                      }}
                    >
                      reservation
                    </button>
                  ) : (
                    <button
                      className="btn-primary"
                      onClick={(e) => {
                        addReservation(e, id);
                      }}
                    >
                      reservation
                    </button>
                  )}
                </Link>
              </Banner>
            </StyledCover>
          )
        ) : localStorage.getItem("accessToken") === null ? (
          <StyledCover2 image={mainImg} id="singleHotelCover">
            <Banner title={name}>
              <Link to="#">
                <button
                  className="btn-primary-disabled"
                  onClick={(e) => {
                    addReservation(e, id);
                  }}
                  disabled
                >
                  reservation
                </button>
              </Link>
            </Banner>
          </StyledCover2>
        ) : (
          <StyledCover2 image={mainImg} id="singleHotelCover">
            <Banner title={name}>
              <Link to="/hotels">
                {reservationPending === true ? (
                  <button
                    className="btn-primary-pending"
                    onClick={(e) => {
                      addReservation(e, id);
                    }}
                  >
                    reservation
                  </button>
                ) : (
                  <button
                    className="btn-primary"
                    onClick={(e) => {
                      addReservation(e, id);
                    }}
                  >
                    reservation
                  </button>
                )}
              </Link>
            </Banner>
          </StyledCover2>
        )}
        <section className="single-hotel">
          <div className="single-hotel-images">
            {sectionImgs.map((image, index) => {
              return (
                <img
                  src={"https://midnight-aback-eater.glitch.me" + image}
                  key={index}
                  alt={name}
                />
              );
            })}
          </div>
          <div className="general-rate">
            <ReactStars
              value={rate}
              edit={false}
              size="30"
              activeColor="#ffd700b3"
              //   color="#af9a7d"
            />
          </div>
          <div className="single-hotel-info">
            <article className="desc">
              <div className="info-container">
                <Title title="Details" />
                <p>{description}</p>
              </div>
            </article>
            <article className="info">
              {/* 
              <Title title="General Rating" id="GeneralRating" />
              <div className="general-rate">
                 <h4>General Rating</h4> 
                <ReactStars
                  value={rate}
                  edit={false}
                  size="30"
                  activeColor="#ffd700b3"
                  //   color="#af9a7d"
                />
        </div>*/}
              <Title title="Services" />

              <div className="info-container">
                {addService}
                {service}
              </div>
            </article>
            <article className="info">
              <div className="info-container">
                <Title title="Reviews" />
                <div className="reviews">
                  {review}
                  {addReview}
                </div>
              </div>
            </article>
          </div>
        </section>
        <GoToTop />
      </>
    );
  }
}
