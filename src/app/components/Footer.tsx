import React from 'react';
import facebook from "../../../public/facebook.png"
import insta from "../../../public/insta.png"
import lin from "../../../public/lin.png"
import git from "../../../public/git.png"
import Image from 'next/image';
const Footer = () => {
    return (
        <div>
            <footer className='flex flex-col space-y-10 justify-center m-10 mb-0'>
                <nav className=' flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700'>
                    <a className='hover:text-cyan-500 text-amber-500' href="#">Home</a>
                    <a className='hover:text-cyan-500 text-amber-500' href="#">About</a>
                    <a className='hover:text-cyan-500 text-amber-500' href="#">Delivery</a>
                    <a className='hover:text-cyan-500 text-amber-500' href="#">Contact</a>
                </nav>
                <div className='flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105'>
                    <a  className='w-8 h-8' href="https://facebook.com" target='blank' rel='nofollow noopener'>
                        <Image src={facebook} alt="" />
                    </a>
                    <a  className='w-8 h-8' href="https://facebook.com" target='blank' rel='nofollow noopener'>
                        <Image src={insta} alt="" />
                    </a>
                    <a className='w-8 h-8'  href="https://facebook.com" target='blank' rel='nofollow noopener'>
                        <Image src={lin} alt="" />
                    </a>
                    <a className='w-8 h-8'  href="https://facebook.com" target='blank' rel='nofollow noopener'>
                        <Image src={git} alt="" />
                    </a>
                </div>
                <p className='text-center hover:text-cyan-500 text-amber-400 font-medium mb-8'>2024 Talha All Rights Reserved </p>
            </footer>
        </div>
    );
}

export default Footer;
