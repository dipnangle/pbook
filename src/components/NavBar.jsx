import { changeLanguage } from 'i18next';
import React, {useState , useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

function NavBar(props) {
	// getting the theme
	const savedTheme = localStorage.getItem('theme');
	return (
		<>
		<header class="navbar w-screen">
			<nav class="flex justify-between">
				{/* Header Logo And Name */}
				<div class="flex items-center space-x-3 lg:pr-16 pr-6">
					<svg class="w-9 dark:fill-white fill-[#111C44]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><g><path d="M14.93 2.5v5.9c0 .44-.52.66-.84.37l-1.75-1.61a.496.496 0 0 0-.68 0l-1.75 1.6c-.32.3-.84.07-.84-.36V2.5c0-.28.22-.5.5-.5h4.86c.28 0 .5.22.5.5"/><path d="M16.98 2.059c-.29-.04-.55.21-.55.5v6.02c0 .76-.45 1.45-1.15 1.76-.7.3-1.51.17-2.07-.35l-.87-.8a.496.496 0 0 0-.68 0l-.87.8c-.36.34-.83.51-1.3.51a1.9 1.9 0 0 1-.77-.16c-.7-.31-1.15-1-1.15-1.76v-6.02c0-.29-.26-.54-.55-.5-2.8.35-4.02 2.24-4.02 4.94v10c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5v-10c0-2.7-1.22-4.59-4.02-4.94m.52 16.69H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8.5c.41 0 .75.34.75.75s-.34.75-.75.75m0-4h-4.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.25c.41 0 .75.34.75.75s-.34.75-.75.75"/></g></svg>
					<h2 class="font-normal text-2xl leading-6 text-gray-800 dark:text-white">Personal Network</h2>
				</div>
				<div class="flex space-x-5 justify-center items-center pl-2">
					<ul className="flex space-x-4">
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                        <li>
                            <Link to="Adduser">Add User</Link>
                        </li>
                    </ul>
					{/* toggle switch for the darka and light mode */}
					<button onClick={props.switch.toggleSwitch} className='p-2 border border-gray-300 dark:border-[#f4f4f5] rounded-full dark:hover:border-blue-500'>
						{savedTheme === 'light' ? 
						(<svg class="w-5 h-5 fill-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="M21.529 15.93c-.16-.27-.61-.69-1.73-.49-.62.11-1.25.16-1.88.13a8.4 8.4 0 0 1-5.91-2.82c-1.3-1.45-2.1-3.34-2.11-5.38 0-1.14.22-2.24.67-3.28.44-1.01.13-1.54-.09-1.76-.23-.23-.77-.55-1.83-.11-4.09 1.72-6.62 5.82-6.32 10.21.3 4.13 3.2 7.66 7.04 8.99a10 10 0 0 0 2.89.55c.16.01.32.02.48.02 3.35 0 6.49-1.58 8.47-4.27.67-.93.49-1.52.32-1.79"/></svg>) 
						:
						(<svg class="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0 3.96c-.55 0-1-.41-1-.96v-.08c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04m7.14-2.82c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 1 1 1.41-1.41l.13.13a.996.996 0 0 1-.7 1.7m-14.28 0c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.45.29-.7.29M22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1M2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1m16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.44.29-.7.29m-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.14a.996.996 0 1 1 1.41-1.41l.13.13c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3M12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04"/></svg>)
						}
					</button>
					<div class="relative">
						<select onChange={(e) => props.changeLanguage(e.target.value)} class="inputSelect">
							<option value="br">EN</option>
							<option value="ger">GER</option>
							<option value="fr">Fre</option>
							<option value="hindi">Hindi</option>
						</select>
					</div>
				</div>
			</nav>
		</header>
		</>
	)
}

export default NavBar