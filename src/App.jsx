import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Dropbox from "./components/dropbox";
import Title from "./components/Title";
import Logo from "./components/Logo";
import Login from "./components/Login";
import WhiteGrad from "./components/WhiteGrad";
import SunGrad from "./components/SunGrad";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import UserIcon from "./components/UserIcon";

function App() {
	const [authenticated, setAuthenticated] = useState(
		localStorage.getItem("authenticated") === "true"
	);
	const [currentForm, setCurrentForm] = useState("LoginPage");

	useEffect(() => {
		localStorage.setItem("authenticated", authenticated);
	}, [authenticated]);

	const toggleForm = (formName) => {
		setCurrentForm(formName);
	};

	function LoginFormWrapper({ currentForm, toggleForm, ...props }) {
		if (currentForm === "LoginPage") {
			return (
				<LoginPage
					setAuthenticated={setAuthenticated}
					onFormSwitch={toggleForm}
					{...props}
				/>
			);
		} else {
			return <Register onFormSwitch={toggleForm} />;
		}
	}

	return (
		<BrowserRouter>
			<div className="w-[100%] h-[100vh] bg-purple grid grid-cols-1 grid-rows-1 overflow-clip">
				<div className="row-start-1 row-end-2 col-start-1 col-end-2 z-20 w-[100%]">
					<div className="w-[100%] h-[150vh] flex flex-row">
						<Logo />
						<div className="flex-grow flex flex-col items-center">
							<Title />
							<Routes>
								{authenticated ? (
									<Route path="/" element={<Dropbox />} />
								) : (
									<>
										<Route
											path="/"
											element={
												<LoginFormWrapper
													currentForm={currentForm}
													toggleForm={toggleForm}
												/>
											}
										/>
										<Route
											path="/register"
											element={<Register onFormSwitch={toggleForm} />}
										/>
										<Route
											path="/login"
											element={<Navigate to="/LoginPage" replace />}
										/>
									</>
								)}
								<Route
									path="/LoginPage"
									element={
										<LoginFormWrapper
											currentForm={currentForm}
											toggleForm={toggleForm}
											setAuthenticated={setAuthenticated}
										/>
									}
								/>
							</Routes>
						</div>
						<UserIcon onLogout={() => setAuthenticated(false)} />
					</div>
				</div>
				<WhiteGrad />
				<SunGrad />
			</div>
		</BrowserRouter>
	);
}

export default App;
