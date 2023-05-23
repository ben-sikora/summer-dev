import React, { useState, useEffect, useRef } from "react";

const UserIcon = ({ onLogout }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleLogoutClick = () => {
		setIsOpen(false);
		onLogout(); // Call the log out function from the prop
	};

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		const handleEscapeKey = (event) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};

		document.addEventListener("click", handleOutsideClick);
		document.addEventListener("keydown", handleEscapeKey);

		return () => {
			document.removeEventListener("click", handleOutsideClick);
			document.removeEventListener("keydown", handleEscapeKey);
		};
	}, []);

	return (
		<div className="relative inline-block mr-4 mt-2" ref={dropdownRef}>
			{/* User icon imported from the "assets" library */}
			<img
				src="src/assets/user-3296.png"
				alt="User Icon"
				width="50"
				height="50"
				onClick={toggleDropdown}
			/>
			{isOpen && (
				<div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg">
					<a href="" className="block py-2 px-4 hover:bg-gray-100 rounded-md">
						Profile
					</a>
					<a href="" className="block py-2 px-4 hover:bg-gray-100 rounded-md" onClick={handleLogoutClick}>
						Log Out
					</a>
				</div>
			)}
		</div>
	);
};

export default UserIcon;
