import React from 'react'
import { Link } from 'react-router-dom'
import './banner.css'

export default function Banner(props) {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>{props.title}</h2>
            <span>
              <Link to="/home"><i className="fa-solid fa-house"></i> home </Link>/ {props.smTitle}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
