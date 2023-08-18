import React from 'react';
import LoginForm from './LoginForm';
import './Content.css';

const Content = () => {
  return (
        <div className="content">
      <div className="section section-box">
        <h2>Discover Your Dream Destinations</h2>
        <p>Explore our wide range of stunning travel destinations across the globe. From breathtaking landscapes to vibrant cities, we have it all.</p>
      </div>
      <div className="section section-box">
        <h2>Plan Your Perfect Vacation</h2>
        <p>Our easy-to-use booking platform allows you to customize your trip according to your preferences. Choose accommodations, activities, and more.</p>
      </div>
      <div className="section section-box">
        <h2>Book with Confidence</h2>
        <p>With our secure payment system and dedicated customer support, you can book your vacation worry-free and focus on creating unforgettable memories.</p>
      </div>
      <LoginForm />
    </div>
  );
};

export default Content;
