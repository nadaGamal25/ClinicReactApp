import React from 'react'
import './services.css'

export default function ServicesContent() {
  return (
    <>
    <section className="">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="services p-3">
                    <h6>Services</h6>
                        <h2>The Great place of medical hospital center</h2>
                        <p>The million patients we treat each year prepares us to treat the one who matters most — you.</p>
                        
                        <button className="btn">Read More</button>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="serv">
                    <i class="fa-solid fa-user-doctor"></i>
                        <h5>Surgery</h5> 
                        <p>All of our patient care, education and research are driven to make discoveries</p>           
                        <button type='button' className='btn'>View More</button>        
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="serv">
                    <i class="fa-solid fa-syringe"></i>
                        <h5>Vaccine</h5> 
                        <p>All of our patient care, education and research are driven to make discoveries</p>           
                        <button type='button' className='btn'>View More</button>        
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="serv">
                    <i class="fa-solid fa-truck-medical"></i> 
                        <h5>Emergency</h5> 
                        <p>All of our patient care, education and research are driven to make discoveries</p>           
                        <button type='button' className='btn'>View More</button>        
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="serv">
                    <i class="fa-solid fa-capsules"></i>
                        <h5>Treatment</h5> 
                        <p>All of our patient care, education and research are driven to make discoveries</p>           
                        <button type='button' className='btn'>View More</button>        
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    </>
  )
}
