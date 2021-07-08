import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm();

	return (
		<div className='full-container'>
			<section className='left-col' style={{ background: 'red' }}>
				<h1>Enter to not win a <br /> ferrari</h1>
				<form
					onSubmit={handleSubmit((data) => {
						console.log(data);
					})}
					className='form'>
					<div className='item username'>
						<label htmlFor='username'>Username:</label>
						<br />
						<input
							{...register('username', { required: 'Username is Required' })}
							id='username'
							type='text'
						/>

					{errors.username && <p>{errors.username.message}</p>}
					</div>

					<div className='item email'>
						<label htmlFor='email'>Email:</label>
						<br />
						<input
							{...register('email', { required: 'Email is Required' })}
							id='email'
							type='email'
						/>
						{errors.email && <p>{errors.email.message}</p>}
					</div>

					<div className='item password'>
						<label htmlFor='password'>Password:</label>
						<br />
						<input
							{...register('password', {
								required: 'Password is Required',
								minLength: { value: 5, message: 'Must contain 5 characters' },
							})}
							type='password'
							id='password'
						/>
						{errors.password && <p>{errors.password.message}</p>}
					</div>

					<div className='item password2'>
						<label htmlFor='password2'>Confirm:</label>
						<br />
						<input
							type='password'
							{...register('password2', {
								required: 'Passwords must match',
								validate: {
									matchesPreviousPassword: (value) => {
										const { password } = getValues();
										return password === value || 'passwords must match';
									},
								},
							})}
						/> <br />
						{errors.password2 && errors.password2.message}
					</div>
					<div className='item btn'>
						<button>Submit</button>
					</div>
				</form>
			</section>

			<section className='right-col'>
				<div className='picture'>

                    <p>Hello World</p>
					<img
						src='https://images.pexels.com/photos/4141236/pexels-photo-4141236.png?auto=compress&cs=tinysrgb&dpr=1&w=500'
						alt=''
					/>
				</div>
			</section>
		</div>
	);
};

export default Form;
