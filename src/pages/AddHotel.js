import React from 'react';
import { useContext } from 'react';
import { HotelContext } from '../Context'

export default function AddHotel() {
    const {handleAddHotelChange,handleAddImage,addName,addDescription,addImages,onAddHotel} = useContext(HotelContext);
    return (
        <div className="contact">
            <div className="container">
                <h1>Add Hotel</h1>
                <form  encType='multipart/form-data' onSubmit={onAddHotel}>
                    <div className="label">Name<span>*</span></div>
                    <div className="text-field"><input type="text" name="addName" value={addName} onChange={handleAddHotelChange}/></div>
                    <div className="label">Description<span>*</span></div>
                    <div className="text-field"><textarea name="addDescription" value={addDescription} onChange={handleAddHotelChange}/></div>
                    <div className="label">Images<span>*</span></div>
                    <div className="text-field"><input name="addImages" type="file" accept="image/*"   onChange={handleAddImage} multiple/></div>
                    <div className="submit"><button type="submit" >Add</button></div>
                </form>
            </div>
        </div>
    );
}
