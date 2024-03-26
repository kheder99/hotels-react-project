import React from "react";
import ReactStars from "react-rating-stars-component";
import { useContext } from "react";
import { HotelContext } from "../Context";
import { useParams } from "react-router-dom";
import GoToTop from "../components/GoToTop";
export default function AddService() {
  const {
    addRatingChanged,
    serviceName,
    serviceDescription,
    serviceRate,
    onAddService,
    handleAddService,
    AddServicePending,
  } = useContext(HotelContext);
  const params = useParams();
  return (
    <div>
      <div className="contact">
        <div className="container">
          <div className="sign-up-header">
            <h1 className="title"> Add Service</h1>
            <p>Complete this fields.</p>
          </div>
          <form
            onSubmit={(e) => {
              onAddService(e, params.id);
            }}
          >
            {/* <div className="label">
              Name<span>*</span>
            </div>
            <div className="text-field">
              <input
                type="text"
                name="serviceName"
                value={serviceName}
                onChange={handleAddService}
              />
            </div> */}
            <div className="input">
              <span className="title-field">Service Name</span>
              <input
                type="text"
                name="serviceName"
                value={serviceName}
                onChange={handleAddService}
              />
            </div>

            {/* <div className="label">
              Description<span>*</span>
            </div>
            <div className="text-field">
              <input
                type="text"
                name="serviceDescription"
                value={serviceDescription}
                onChange={handleAddService}
              />
            </div> */}
            <div className="input">
              <span className="title-field">Description</span>
              <textarea
                name="serviceDescription"
                value={serviceDescription}
                onChange={handleAddService}
              />
            </div>

            {/* <div className="label">
              Rate<span>*</span>
            </div>
            <div className="text-field">
              <ReactStars
                name="serviceRate"
                value={serviceRate}
                size="30"
                onChange={addRatingChanged}
              />
            </div> */}
            <div className="input">
              <span className="title-field">service Rate</span>
              <div className="serviceRate">
                <ReactStars
                  name="serviceRate"
                  value={serviceRate}
                  size="30"
                  activeColor="#ffd700b3"
                  onChange={addRatingChanged}
                />
              </div>
            </div>

            {/* <div className="submit">
              <button type="submit">Add</button>
            </div> */}
            {AddServicePending !== true ? (
              <button type="submit">Add Service</button>
            ) : (
              <button type="submit" className="disabled" disabled>
                Add Service
              </button>
            )}
          </form>
        </div>
      </div>
      <GoToTop />
    </div>
  );
}
