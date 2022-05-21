import React from 'react';
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import { Route , Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hotels from './pages/Hotels';
import SingleHotel from './pages/SingleHotel';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddHotel from './pages/AddHotel';
import AddService from './pages/AddService';
import Reservation from './pages/Reservation';
function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/hotels" caseSensitive={false} element={<Hotels />} />
        <Route path="/hotels/:id" caseSensitive={false} element={<SingleHotel /> } />
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/login" caseSensitive={false} element={<Login />} />
        <Route path="/signUp" caseSensitive={false} element={<SignUp />} />
        <Route path="/addHotel" caseSensitive={false} element={<AddHotel/>} />
        <Route path="/addService/:id" caseSensitive={false} element={<AddService />} />
        <Route path="/reservation" caseSensitive={false} element={<Reservation />} />
        <Route  path="/*" element={<Error />} />
      </Routes>
    </>
  );
}
export default App;