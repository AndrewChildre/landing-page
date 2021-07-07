import React from 'react';
import { useForm } from 'react-hook-form';


const Form = () => {

    const {register, handleSubmit, formState:{ errors }} = useForm()

    return (
        <div className='full-container'>
        <div className='container1' style={{background: 'red'}}>
            <form onSubmit={handleSubmit((data)=>{console.log(data);
            })} className='form' >

               <div className='item username'>
                <label htmlFor="username">Username:</label>
                <br />
                <input {...register('username', {required: 'Username is Required'})} id='username' type="text" />
                {errors.username && <p>{errors.username.message}</p>}
               </div>

               <div className='item email'>
                 <label htmlFor="email">Email:</label>
                 <br />
                <input {...register('email', {required: 'Email is Required'})} id='email' type="text" />
                {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div className='item password'>
                 <label htmlFor="password">Password:</label>
                 <br />
                <input type="text" />
                </div>

                <div className='item password2'>
                 <label htmlFor="password2">Confirm Password:</label>
                 <br />
                <input type="text" />
                </div>
                  <div className='item btn'>
                <button>Submit</button>
                </div>
            </form>
            
            </div>

            <h1 style={{background: 'green'}} className='right-col'>Some other shit</h1>

            </div>
    );
};

export default Form;