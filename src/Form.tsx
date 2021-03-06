import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Success from './Success';
import Modal from 'react-modal';
const Form = () => {
	const [formStep, setFormStep] = useState(0);
	const completeFormStep = () => {
		setFormStep((cur) => cur + 1);
	};
	const [isModalOpen, setIsModalOpen] = useState(false);
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors, isValid },
		reset,
	} = useForm({ mode: 'all' });
	const onSubmit = () => {
		reset(
			{},
			{
				keepValues: false,
			}
		);
	};

	return (
		<div className='full-container'>
			{formStep === 0 && (
				<section className='left-col' style={{ background: 'rgb(255,40,0)' }}>
					<h1>
						Enter to not win a <br /> Ferrari
					</h1>
					<form onSubmit={handleSubmit(onSubmit)} className='form'>
						<div className='item username'>
							<label htmlFor='username'>Username:</label>
							<br />
							<input
								{...register('username', { required: 'Username is Required', minLength: {value: 3, message: 'Must be 3 characters'} })}
								id='username'
								type='text'
							/>

							{errors.username && <p>{errors.username.message}</p>}
						</div>

						<div className='item email'>
							<label htmlFor='email'>Email:</label>
							<br />
							<input
								{...register('email', {
									pattern: {
										value:
											/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
										message: 'Please enter a valid email',
									},
									required: 'Email is Required',
								})}
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
							/>{' '}
							<br />
							{errors.password2 && errors.password2.message}
						</div>
						<div className='item btn'>
							<button
								disabled={!isValid}
								type='submit'
								onClick={() => {
									completeFormStep();
									setIsModalOpen(true);
									onSubmit();
								}}>
								Submit
							</button>
						</div>
					</form>
				</section>
			)}

			{formStep === 0 && (
				<section className='right-col'>
					<div className='picture'>
						<p>Hello World</p>
						<img
							src='https://images.pexels.com/photos/4141236/pexels-photo-4141236.png?auto=compress&cs=tinysrgb&dpr=1&w=500'
							alt=''
						/>
						<p className='disclaimer'>
							Disclaimer: This is fake you will win nothing, zip, nada
						</p>
					</div>
				</section>
			)}

			{formStep === 1 && (
				<div id='modal'>
					<Modal
						style={{
							overlay: {
								backgroundColor: 'rgb(255,40,0)',
							},
							content: {
								top: '50%',
								left: '50%',
								right: 'auto',
								bottom: 'auto',
								marginRight: '-50%',
								transform: 'translate(-50%, -50%)',
								backgroundColor: 'rgba(0,0,0, 0.95)',
								border: '8px ridge yellow',
								borderRadius: '50px',
								overflow: 'hidden'
							},
						}}
						isOpen={isModalOpen}>
						<Success />
						<button
							className='modal-btn'
							onClick={() => {
								setFormStep(0);
							}}>
							X
						</button>
					</Modal>
				</div>
			)}
		</div>
	);
};

export default Form;
