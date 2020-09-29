import React from 'react'
import './footer.css'

const Footer = () => {

    return (
        <div className="footer-area footer--light">
        <div className="footer-big">
        
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="footer-widget">
                  <div className="widget-about">
                    <img src="assets/images/sdk.ico" alt="" className="img-fluid"/>
                    <p>We Upgrade you to a Creative World, Travel to see </p>
                  </div>
                </div>
              
              </div>
            
              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu footer-menu--1">
                    <h4 className="footer-widget-title">Popular Category</h4>
                    <ul>
                      <li>
                        <span >Lenovo</span>
                      </li>
                      <li>
                        <span >Acer</span>
                      </li>
                      <li>
                        <span >Predator</span>
                      </li>
                      <li>
                        <span >Cosmic Byte</span>
                      </li>
                      <li>
                        <span >Venom Striker</span>
                      </li>
                    </ul>
                  </div>
                
                </div>
               
              </div>
              
              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu">
                    <h4 className="footer-widget-title">Our Company</h4>
                    <ul>
                      <li>
                        <span >About Us</span>
                      </li>
                      <li>
                        <span >How It Works</span>
                      </li>
                      <li>
                        <span >Affiliates</span>
                      </li>
                      <li>
                        <span >Testimonials</span>
                      </li>
                      <li>
                        <span >Contact Us</span>
                      </li>
                      <li>
                        <span >Plan &amp; Pricing</span>
                      </li>
                      <li>
                        <span >Blog</span>
                      </li>
                    </ul>
                  </div>
                  
                </div>
                
              </div>
             
              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu no-padding">
                    <h4 className="footer-widget-title">Help Support</h4>
                    <ul>
                      <li>
                        <span >Support Forum</span>
                      </li>
                      <li>
                        <span >Terms &amp; Conditions</span>
                      </li>
                      <li>
                        <span >Support Policy</span>
                      </li>
                      <li>
                        <span >Refund Policy</span>
                      </li>
                      <li>
                        <span >FAQs</span>
                      </li>
                      <li>
                        <span >Buyers Faq</span>
                      </li>
                      <li>
                        <span >Sellers Faq</span>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              
              </div>
             
            </div>
           
          </div>
         
        </div>
        
        <div className="mini-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-text">
                  <p>© 2019
                    <span >SDK</span>. All rights reserved. Created by
                    <span target="blank" href="https://www.facebook.com/dinshdinesh">SDK_ENTERPRISES</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Footer