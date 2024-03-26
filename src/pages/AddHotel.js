import React from "react";
import { useContext } from "react";
import { HotelContext } from "../Context";
import GoToTop from "../components/GoToTop";

export default function AddHotel() {
  const {
    handleAddHotelChange,
    handleAddImage,
    addName,
    addDescription,
    onAddHotel,
    AddHotelPending,
  } = useContext(HotelContext);
  return (
    <div className="contact">
      <div className="container">
        <div className="sign-up-header">
          <h1 className="title"> Add Hotel</h1>
          <p>Complete this fields.</p>
        </div>

        <form encType="multipart/form-data" onSubmit={onAddHotel}>
          {/* <div className="label">
            Name<span>*</span>
          </div>
          <div className="text-field">
            <input
              type="text"
              name="addName"
              value={addName}
              onChange={handleAddHotelChange}
            />
          </div> */}
          <div className="input">
            <span className="title-field">Hotel Name</span>
            <input
              type="text"
              name="addName"
              value={addName}
              onChange={handleAddHotelChange}
            />
          </div>
          {/* <div className="label">
            Description<span>*</span>
          </div>
          <div className="text-field">
            <textarea
              name="addDescription"
              value={addDescription}
              onChange={handleAddHotelChange}
            />
          </div> */}
          <div className="input">
            <span className="title-field">Description</span>
            <textarea
              name="addDescription"
              value={addDescription}
              onChange={handleAddHotelChange}
            />
          </div>
          {/* <div className="label">
            Images<span>*</span>
          </div>
          <div className="text-field">
            <input
              name="addImages"
              type="file"
              accept="image/*"
              onChange={handleAddImage}
              multiple
            />
          </div> */}
          <div className="input">
            <span className="title-field">Images</span>
            <input
              name="addImages"
              type="file"
              accept="image/*"
              onChange={handleAddImage}
              multiple
            />
          </div>
          {/* <div className="submit">
            <button type="submit">Add</button>
          </div> */}
          {AddHotelPending !== true ? (
            <button type="submit">Add Hotel</button>
          ) : (
            <button type="submit" className="disabled" disabled>
              Add Hotel
            </button>
          )}
        </form>
      </div>
      <GoToTop />
    </div>
  );
}
