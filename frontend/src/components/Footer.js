import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-bold mb-3">Abstract</h4>
          <ul>
            <li><a href="#" className="hover:underline">Branches</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Resources</h4>
          <ul>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Release Notes</a></li>
            <li><a href="#" className="hover:underline">Status</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Community</h4>
          <ul>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Dribbble</a></li>
            <li><a href="#" className="hover:underline">Podcast</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Company</h4>
          <ul>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Legal</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Contact Us</h4>
          <p>info@abstract.com</p>
        </div>
      </div>
      <div className="mt-8 text-xs text-gray-400 flex justify-end pr-10">
        <div className="text-right">
          <p className="font-bold">&copy; Copyright 2024</p>
          <p className="font-bold">Abstract Studio Design, Inc.</p>
          <p className="font-bold">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
