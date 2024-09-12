import React from 'react'

const Footer = () => {
  return (
 <>
 
 <footer class="footer">
  <div class="footer-container">
    <div class="footer-section">
      <h4>Company</h4>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Press</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h4>Services</h4>
      <ul>
        <li><a href="#">Order Food</a></li>
        <li><a href="#">Partner with Us</a></li>
        <li><a href="#">Become a Delivery Partner</a></li>
        <li><a href="#">Help</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h4>Legal</h4>
      <ul>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Refund Policy</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h4>Contact Us</h4>
      <ul>
        <li><a href="#">Contact Support</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 NGK Company. All rights reserved.</p>
    <div class="app-buttons">
      <a href="#" class="app-button google-play">
        <img src="/images/2b.jpg" alt="Get it on Google Play"/>
      </a>
      <a href="#" class="app-button app-store">
        <img src="/images/2a.jpg" alt="Download on the App Store" />
      </a>
    </div>
  </div>
</footer>

 
 </>
  )
}

export default Footer