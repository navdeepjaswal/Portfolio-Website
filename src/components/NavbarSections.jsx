import React from 'react'
import { Link } from 'react-scroll';

function NavbarSections({display, smallRes = false}) {
    return (
        <ul className={` ${display} justify-evenly w-full`}>
            <li className={`font-p font-extrabold xsm:text-[.9em] sm:text-[1.1em] 3xsm:p-[14px] md:pr-9 ${smallRes ? 'underline' : ''}`} style={smallRes ? { textDecorationColor: 'gold', textUnderlineOffset: '7px' } : null}>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>

            <li className={`font-p font-extrabold xsm:text-[.9em] sm:text-[1.1em] 3xsm:p-[14px] md:pr-9 ${smallRes ? 'underline' : ''}`} style={smallRes ? { textDecorationColor: 'gold', textUnderlineOffset: '7px' } : null}>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>

            <li className={`font-p font-extrabold xsm:text-[.9em] sm:text-[1.1em] 3xsm:p-[14px] md:pr-9 ${smallRes ? 'underline' : ''}`} style={smallRes ? { textDecorationColor: 'gold', textUnderlineOffset: '7px' } : null}>
                <Link to="experience" smooth={true} duration={500}>
                    Experience
                </Link>
            </li>

            <li className={`font-p font-extrabold xsm:text-[.9em] sm:text-[1.1em] 3xsm:p-[14px] md:pr-9 ${smallRes ? 'underline' : ''}`} style={smallRes ? { textDecorationColor: 'gold', textUnderlineOffset: '7px' } : null}>
                <Link to="portfolio" smooth={true} duration={500}>
                    Portfolio
                </Link>
            </li>

            <li className={`font-p font-extrabold xsm:text-[.9em] sm:text-[1.1em] 3xsm:p-[14px] ${smallRes ? 'underline' : ''}`} style={smallRes ? { textDecorationColor: 'gold', textUnderlineOffset: '7px' } : null}>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
    )
}

export default NavbarSections