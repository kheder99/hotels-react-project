import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { HotelContext } from '../Context';
import StyledCover from '../components/StyledCover'
import Banner from '../components/Banner';
import ReactStars from 'react-rating-stars-component';

export default function SingleHotel(props) {
    const {getHotel,handleAddReview,reviewRate,newReview,onAddReview,deleteService,addReviewRatingChanged,addReservation} = useContext(HotelContext);
    const params = useParams();
    const id =params.id;
    const hotel = getHotel(params.id);
    if(!hotel) {
        return <div className='error'>
            <h3> no such hotel found ... </h3>
            <Link to="/hotels" className='btn-primary'>
                return to Hotels
            </Link>
        </div>
    }
    else {
        const {name,images,rate,services,rates,description} = hotel;
        const[mainImg,...sectionImgs] = images;
        const  service = services.map((service,index) => {
                            return (
                                <div key={index}>
                                    <div className='delete-service'>{localStorage.getItem('role') ==="Admin"?<button className="delete-service-btn" type="submit" onClick={(e) => {deleteService(e,service._id)}}>Delete</button>:null}</div>
                                    <div className='service'>
                                    <h4>{service.name}</h4>
                                    <ReactStars value={service.rate} edit={false} size="20"/>
                                    
                                    </div>
                                    
                                    <div className='description'>{service.description}</div>
                                    <hr/>
                                </div>
                            );
                    })
        const  review = rates.map((rate,index) => {
                            return (
                                <div className='review' key={index}>
                                    <ReactStars value={rate.rate} edit={false} size="20"/>
                                    <h6>{rate.comment}</h6>
                                </div>
                            );
                }) 
                const addService = localStorage.getItem('role') ==="Admin"?<Link to={`/addService/${params.id}`}><button className="btn-primary " type="submit" >Add Service</button></Link>:null;
                const addReview =  
                localStorage.getItem('accessToken')!== null?<form className='review-form' onSubmit={(e) => {onAddReview(e,id)}}><div className='review'><input type="text" name='addReview' value={newReview} onChange={handleAddReview}/><ReactStars value={reviewRate}  size="20" onChange={addReviewRatingChanged}/><div><button className="submit">Submit</button></div></div></form>:null;
    return (
        <>
            <StyledCover image={mainImg} >
                <Banner title={`${name} hotel`} >
                    <Link to="/hotels" ><button className='btn-primary' onClick={(e) => {addReservation(e,id)}}>reservation</button></Link>
                </Banner>
            </StyledCover>
            <section className='single-hotel'>
                <div className='single-hotel-images'>
                    {sectionImgs.map((image,index) =>{
                        return <img src={"https://midnight-aback-eater.glitch.me"+image} key={index} alt={name}/>
                    })}
                </div>
                <div className='single-hotel-info'>
                    <article className='desc'>
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className='info'>
                        <h3>Services</h3>
                        {addService}
                        {service}
                        <div className='general-rate'>
                            <h4>General Rating</h4>
                            <ReactStars value={rate} edit={false} size="30"/>
                        </div>
                    </article>
                    <article className='info'>
                        <h3>Reviews</h3>
                        {review}
                        {addReview}
                    </article>
                </div>
            </section>
        </>
    )}
}
