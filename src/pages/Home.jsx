import React from 'react'
import headerImg from '../Assets/headerImg.png'
import './Home.css'
import AboutContent from '../Components/AboutContent/AboutContent'
import ServicesContent from '../Components/ServicesContent/ServicesContent'
import BlogContent from '../Components/BlogContent/BlogContent'

export default function Home() {
  return (<>
  <header>
        <div className="container pt-5">
            <div className="row py-4">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h5>We Provide All Healthcare Solutions</h5>
                    <h2>Protect your health and take care your health</h2>
                    <button className=''><a href="#">Read More</a></button>
                    <span className='plus'> + </span>
                </div>
                <div className="col-md-6">
                    <div className="headerBox">
                    <img src={headerImg} alt="header Image" />
                    <span className="o">O</span>
                                          </div>
                    
                </div>
            </div>
        </div>
    </header>

    <AboutContent/>
    <section className="servSection">
    <ServicesContent/>
    </section>
    <section>
        <h3 className='news'>Latest News</h3>
        <BlogContent/>
    </section>
  </>
    
  )
}
