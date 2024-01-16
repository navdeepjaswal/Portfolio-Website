import React, { useState } from 'react'
import navIcon from '../assets/nav-icon.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import peekImage from '../assets/peek.png';
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarSections from './NavbarSections';

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    function handleClick() {
        setMenuOpen((prevState) => (!prevState));
    }

    return (
        <div className='nav-container w-full'>
            <div className={`nav-bar bg-[#ff5500] w-full flex py-[10px] items-center text-gray-200 ${isMenuOpen ? 'justify-center': 'justify-between'} xsm:justify-between`}>

                {/* nav-image */}
                <img src={navIcon} alt="nav-icon" className={`${isMenuOpen && 'hidden xsm:block'} w-[55px] lg:w-[70px] pl-5 hover:cursor-pointer hover:animate-pulse`}></img>

                {/* nav menu */}
                <div className={`${isMenuOpen && 'flex flex-col align-center w-full'} nav-item mr-3`}>
                    {/*hamburger icon for mobile displays*/}
                    <button className={`xsm:hidden pr-2 ${isMenuOpen &&  'self-end'}`} onClick={handleClick}><GiHamburgerMenu /></button>
                    {isMenuOpen && <NavbarSections display='flex flex-col text-center mx-auto xsm:hidden' />}

                    <NavbarSections display={'hidden xsm:flex flex-row'} />
                </div>
            </div>

            {/* social-links */}
            <div className='social fixed left-0 top-[35%]'>
                <ul>
                    <li className='font-t font-extralight relative left-[-89px] hover:left-[0] rounded-md duration-300 hover:bg-gray bg-[#0000009c]'>
                        <a href='https://www.linkedin.com/in/navdeep-jaswal-9391b0115/' target="_blank">LinkedIn  <LinkedInIcon fontSize="large" /></a>
                    </li>
                    <li className='font-t font-extralight relative left-[-74px] hover:left-[0] rounded-md duration-300 hover:bg-gray bg-[#0000009c]'>
                        <a href='https://github.com/navdeepjaswal' target="_blank">Github  <GitHubIcon fontSize="large" /></a>
                    </li>
                    <li className='font-t font-extralight relative left-[-245px] hover:left-[0] rounded-md duration-300 hover:bg-gray bg-[#0000009c]'>
                        <a href='https://meritpages.com/NavdeepJaswal' target="_blank">Academic Acheivements  <SchoolIcon fontSize="large" /></a>
                    </li>
                </ul>
            </div>

            {/*peek image*/}
            <img src={peekImage} alt="peek-img" className='fixed bottom-0 right-0 w-[10%] duration-1000 hover:right-[-20%] min-w-[120px]' />
        </div>

    )
}

export default Navbar

