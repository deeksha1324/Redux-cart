import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>

      <footer className="bg-white rounded-lg shadow">
          <div className="w-full  max-w-screen-xl mx-auto p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center ">© 2024 <Link to="https://flowbite.com/" className="hover:underline">Cinematic_Spark</Link>. All Rights Reserved by DD.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500  sm:mt-0">
                <li>
                    <a href="https://www.youtube.com/" rel="noreferrer" target="_blank" className="hover:underline me-4 md:me-6">Youtube</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" rel='noreferrer' target="_blank" className="hover:underline me-4 md:me-6">Instagram</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" className="hover:underline me-4 md:me-6">Facebook</a>
                </li>
            </ul>
          </div>
      </footer>


    </div>
  )
}
