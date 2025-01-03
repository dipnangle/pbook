import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const ContactList = () => {
	const { t } = useTranslation()
	const data = 
	[
		{ id: 1, name: 'John Doe', phonenumber: '9875865412',email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', address:'address2' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', address:'address3' },
	]

	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		fetch('http://192.168.1.250:5001/api/contacts')
			.then((res) => {
				if (!res.ok) {
					// Handle HTTP errors
					throw new Error(`HTTP error! Status: ${res.status}`);
				}
				return res.json();
			})
			.then((data) => {
				console.log('Fetched contacts:', data);
				setContacts(data);
			})
			.catch((error) => {
				console.error('Fetch error:', error.message);
				// Optionally set an error state here
			});
	}, []);

	return (
		<>
			<div className='content'>
				<div className="mx-8 mt-4 mb-8 w-full">
					<h4 className='heading'>{t('contactlist')}</h4>
					<table className='border-collapse border border-gray-400 w-full'>
						<thead class="border border-gray-400 tableheading rounded-lg">
							<tr>
								<th className="w-1">ID</th>
								<th className="w-11">Name</th>
								<th className="w-1">Country Code</th>
								<th className="w-10">Phone Number</th>
								<th className="w-4">Email</th>
								<th className="w-1/3">Address</th>
							</tr>
						</thead>
						<tbody>
							{contacts.map((item) => (
								<tr>
									<td className="border border-gray-400 px-4 py-2">{item.id || "-"}</td>
									<td className="border border-gray-400 px-4 py-2">{item.full_name || "-"}</td>
									<td className="border border-gray-400 px-4 py-2">{item.contrycode || "-"}</td>
									<td className="border border-gray-400 px-4 py-2">{item.phoneNumber || "-"}</td>
									<td className="border border-gray-400 px-4 py-2">{item.email || "-"}</td>
									<td className="border border-gray-400 px-4 py-2">{item.address || "-"}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default ContactList