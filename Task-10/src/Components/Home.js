import React from 'react'
import Cityroute from './Cityroute';
import Chennai from './Chennai';
import Rameshwaram from './Rameshwaram';
import Kodaikanal from './Kodaikanal';
import Ooty from './Ooty';
import Kanyakumari from './Kanyakumari';
import Kumbakonam from './Kumbakonam';
import Madurai from './Madurai';
import Yercaud from './Yercaud';
import Theni from './Theni';
import Hogenakkal from './Hogenakkal';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from './Carousel';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Cityroute />
      <Chennai />
      <Rameshwaram />
      <Kodaikanal />
      <Ooty />
      <Kanyakumari />
      <Kumbakonam />
      <Madurai />
      <Yercaud />
      <Theni />
      <Hogenakkal />
    </div>
  )
}

export default Home