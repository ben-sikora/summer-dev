// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import validator from "validator";

function Register({ onFormSwitch }) {
	const navigate = useNavigate(); //all of the defining varibles and such
	const [email, setEmail] = useState("");
	const [password, setPass] = useState("");
	const [name, setName] = useState("");
	const [passwordConfirmation, setPassConfirmation] = useState("");
	const [passwordConfirmError, setPasswordConfirmError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [nameError, setNameError] = useState("");
	const [userRegistered, setUserRegistered] = useState(false);

	const handleSubmit = async (e) => {
		//submitting register form
		e.preventDefault();

		if (password !== passwordConfirmation) {
			//sanitization and verification
			setPasswordConfirmError("Passwords do not match");
			return;
		}

		if (password.length < 8) {
			setPasswordError("Password must be at least 8 characters long");
			return;
		}

		if (!validator.isEmail(email)) {
			setEmailError("Invalid email address");
			return;
		}

		if (validator.isEmpty(name)) {
			setNameError("Name is required");
			return;
		}

		const sanitizedData = {
			//make sure there is no SQL injections
			name: DOMPurify.sanitize(name),
			email: DOMPurify.sanitize(email),
			password: DOMPurify.sanitize(password),
		};
		const response = await fetch("http://localhost:3000/register", {
			//post method
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(sanitizedData),
		}).then((res) => res.json());
		if (response.message === "User registered successfully") {
			setUserRegistered(true);
		}
	};

	if (userRegistered) {
		//button to send them back to login
		return (
			<>
				<p className="text-grey">
					Registration successful! Click the below to go to login page.
				</p>
				<button
					className="text-purple p-[3px] mt-[3px] bg-grey rounded-md"
					onClick={() => onFormSwitch("LoginPage")}
				>
					Go to Login
				</button>
			</>
		);
	}

	return (
		//all of the forms with errors typed in as the errors
		<>
			<div className="flex flex-col w-[270px] items-center">
				<form
					className="w-[100%] flex flex-col items-center p-[5px] bg-grey rounded-md"
					onSubmit={handleSubmit}
				>
					<label className="p-[3px] text-purple" htmlFor="name">
						Name
					</label>
					<input
						className={`p-[3px] ${nameError ? "border border-red-500" : ""}`}
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Johnny Appleseed"
						id="name"
						name="name"
						required
					/>
					{nameError && <small className="text-red-500">{nameError}</small>}
					<label className="p-[3px] text-purple" htmlFor="email">
						Email
					</label>
					<input
						className={`p-[3px] ${emailError ? "border border-red-500" : ""}`}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="youremail@email.com"
						id="email"
						name="email"
						required
					/>
					{emailError && <small className="text-red-500">{emailError}</small>}
					<label className="p-[3px] text-purple" htmlFor="password">
						Password
					</label>
					<input
						className={`p-[3px] ${
							passwordError ? "border border-red-500" : ""
						}`}
						value={password}
						onChange={(e) => {
							setPass(e.target.value);
							setPasswordError("");
						}}
						type="password"
						placeholder="*******"
						id="password"
						name="password"
						required
					/>
					{passwordError && (
						<small className="text-red-500">{passwordError}</small>
					)}
					<label className="p-[3px] text-purple" htmlFor="passwordConfirmation">
						Confirm Password
					</label>
					<input
						className={`p-[3px] ${
							passwordConfirmError ? "border border-red-500" : ""
						}`}
						value={passwordConfirmation}
						onChange={(e) => {
							setPassConfirmation(e.target.value);
							setPasswordConfirmError("");
						}}
						type="password"
						placeholder="*******"
						id="passwordConfirmation"
						name="passwordConfirmation"
						required
					/>
					{passwordConfirmError && (
						<small className="text-red-500">{passwordConfirmError}</small>
					)}
					<button
						className="p-[3px] mt-[3px] bg-darkgrey text-purple rounded-md"
						type="submit"
					>
						Register
					</button>
				</form>
				<button
					className="text-purple p-[3px] mt-[3px] bg-grey rounded-md"
					onClick={() => onFormSwitch("LoginPage")}
				>
					Already have an account? Login Here
				</button>
			</div>
		</>
	);
}
export default Register;
