import React from 'react';
import { useForm } from "react-hook-form";
const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='h-screen flex items-center justify-center my-shadow p-5'>
            <div className='lg:w-[360px] w-full border p-5 rounded-2xl'>
                <div className='text-center font-bold text-gray-900 text-2xl capitalize mb-3'>login</div>
                <div className='grid grid-cols-1 gap-3 '>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <div className="form-control  ">
                            <label className="label  ">
                                <span className="label-text-alt font-bold">Email</span>
                            </label>
                            <input type='text' placeholder="Email or Phone" className="input input-bordered  " {...register("email", { required: true, pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i })} />
                            <label className="label  ">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">This field is require</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">Write a valid email</span>}
                            </label>
                        </div>
                        <div className="form-control  ">
                            <label className="label  ">
                                <span className="label-text-alt font-bold py-0 my-0">Password</span>
                            </label>
                            <input type='password' placeholder="password" className="input input-bordered  " {...register("password", { required: true, minLength: 6 })} />
                            <label className="label  ">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">This field is require</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">Must be 6 or more character</span>}
                            </label>
                        </div>
                        <div className="form-control  ">
                            <input type="submit" value="submit" className="input input-border-0 cursor-pointer font-semibold text-white text-lg bg-secondary  " />
                        </div>
                    </form>
                    <p className='text-sm text-left' style={{marginTop:"-8px"}}>Forget Password ?</p>
                    <p className='text-sm text-left' style={{marginTop:"-8px"}}><small>New to Doctors Portal?</small> <small className='text-secondary'>Create new account</small></p>
                    <div style={{marginTop:"0",marginBottom:"0"}} class="divider">OR</div>
                    <div className="  ">
                        <button className="input input-bordered w-full hover:font-bold  capitalize hover:text-white hover:bg-secondary  hover:border-0"> with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;