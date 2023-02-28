import React from 'react'
import Banner from '../Components/Banner/Banner'
import './contact.css'

export default function Contact() {
  return (
    <>
    <Banner title="Contact US" smTitle="contact us"/>
    <section className="">
       <div className="container">
        <div className="row contact p-5">
          <div className="col-md-6 px-5">
            <form action="">
            <input type="text" className="form-control mb-3" placeholder='Your Name' />
            <input type="email" className="form-control my-3" placeholder='Your Email' />
            <input type="text" className="form-control my-3" placeholder='Phone Number' />
            <select className='d-block w-100 my-3 p-2'>
              <option>Select Department </option>
              <option>one</option>
              <option>two</option>
              <option>three</option>
            </select>
            <textarea className='d-block w-100 my-3 ' name="msg"  rows="5" placeholder='Message'></textarea>
            <button className='btn' type='submit'>Submit</button>
            </form>
          </div>
          <div className="col-md-6 px-5">
            <div className="side">
              <div className="overlay text-white">
                <h3>Contact us for any informations</h3>
                <h5><i className="fa-solid fa-map-location-dot"></i> Location</h5>
                <hr />
                <p>Nilco street 278.USA</p>
                <h5><i class="fa-solid fa-envelope-open-text"></i> Email & Phone</h5>
                <hr />
                <p>infoo@gmail.com</p>
                <p>01298745632</p>
                <h5><i class="fa-solid fa-globe"></i> Follow US</h5>
                <div className="sochial-icon d-flex">
                  <i class="fa-brands fa-facebook pe-2"></i>
                  <i class="fa-brands fa-twitter pe-2"></i>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    </section>
    </>
  )
}
