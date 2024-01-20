import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-slate-900 text-neutral-content">
  <div className='footer py-32 lg:max-w-[1440px] lg:flex ps-10 md:ps-0 lg:justify-between  mx-auto'>
    <div className=''>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Cooking</a>
    <a className="link link-hover">Delivary</a>
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Resturants</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
  <div>
    <span className="footer-title">Contact</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
  <div>
    <span className="footer-title">Information</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
  </div>
</footer>
    );
};

export default Footer;