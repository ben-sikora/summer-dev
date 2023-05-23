/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import validator from "validator";
import DOMPurify from "dompurify";

function LoginPage({ setAuthenticated, onFormSwitch }) {
	const [email, getEmail] = useState("");
	const [password, getPass] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validator.isEmail(email)) {
			alert("Invalid Email Address");
			return;
		}

		const sanitizedEmail = DOMPurify.sanitize(email);
		const sanitizedPassword = DOMPurify.sanitize(password);

		fetch("http://localhost:3000/loginPage", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: sanitizedEmail,
				password: sanitizedPassword,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setAuthenticated(data.authenticated);
			})
			.catch((err) => console.log(err));
		//.then(responseData=>{setauthenticated(responseData.authenticated);}).catch(err => console.log(err))
	};
	return (
		<>
			<div className="flex flex-col w-[270px] items-center">
				<form
					className="w-[100%] flex flex-col items-center p-[5px] bg-grey rounded-md"
					onSubmit={handleSubmit}
				>
					<label className="p-[3px] text-purple" htmlFor="email">
						Email
					</label>
					<input
						className="p-[3px]"
						value={email}
						onChange={(e) => getEmail(e.target.value)}
						type="email"
						placeholder="youremail@email.com"
						id="email"
						name="email"
						required
					/>
					<label className="p-[3px] text-purple" htmlFor="password">
						Password
					</label>
					<input
						className="p-[3px]"
						value={password}
						onChange={(e) => getPass(e.target.value)}
						type="password"
						placeholder="*******"
						id="password"
						name="password"
						required
					/>
					<button
						className="p-[3px] mt-[3px] bg-darkgrey text-purple rounded-md"
						type="submit"
					>
						Log In
					</button>
				</form>
				<button
					className="text-purple p-[3px] mt-[3px] bg-grey rounded-md"
					onClick={() => onFormSwitch("Register")}
				>
					New to Summer? Register here.
				</button>
			</div>
		</>
	);
}

export default LoginPage;
