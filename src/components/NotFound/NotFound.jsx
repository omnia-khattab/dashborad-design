import React from 'react'
import './NotFound.scss';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
    <Helmet>
      <title>Not Found</title>
    </Helmet>
    <div className='section'>Not Found</div>
    </>
  )
}
