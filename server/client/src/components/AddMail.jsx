import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";

export default function AddMail() {
    const [email, setEmail] = useState('');
    const [emailList, setEmailList] = useState([]);
    const [linkSended, setLinkSended] = useState(false);

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleAddEmail = async (e) => {
        e.preventDefault();

        let authUser = localStorage.getItem('authUser');
        console.log(authUser);

        // let response = await fetch(`https://forms-flow-api.vercel.app/api/mail/addmail/`, {
        let response = await fetch(`http://localhost:3000/api/mail/addmail/`, {
        // let response = await fetch(`${process.env.BASE_LINK}/mail/addmail/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ Email: email, authUser }),
        });
        const result = await response.json();
        if (response.ok) {
            toast.success("Link sent");
            setLinkSended(true);
        } else {
            toast.error(result.message)
            console.log(result);
        }
    };

    const addAnothermail = () => {
        setLinkSended(false)
        setEmail('')
    }

    return (
        <>
            {!linkSended ? (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="w-[80%] max-w-lg bg-white rounded-lg p-8">
                        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add a New Email</h2>

                        <form onSubmit={handleAddEmail} className="space-y-6">
                            <div>
                                <label htmlFor="emailInput" className="block text-lg font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    id="emailInput"
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Enter email address"
                                    className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white text-lg font-semibold p-3 rounded-lg hover:bg-blue-700 transition duration-200"
                            >
                                Add Email
                            </button>
                        </form>

                        {emailList.length > 0 && (
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-gray-700 mb-4">Email List</h3>
                                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                                    {emailList.map((email, index) => (
                                        <li key={index}>{email}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <p className="mt-8 text-center text-gray-500 text-sm">
                            By adding an email, you agree to our{' '}
                            <a href="#" className="text-blue-500 hover:underline">
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-blue-500 hover:underline">
                                Privacy Policy
                            </a>.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <div className="flex flex-col items-center bg-white rounded-lg p-8">
                        <div className="bg-green-500 h-16 w-16 flex justify-center items-center text-white rounded-full text-4xl mb-4">✓</div>
                        <p className="text-center text-lg text-gray-700">
                            A link has been sent to the {email} address. Please follow the link to verify your email.
                        </p>
                        <p onClick={addAnothermail} className='text-blue-500 m-5 text-lg cursor-pointer'>+ Add Another Mail</p>
                    </div>
                </div>
            )}
        </>
    );
}
