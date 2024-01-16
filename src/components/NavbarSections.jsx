import React from 'react'
import { Link } from 'react-scroll';

function NavbarSections({display}) {
    return (
        <ul className={` ${display} justify-evenly w-full`}>
            <li className='font-s'>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>

            <li className='font-s'>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>

            <li className='font-s'>
                <Link to="experience" smooth={true} duration={500}>
                    Experience
                </Link>
            </li>

            <li className='font-s'>
                <Link to="portfolio" smooth={true} duration={500}>
                    Portfolio
                </Link>
            </li>

            <li className='font-s'>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
    )
}

export default NavbarSections