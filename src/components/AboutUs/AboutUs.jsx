import React from 'react'
import './AboutUs.scss';
import { Helmet } from 'react-helmet-async';

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div className='section'>About Us</div>
    </>
  )
}
