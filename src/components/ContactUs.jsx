import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail } from "react-icons/md";

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const username = form.current.user_name.value;
        const email = form.current.user_email.value;
        const message = form.current.message.value;

        if(username && email && message) {
            emailjs.sendForm('service_aahmumv', 'template_s3cuud1', form.current, 'sZxiQ9AFEZLryUd6x')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
        } else {
            alert('Please fill in all fields of the Contact form.');
        }
    };

    return (

        <>
            <div className='contact bg-[#ff5500] text-white pb-10'>
                <div className='flex justify-center items-center w-[75%] mx-auto text-montserrat'>

                    <div className='flex flex-col justify-center'>
                        <div className='flex items-center'>
                            <h1 className='font-p text-[1.3em] 2xsm:text-[2.5em] font-extrabold underline pb-8 text-center' 
                                style={{ textDecorationColor: 'gold', textUnderlineOffset: '15px' }}>Get In Touch 
                            </h1> &nbsp; &nbsp;
                        </div>

                        <form ref={form} onSubmit={sendEmail} className='flex flex-col w-3/4 mx-auto'>

                            <label className='font-p text-xl mb-1'>Name</label>
                            <input className='mb-7 font-p text-base p-3 outline-none outline-[white] text-black rounded-lg' type="text" name="user_name" />

                            <label className='font-p text-xl mb-1'>Email</label>
                            <input className='mb-7 font-p text-base p-3 outline-none outline-[white] text-black rounded-lg' type="email" name="user_email" />

                            <label className='font-p text-xl mb-1'>Message</label>
                            <textarea name="message" className='font-p text-base p-3 outline-none outline-[white] text-black rounded-lg resize-none h-48' />
                            
                            <input type="submit" value="Submit" className='font-p text-lg font-extrabold mt-8 w-2/4 p-2 self-center outline-none rounded-full bg-white hover:cursor-pointer text-black hover:font-bold hover:bg-[gold] transition-all duration-300'/>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};