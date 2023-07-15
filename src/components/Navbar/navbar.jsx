/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { handleMobileDropdown } from '../../common/navbar';
import appData from '../../data/app.json';

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === 'themeL' ? 'light' : ''
      }`}
    >
      <div className='container'>
        <Link href='/'>
          <a className='logo'>
            {theme ? (
              theme === 'themeL' ? (
                <img
                  style={{ width: '400px', cursor: 'pointer' }}
                  ref={lr}
                  src={appData.darkLogo}
                  alt='logo'
                />
              ) : (
                <img
                  style={{ width: '400px' }}
                  ref={lr}
                  src={appData.lightLogo}
                  alt='logo'
                />
              )
            ) : (
              <img
                style={{ width: '110px' }}
                ref={lr}
                src={appData.lightLogo}
                alt='logo'
              />
            )}
          </a>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          onClick={handleMobileDropdown}
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='icon-bar'>
            <i className='fas fa-bars'></i>
          </span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link href='/'>
                <a className='nav-link'>Home</a>
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='#services'>
                <a className='nav-link'>Services</a>
              </Link>
            </li>

            <li className='nav-item'>
              <Link href={`/projects`}>
                <a className='nav-link'>Projects</a>
              </Link>
            </li>

            {/* <li className='nav-item dropdown' onClick={handleDropdown}>
              <span
                className='nav-link dropdown-toggle'
                data-toggle='dropdown'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Works
              </span>
              <div className='dropdown-menu'>
                <Link href={`/showcase/showcase-dark`}>
                  <a className='dropdown-item'>Showcase Parallax</a>
                </Link>
                <Link href={`/showcase4/showcase4-dark`}>
                  <a className='dropdown-item'>Showcase Carousel</a>
                </Link>
                <Link href={`/showcase3/showcase3-dark`}>
                  <a className='dropdown-item'>Showcase Circle</a>
                </Link>
                <Link href={`/works/works-dark`}>
                  <a className='dropdown-item'>Portfolio Masonry</a>
                </Link>
                <Link href={`/works2/works2-dark`}>
                  <a className='dropdown-item'>Portfolio Filtering</a>
                </Link>
                <Link href={`/works3/works3-dark`}>
                  <a className='dropdown-item'>Portfolio Gallery</a>
                </Link>
              </div>
            </li> */}
            {/* <li className='nav-item dropdown' onClick={handleDropdown}>
              <span
                className='nav-link dropdown-toggle'
                data-toggle='dropdown'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Blog
              </span>
              <div className='dropdown-menu'>
                <Link href={`/blog/blog-dark`}>
                  <a className='dropdown-item'>Blog Standerd</a>
                </Link>
                <Link href={`/blog-list/blog-list-dark`}>
                  <a className='dropdown-item'>Blog List</a>
                </Link>
                <Link href={`/blog-grid/blog-grid-dark`}>
                  <a className='dropdown-item'>Blog Grid</a>
                </Link>
                <Link href={`/blog-details/blog-details-dark`}>
                  <a className='dropdown-item'>Blog Details</a>
                </Link>
              </div>
            
            </li> */}
            <li className='nav-item'>
              <Link href={`/about`}>
                <a className='nav-link'>Details</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href={`/blog-grid/blog-grid-dark`}>
                <a className='nav-link'>Blogs</a>
              </Link>
            </li>

            <li className='nav-item'>
              <Link href={`/contact`}>
                <a className='nav-link'>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
