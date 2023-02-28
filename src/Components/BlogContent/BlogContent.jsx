import React from 'react'
import blog1 from '../../Assets/blog1.jpg'
import blog2 from '../../Assets/blog2.jfif'
import blog3 from '../../Assets/blog3.webp'
import doc4 from '../../Assets/doc4.jpg'
import doc6 from '../../Assets/doc6.jpg'
import doc7 from '../../Assets/doc7.png'
import './blog.css'

export default function BlogContent() {
  return (
    <>
    <section>
        <div className="container">
            <div className="row g-3">
                <div className="col-md-4">
                    <div className="blog">
                        <img className='w-100 blogImg' src={blog1} alt="doctors" />
                        <div className="d-flex">
                            <div className='doctorImg'>
                                <img className='w-100 ' src={doc4} alt="doctor" />
                            </div>
                            <div>
                                <h6>Joy fero</h6>
                            </div>
                            <div className='date'>
                            <i class="fa-regular fa-calendar-days"></i> 24 Oct 2022
                            </div>
                        </div>
                        <h2>In this hospital there are special sergeon</h2>
                        <button className='btn'>Read More <i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blog">
                        <img className='w-100 blogImg' src={blog2} alt="doctors" />
                        <div className="d-flex">
                            <div className='doctorImg'>
                                <img className='w-100 ' src={doc6} alt="doctor" />
                            </div>
                            <div>
                                <h6>Bella peter</h6>
                            </div>
                            <div className='date'>
                            <i class="fa-regular fa-calendar-days"></i> 25 Oct 2022
                            </div>
                        </div>
                        <h2>Can you get a diflucan prescription online?</h2>
                        <button className='btn'>Read More <i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blog">
                        <img className='w-100 blogImg' src={blog3} alt="doctors" />
                        <div className="d-flex">
                            <div className='doctorImg'>
                                <img className='w-100 ' src={doc7} alt="doctor" />
                            </div>
                            <div>
                                <h6>Gessy leo</h6>
                            </div>
                            <div className='date'>
                            <i class="fa-regular fa-calendar-days"></i> 26 Oct 2022
                            </div>
                        </div>
                        <h2>Why is skin sergeon considered worried?</h2>
                        <button className='btn'>Read More <i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
