import React from 'react';
import {withRouter} from 'react-router-dom'

const HotelContext = React.createContext();

class HotelProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels : [],
            sortedHotels : [],
            featuredHotels : [],
            loading : true,
            searchedHotel : " ",
            rating : 0,
            email :"",
            password :"",
            userName :"",
            mobileNumber :"",
            addName : "",
            addDescription : "",
            addImages : [],
            serviceRate :0,
            serviceName : "",
            serviceDescription : "",
            reviewRate:0,
            newReview:"",
            booking:[],

        };
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.login = this.login.bind(this);
        this.signUp = this.signUp.bind(this);
        this.deleteHotel = this.deleteHotel.bind(this);
        this.logout = this.logout.bind(this);
        this.handleSignUpChange = this.handleSignUpChange.bind(this);
        this.handleAddHotelChange = this.handleAddHotelChange.bind(this);
        this.onAddHotel = this.onAddHotel.bind(this);
        this.handleAddImage = this.handleAddImage.bind(this);
        this.addRatingChanged = this.addRatingChanged.bind(this);
        this.onAddService = this.onAddService.bind(this);
        this.handleAddService = this.handleAddService.bind(this);
        this.handleAddReview = this.handleAddReview.bind(this);
        this.addReviewRatingChanged = this.addReviewRatingChanged.bind(this);
        this.onAddReview = this.onAddReview.bind(this);
        this.deleteService = this.deleteService.bind(this);
        this.addReservation = this.addReservation.bind(this);
    }
    getHotels = () => {
        fetch("https://midnight-aback-eater.glitch.me/api/hotels")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                const cat = localStorage.getItem('accessToken');
                console.log(cat);
                let hotels = this.formatData(result);
                let featuredHotels = hotels.filter(hotel => hotel.rate === 5);
                this.setState({
                    hotels : hotels,
                    sortedHotels : hotels,
                    featuredHotels : featuredHotels,
                    loading : false,
                    searchedHotel : "",
                    rating : 0,
            });
            },
            (error) => {
            this.setState({
                error
            });
            }
        )
    }
    getReservations = () => {
        fetch("https://midnight-aback-eater.glitch.me/api/booking", {
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json",
                "accessToken":localStorage.getItem('accessToken')
            }
            })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                let booking = this.formatBooking (result);
                this.setState({
                    booking : booking
            });
            },
            (error) => {
            this.setState({
                error
            });
            }
        )
    }
    componentDidMount() {
        this.getHotels();
        this.getReservations();
        }

    formatData(items) {
        let tempData = items.map(item => {
                let id = item._id;
                let images = item.images.map(image => image);
                let name = item.name;
                let description = item.description;
                let services = item.services;
                let rates = item.rates;
                let rate = item.rate;
                let edit_date = item.edit_date;
                let hotel = {id,name,description,rate,images,services,rates,edit_date};
                    return hotel;
        });
        return tempData;
    }
    formatBooking (items) {
        let tempData = items.map(item => {
                let hotelName = item.hotel;
                let createdDate = item.created_date;
                let booking = {hotelName,createdDate};
                    return booking;
        });
        return tempData;
    }
    login = (e) => {
        // add entity - POST
        e.preventDefault();
        // creates entity
            fetch("https://midnight-aback-eater.glitch.me/api/signin", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
                
            },
            "body": JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
            })
            .then( async response => {
                console.log(response.status);
                if(response.status === 200) {
                    const data = await response.json();
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('role', data.user.role);
                const accessToken = localStorage.getItem('accessToken');
                console.log(accessToken);
                window.location.href= "/";
                }
                
                
            })
            .catch(err => {
            console.log(err);
            });
        }

        signUp = (e) => {
            console.log(this.state.email);
            // add entity - POST
            e.preventDefault();
            // creates entity
            fetch("https://midnight-aback-eater.glitch.me/api/signup", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                userName :this.state.userName,
                mobile :this.state.mobileNumber,
                role : "User",
                authProvider  :"AuthProvider.Password"
            })
            })
            .then( async response => {
                console.log(await response.json());
                if(response.status === 200) {
                    const data = await response.json();
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('role', data.user.role);
                const accessToken = localStorage.getItem('accessToken');
                console.log(accessToken);
                window.location.href= "/";
                }
                
                
            })
            .catch(err => {
            console.log(err);
            });
        }
        onAddHotel = (e) => {
            const data = new FormData();
            // add entity - POST
            console.log(this.state.addName)
            console.log(this.state.addDescription)
            console.log(this.state.addImages)
            data.append("name",this.state.addName)
            data.append("description",this.state.addDescription)
            for(var i=0;i<this.state.addImages["length"];i++){
                data.append(`images[]`,this.state.addImages[i])
            }
            // this.state.addImages.map((image,i)=>{
            //     data.append(`images[${i}]`,image)
            // })
            e.preventDefault();
            console.log(data.getAll);
            // creates entity
            fetch("https://midnight-aback-eater.glitch.me/api/hotels", {
            method: "POST",
            headers: {
                
                "accessToken":localStorage.getItem('accessToken')
            },
            body: data,
            redirect:"follow"
            })
            .then( async response => {
                console.log(await response.json());
                if(response.status === 200) {
                    const data = await response.json();
                window.location.href= "/";
                }

            })
            .catch(err => {
            console.log(err);
            });
        }
        onAddService = (event,id) => {
             // add entity - POST
                event.preventDefault();
                // creates entity
                fetch("https://midnight-aback-eater.glitch.me/api/services", {
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                    "accept": "application/json",
                    "accessToken":localStorage.getItem('accessToken')
                },
                "body": JSON.stringify({
                    name: this.state.serviceName,
                    rate: this.state.serviceRate,
                    description :this.state.serviceDescription,
                    hotelId :id,
                })
                })
                .then( async response => {
                    console.log(await response.json());
                    if(response.status === 200) {
                        const data = await response.json();
                        
                    }
                    
                    window.location.href= "/hotels";
                })
                .catch(err => {
                console.log(err);
                });
            }
            onAddReview = (event,id) => {
                // add entity - POST
                event.preventDefault();
                
                // creates entity
                fetch("https://midnight-aback-eater.glitch.me/api/rates", {
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                    "accept": "application/json",
                    "accessToken":localStorage.getItem('accessToken')
                },
                "body": JSON.stringify({
                    hotel: id,
                    comment: this.state.newReview,
                    rate :this.state.reviewRate
                })
                })
                .then( async response => {
                    console.log(await response.json());
                    if(response.status === 200) {
                        const data = await response.json();
                        
                    }
                    
                    window.location.href= "/hotels";
                })
                .catch(err => {
                console.log(err);
                });
            }
            addReservation = (e,id) => {
                // add entity - POST
                e.preventDefault();
                
                // creates entity
                fetch("https://midnight-aback-eater.glitch.me/api/booking", {
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                    "accept": "application/json",
                    "accessToken":localStorage.getItem('accessToken')
                },
                "body": JSON.stringify({
                    hotel: id,
                })
                })
                .then( async response => {
                    console.log(await response.json());
                    if(response.status === 200) {
                        const data = await response.json();
                        
                    }
                    
                    window.location.href= "/hotels";
                })
                .catch(err => {
                console.log(err);
                });
            }
            
        handleLoginChange(e){
            if(e.target.type === "email") {
                console.log(e.target.value);
            this.setState({
                email : e.target.value
            });
            }
            else {
                console.log(e.target.value);
                this.setState({
                    password : e.target.value
                });
            }
        }
        handleSignUpChange = (event) => {
            const target = event.target;
            const value = target.value;
            const type = target.type;
            const name = target.name;
            this.setState({
                [name] : value
            });
        }
        handleAddHotelChange = (event) => {
            const target = event.target;
            const value = target.value;
            const type = target.type;
            const name = target.name;
            this.setState({
                [name] : value
            });
        }
        handleAddImage = (event) => {
            const target = event.target;
            console.log(target.files);
            this.setState({
                addImages : target.files
            });
        }
        handleAddService = (event) => {
            const target = event.target;
            const value = target.value;
            const type = target.type;
            const name = target.name;
            this.setState({
                [name] : value
            });
        }
        handleAddReview = (event) => {
            const target = event.target;
            const value = target.value;
            console.log(value)
            this.setState({
                newReview:value
            });
            
        }
        deleteHotel = (e,id) => {
            // delete entity - DELETE
                    e.preventDefault();
                    console.log( typeof id);
                    // deletes entities
                    fetch(`https://midnight-aback-eater.glitch.me/api/hotels/${id}`, {
                    "method": "DELETE",
                    "headers": {
                        // "content-type": "application/json",
                        // "accept": "application/json",
                        "accessToken":localStorage.getItem('accessToken')
                    },
                    })
                    .then(async response => {
                        console.log(response.status);
                        if(response.status === 200) {
                            // const data = await response.json();
                            window.location.href= "/";
                        }})
                    .catch(err => {
                    console.log(err);
                    });
            }
            deleteService = (e,id) => {
                
                // delete entity - DELETE
                e.preventDefault();
                // deletes entities
                console.log(id);
                fetch(`https://midnight-aback-eater.glitch.me/api/services/${id}`, {
                "method": "DELETE",
                "headers": {
                    // "content-type": "application/json",
                    // "accept": "application/json",
                    "accessToken":localStorage.getItem('accessToken')
                },
                })
                .then( response => {
                    
                    console.log(response.status);
                    if(response.status === 200) {

                        window.location.href= "/";
                    }})
                .catch(err => {
                console.log(err);
                });
            }
    logout = (e) => {
                localStorage.clear();
                window.location.href= "/";

            }
    getHotel = (id) => {
        let tempHotels = this.state.hotels;
        const hotel = tempHotels.find(hotel => 
            hotel.id ===id
        );
        return hotel;
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        // const type = target.type;
        // const name = target.name;
        this.setState({
            // [name] : value,
            searchedHotel : value
        },this.filterHotels);
    }
    filterHotels = ()=> {
        let {hotels,searchedHotel,rating} = this.state;
        let tempHotels;
        if(searchedHotel !== "") {
            tempHotels = hotels.map(hotel => {
            
                if( hotel.name.search(searchedHotel.toLowerCase()) === -1 ) {
                    return ;
                }
                else return hotel;
                
            
            })
        }
        if(rating !== 0 ) {
            if(tempHotels) {
                tempHotels = tempHotels.map(hotel => {
                    if(hotel) {
                        if( hotel.rate !== rating ) {
                            return ;
                        }
                        else return hotel;
                    }
                    
                })
            }
            else {
                tempHotels = hotels.map(hotel => {
                    if(hotel) {
                        if( hotel.rate !== rating ) {
                            return ;
                        }
                        else return hotel;
                    }
                    
                })
            }
        }
        this.setState({
            sortedHotels : tempHotels,
        });
    }
    
    ratingChanged = (newRating) => {
        // let {rating} = this.state;
        console.log(newRating);
        this.setState({
            rating : newRating,
        },this.filterHotels);
    };
    addRatingChanged = (newRating) => {
        // let {rating} = this.state;
        console.log(newRating);
        this.setState({
            serviceRate : newRating,
        });
    };
    addReviewRatingChanged = (newRating) => {
        // let {rating} = this.state;
        console.log(newRating);
        this.setState({
            reviewRate : newRating,
        });
    };
    render() {
        const state = this.state;
        return (
            <div>
                <HotelContext.Provider value={{
                    ...state,
                    getHotel : this.getHotel,
                    handleChange : this.handleChange,
                    ratingChanged : this.ratingChanged,
                    handleLoginChange : this.handleLoginChange,
                    login : this.login,
                    deleteHotel : this.deleteHotel,
                    logout : this.logout,
                    signUp : this.signUp,
                    handleSignUpChange : this.handleSignUpChange,
                    handleAddHotelChange : this.handleAddHotelChange,
                    onAddHotel : this.onAddHotel,
                    handleAddImage : this.handleAddImage,
                    addRatingChanged : this.addRatingChanged,
                    onAddService : this.onAddService,
                    handleAddService : this.handleAddService,
                    getHotelId : this.getHotelId,
                    addReviewRatingChanged : this.addReviewRatingChanged,
                    handleAddReview : this.handleAddReview,
                    onAddReview : this.onAddReview,
                    deleteService : this.deleteService,
                    addReservation : this.addReservation
                }}>
                    {this.props.children}
                </HotelContext.Provider>
            </div>
        )
    }
}
const HotelConsumer = HotelContext.Consumer;

export  {HotelProvider,HotelConsumer,HotelContext};
