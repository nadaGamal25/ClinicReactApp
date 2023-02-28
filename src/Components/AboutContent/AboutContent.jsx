import React from 'react'
import doc1 from '../../Assets/doctors.webp'
import doc2 from '../../Assets/doctors2.jpg'
import doc3 from '../../Assets/doctors3.jpg'
import './about.css'
export default function AboutContent() {
  return (
    <>
    <section className="about">
            <div className="container">
                <div className="row p-5">
                    <div className="col-md-6">
                        <div className='d-flex'>
                        <img className='doc1 ' src={doc1} alt="doctors" />
                        <img className='doc2 ' src={doc2} alt="doctors" />
                        </div>
                        <div className='d-flex'>
                        <img className='doc3' src={doc3} alt="doctors" />
                        <div className="years">
                            <h1>15</h1>
                            <h4>Year Experience</h4>
                        </div>
                        </div>

                    </div> 
                    <div className="col-md-6 about-caption pt-2">
                        <h6>About us</h6>
                        <h2>The Great place of medical hospital center</h2>
                        <p>The million patients we treat each year prepares us to treat the one who matters most — you.</p>
                        <div className=' d-flex'>
                            <a><i class="fa-solid fa-truck-medical"></i> Emergency Help</a>
                            <a><i class="fa-solid fa-temperature-quarter"></i> Qualified Doctors xx</a>
                        </div>
                        <div className='d-flex'>
                            <a><i class="fa-solid fa-shield"></i> The Professiional</a>
                            <a><i class="fa-solid fa-syringe"></i> Medical Treatments</a>
                        </div>
                        <button className="btn">Read More</button>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}
