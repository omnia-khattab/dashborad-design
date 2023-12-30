import React from 'react'
import './Footer.scss';

export default function Footer() {

  return (
    <footer>
      <small>© <span>{new Date().getFullYear()}</span>. All Rights Reserved.</small>
    </footer>
  )
}
