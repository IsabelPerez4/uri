import React from 'react';
import '../CSS/footer.css';
import email from '../assets/email.svg';
import instagram from '../assets/instagram.svg';

const Footer = () => {
  return (
    <section className="footer">
      <section className="footer-info">
        <section className="footer-info-left">
          <img
            src="https://isabelprojects.s3.amazonaws.com/proyectouri/Logos/URI-SHOT%26EDIT-URI-SIN-FONDO-mobile.png"
            alt="logo"
            class="logo"
          />
        </section>

        <section className="footer-info-center">
          <section className="footer-social-media">
            <a
              href="mailto:urimp00@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={email} alt="email" class="icon" />
            </a>
            <a
              href="https://www.instagram.com/isabel.c.perez.77/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" class="icon"></img>
            </a>
          </section>
        </section>

        <section className="footer-info-right">
          <section className="footer-slogan">
            {' '}
            Copyright - SHOT and EDIT by URI{new Date().getFullYear()}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Footer;
