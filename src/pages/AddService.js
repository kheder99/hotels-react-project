import React from 'react';
import ReactStars from "react-rating-stars-component";
import { useContext } from 'react';
import { HotelContext } from '../Context'
import { useParams } from 'react-router-dom';
export default function AddService() {
    const {addRatingChanged,serviceName,serviceDescription,serviceRate,onAddService,handleAddService} = useContext(HotelContext);
    const params = useParams();
    return (
        <div>
            <div className="contact">
            <div className="container">
                <h1>Add Service</h1>
                <form  onSubmit={onAddService}>
                    <div className="label">Name<span>*</span></div>
                    <div className="text-field"><input type="text" name='serviceName' value={serviceName} onChange={handleAddService}/></div>
                    <div className="label">Description<span>*</span></div>
                    <div className="text-field"><input type="text" name='serviceDescription' value={serviceDescription} onChange={handleAddService}/></div>
                    <div className="label">Rate<span>*</span></div>
                    <div className="text-field"><ReactStars name = 'serviceRate'value={serviceRate} size="30"  onChange={addRatingChanged}/></div>
                    <div className="submit"><button type="submit" >Add</button></div>
                </form>
            </div>
        </div>
        </div>
    )
}
