import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import bgimg from '../../../assets/appointment.png'


const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

     const emailRef = useRef('');
     const subjectRef = useRef('');
     const messegeRef = useRef('');

    const handleSubmitform = (e) =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const subject = subjectRef.current.value;
        const messege = messegeRef.current.value;
        const all  = {
            email,
            subject,
            messege
        }
        console.log(all);
    }
    return (
        <div style={{
            backgroundImage: `url('${bgimg}')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}
            className="p-10">
            <div>
                <div >
                    <h1 className='text-center font-bold text-primary text-lg capitalize'>contact us</h1>
                    <h1 className='text-center text-white  text-2xl '>Stay connected with us</h1>
                </div>
                <div className='mt-10'>

                    <form className='flex flex-col gap-6 lg:w-96 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input className='px-4 py-3 rounded-md w-full ' type="email" placeholder="email" {...register("email", { required: true, pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i })} />
                        </div>
                        <div>
                            <input className='px-4 py-3 rounded-md w-full ' type="text" placeholder="subject" {...register("subject", { required: true, min: 10, maxLength: -1 })} />
                        </div>
                        <div>
                            <textarea className='px-4 py-3 rounded-md w-full ' {...register("comment", { required: true, min: 19 })} />
                        </div>
                        <div className='mx-auto'>
                            <input className='px-4 text-white py-3 rounded-md  bg-gradient-to-r from-primary to-secondary hover:text-white cursor-pointer' type="submit" />
                        </div>
                    </form>

                    <form className='flex flex-col gap-6 lg:w-96 mx-auto' >
                        <div>
                            <input ref={emailRef} className='px-4 py-3 rounded-md w-full ' type="email" placeholder="email" name='email' />
                        </div>
                        <div>
                            <input ref={subjectRef} className='px-4 py-3 rounded-md w-full ' type="text" placeholder="subject" name='subject' />
                        </div>
                        <div>
                            <textarea ref={messegeRef} className='px-4 py-3 rounded-md w-full '  name='comments'/>
                        </div>
                        <div className='mx-auto'>
                            <input onClick={handleSubmitform}  className='px-4 text-white py-3 rounded-md  bg-gradient-to-r from-primary to-secondary hover:text-white cursor-pointer' type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;