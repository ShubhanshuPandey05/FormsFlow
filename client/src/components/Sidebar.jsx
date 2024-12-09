// src/components/Sidebar.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setSelectedForm, selectedForm }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState('');
    const [mail, setMail] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [formList, setFormList] = useState([]);
    const [formName, setFormName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const storedUser = localStorage.getItem("authUser")
                const parsedUser = JSON.parse(storedUser);
                const response = await fetch(`https://forms-flow-api.vercel.app/api/mail/getmail`, {
                // const response = await fetch(`http://localhost:3000/api/mail/getmail`, {
                    // const response = await fetch(`${process.env.BASE_LINK}/mail/getmail`, {

                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: "include",
                    body: JSON.stringify({ email: parsedUser.Email })
                })
                const response2 = await fetch(`https://forms-flow-api.vercel.app/api/form/getform`, {
                // const response2 = await fetch(`http://localhost:3000/api/form/getform`, {
                    // const response2 = await fetch(`${process.env.BASE_LINK}/api/form/getform`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: "include",
                    body: JSON.stringify({ email: selectedEmail })
                })
                if (!response.ok) {
                    toast.error('Failed to fetch mails');
                }

                const data = await response.json();
                setMail(data.Mails);
                const data2 = await response2.json();
                console.log(data2.Forms);

                // Extracting just the names of the forms and setting them to formList
                const formNames = data2.Forms.map(form => form.Name);
                setFormList(formNames);



            } catch (error) {

            }
        }

        getData()
    }, [selectedEmail]);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleEmailChange = (e) => {
        setSelectedEmail(e.target.value);
        if (e.target.value === 'Add a Mail') {
            navigate('/add-mail')
        }
    };

    const handleCreateFormToggle = () => {
        setShowCreateForm(!showCreateForm);
    };

    const handleFormSelection = (form) => {
        if (form == selectedForm) {
            console.log("hiii");
            
            setSelectedForm('');
            return
        }
        console.log("hello");
        
        setSelectedForm(form);
    };

    const handleFormNameChange = (e) => {
        setFormName(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (formName.trim() === '') return;
        const response = await fetch('https://forms-flow-api.vercel.app/api/form/addform', {
        // const response = await fetch('http://localhost:3000/api/form/addform', {
            // const response = await fetch(`${process.env.BASE_LINK}/form/addform`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify({ Name: formName, email: selectedEmail })
        })
        if (response.ok) {
            const result = response.json();
            console.log(result);
            setFormList([...formList, formName]);
            setFormName('');
            setShowCreateForm(false);
        }
        else {
            console.log("kaise ho app");

        }

    };

    return (
        <div className="absolute h-full">
            {/* Hamburger Icon */}
            <button
                onClick={handleToggle}
                className="p-3 text-gray-500 bg-secondary rounded-md focus:outline-none"
                aria-label="Toggle sidebar"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            {/* Sidebar Dropdown with Animation */}
            <div
                className={`fixed top-0 left-0 w-72 px-3 h-screen bg-gray-100 z-40 text-black shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                style={{ transition: 'transform 0.3s ease' }}
            >
                {/* Close Icon Positioned on the Right */}
                <button
                    onClick={handleToggle}
                    className="absolute top-20 right-3 text-gray-500 p-2 rounded-md focus:outline-none"
                    aria-label="Close sidebar"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <h2 className="text-2xl font-bold mt-[70px] p-4">Get Started</h2>

                <div className="p-4">
                    <label htmlFor="emailSelect" className="block text-lg font-semibold mb-2">Select Email ID:</label>
                    <select
                        id="emailSelect"
                        className="w-full p-2 text-black rounded-lg"
                        value={selectedEmail}
                        onChange={handleEmailChange}
                    >
                        <option value="" disabled>Select an email</option>
                        {mail.map((email, index) => (
                            <option key={index} value={email}>{email}</option>
                        ))}
                        <option value="Add a Mail">+ Add an Email</option>
                    </select>
                </div>

                <hr />

                {/* Forms Section with Plus Icon */}
                <div className="p-4 flex items-center justify-between">
                    <h1 className="text-black font-bold text-2xl">Forms</h1>
                    <button
                        onClick={handleCreateFormToggle}
                        className="text-gray-500 p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                        aria-label="Add form"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                    </button>
                </div>

                {/* Form Creation Input */}
                {showCreateForm && (
                    <div className="p-4">
                        <form onSubmit={handleFormSubmit} className="flex flex-col space-y-2">
                            <label htmlFor="formName" className="text-lg font-semibold">Form Name</label>
                            <input
                                id="formName"
                                type="text"
                                className="p-2 border border-gray-300 rounded-lg"
                                placeholder="Enter form name"
                                value={formName}
                                onChange={handleFormNameChange}
                            />
                            <button type="submit" className="p-2 bg-blue-600 text-white rounded-lg">Create Form</button>
                        </form>
                    </div>
                )}

                {/* List of Created Forms */}
                <div className="p-4">
                    <h2 className="text-lg font-semibold">Your Forms</h2>
                    <ul className="list-disc ml-5 mt-2">
                        {formList.map((form, index) => (
                            <button key={index} onClick={() => handleFormSelection(form)} className={`block text-left w-full py-2 px-4 hover:bg-gray-200 ${selectedForm == form ? `bg-gray-200`:''}`}>
                                {form}
                            </button>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;