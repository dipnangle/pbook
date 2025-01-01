import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import React from 'react'
import { useTranslation } from 'react-i18next'
import NavBar from './components/navbar'
import AddUser from './components/AddUser'
import ContactList from './components/ContactList'
import Page_404 from './components/Page_404'
import './Tailwind.css'
import './i18n'

function App() {

	const {l, i18n } = useTranslation();
	const [theme, setTheme] = useState('light')

	// storing data for dark and light mode
	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		if(storedTheme){
			setTheme(storedTheme);
			document.documentElement.classList.add(storedTheme)
		}
	}, []);

	// defining toggele switch for dark and light theme
	const toggleSwitch = () =>{
		const newTheme = (theme === "light") ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	
	return (
		<BrowserRouter>
			<div className={`App ${theme}`}>
				<NavBar switch={{toggleSwitch}} l={l} changeLanguage={changeLanguage}/>
				<div class="bg">
					<Routes>
						<Route path='/' element={<ContactList />}/>
						<Route path='AddUser' element={<AddUser />}/>
						<Route path="*" element={<Page_404 />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
