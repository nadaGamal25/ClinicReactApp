import React from 'react'
import './footer.css'
import footerLogo from '../../Assets/logo2.png';


export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className="container pt-3">
        <div className="row py-3 ">
        <div className="col-md-3 col-sm-6 p-3">
            <img className='w-25' src={footerLogo} alt="footer logo" />
            <p>Make your tax-deductible gift today, and be a part of cutting-edge research and care</p>
            <div className="footer-contact d-flex">
            <i className=" fa-solid fa-phone mt-2"></i>
              <div>
                <h6>Contact Us</h6>
                <h4>(+01)555 444 333</h4>
              </div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6 p-3">
          <h2>Quick Links</h2>
          <span>`````````````</span>
          <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Booking</a></li>
          <li><a href="#">FAQ's</a></li>
          <li><a href="#">Our team</a></li>
          <li><a href="#">Services</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6 p-3">
        <h2>Our Services</h2>
          <span>`````````````</span>
          <ul>
          <li><a href="#">Dental care</a></li>
          <li><a href="#">Cardiac clinic</a></li>
          <li><a href="#">Message therapy</a></li>
          <li><a href="#">Cardiology</a></li>
          <li><a href="#">Diagnosis</a></li>
          <li><a href="#">Spechial Services</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6 p-3">
        <h2>Quick Links</h2>
          <span>`````````````</span>
          <input type='email' className="btn mailBtn mt-2" placeholder='Email Address'/>
          <button type='submit' className="btn my-4 px-4 subscribeBtn">Subscribe Now</button>
          <div className="sochial-icon d-flex">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>

          </div>
          
        </div>
        <div className="m-auto line"></div>
          <div className='text-center text-muted py-3'>@copyright 2023 with amazing developers</div>
        </div>
    </div>
    </footer>
    
  )
}
