import React from 'react'
import company from '../../assets/Group 334.png'
import './landingpage.css'

function Footer() {
  return (
    <div>
      <div className="section-51">
        <h3>
          Never Want to Miss <br />
          Any <span>Job News?</span>
        </h3>
        <div className="newsletter">
          <input type="email" placeholder="Enter your email" />
          <button className='footerBtn'>Subscribe</button>
        </div>
      </div>
      <div className="section-52">
        <div className="footers">
          <div><img className="footer-logo" src={company} alt="scafflogo"/>  </div>
          <h3>About</h3>
          <h3>Jobs</h3>
          <h3>Contact Us</h3>
          <h3>Terms</h3>
          <h3>Privacy Policy</h3>
        </div>
        <hr />
        <small>@staffingSolutions All right reserved.</small>
      </div>
    </div>
  );
}

export default Footer
