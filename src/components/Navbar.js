import React  from 'react';
import Logo from '../images/214244399.jpg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { HotelContext } from '../Context';

export default class Navbar extends React.Component {
    constructor (props) {
        super(props);
        this.state={isOpen : false};
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
        this.setState({isOpen : !this.state.isOpen});
    }
    static contextType = HotelContext;
    render () {
        let {logout} = this.context;
        return <nav className='navbar'>
                    <div className='nav-center'>
                        <div className='nav-header'>
                            <Link to="/">
                                <img src={Logo} alt='logo'/>
                            </Link>
                            <button type='button' className='nav-btn' onClick={this.handleToggle}>
                                <FaAlignRight  className='nav-icon'/>
                            </button>
                        </div>
                        <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/hotels'>Hotels</Link>
                            </li>
                            <li>
                            {localStorage.getItem('accessToken')!==null ?<Link to="/reservation">Reservation</Link>:null}
                            </li>
                            <li>
                                {localStorage.getItem('accessToken')!==null ?<Link to="/"><button className='btn-primary logout-btn' type="submit" onClick={logout}>Logout</button></Link>:<Link to='/login'>Login</Link>}
                            </li>
                        </ul>
                    </div>
                </nav>
    }
}
