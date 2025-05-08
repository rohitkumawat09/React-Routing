import React from 'react'

function footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-section about">
        <h3>YourCompany</h3>
        <p>Building innovative solutions for a better web experience.</p>
      </div>

      <div className="footer-section links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          {/* <li><a href="/about">About</a></li> */}
          {/* <li><a href="">Services</a></li> */}
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section contact">
        <h4>Contact</h4>
        <p>Email: info@yourcompany.com</p>
        <p>Phone: +1 234 567 890</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 YourCompany. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default footer