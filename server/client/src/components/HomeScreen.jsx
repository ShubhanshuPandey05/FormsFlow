import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import { useLoading } from '../context/LoadingContext';

const HomeScreen = () => {
    const [selectedForm, setSelectedForm] = useState('');
    const [formSubmissions, setFormSubmissions] = useState([]);
    const [totalSubmissions, setTotalSubmissions] = useState(0);
    const [submissionLink, setSubmissionLink] = useState('');
    const { showLoading, hideLoading } = useLoading();


    // Export to Excel
    const exportToExcel = (data, fileName = "data.xlsx") => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Submissions");
        XLSX.writeFile(workbook, fileName);
    };

    // Export to PDF
    const exportToPDF = (data, fileName = "data.pdf") => {
        const doc = new jsPDF();
        let y = 10; // Start position for rows
        data.forEach((row, index) => {
            const rowText = Object.values(row).join(", ");
            doc.text(rowText, 10, y);
            y += 10;
        });
        doc.save(fileName);
    };

    // Export to Text File
    const exportToText = (data, fileName = "data.txt") => {
        const textContent = data.map((row) => Object.values(row).join(", ")).join("\n");
        const blob = new Blob([textContent], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
    };

    useEffect(() => {
        // Fetch submissions for the selected form when a form is selected
        if (selectedForm) {
            const fetchSubmissions = async () => {
                try {
                    showLoading();
                    // const response = await fetch(`https://forms-flow-api.vercel.app/api/form/getformdata/${selectedForm}`, {
                    const response = await fetch(`/api/form/getformdata/${selectedForm}`, {
                    // const response = await fetch(`http://localhost:3000/api/form/getformdata/${selectedForm}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        credentials: 'include'
                    });
                    const data = await response.json();
                    setFormSubmissions(data.mailData);
                    setTotalSubmissions(data.totalSubmission);
                    setSubmissionLink(data.submissionLink);
                } catch (error) {
                    console.error("Error fetching submissions:", error);
                }
                hideLoading();
            };
            fetchSubmissions();
        }
    }, [selectedForm]);

    return (
        <div className="flex bg-secondary">
            <Sidebar setSelectedForm={setSelectedForm} selectedForm={selectedForm} />
            <div className="flex-1 md:p-10">
                <div className="container mx-auto py-20">
                    <h1 className="text-4xl font-bold text-center">Get Started with FormsFlow</h1>
                    <p className="mt-4 text-lg text-center text-gray-600">
                        Start by selecting your preferred email ID and creating a form.
                    </p>

                    {/* Form Link Section */}

                    <div className="mt-10 flex justify-center">
                        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-fit">
                            <h2 className="text-2xl font-semibold mb-4 text-white">Html Form</h2>
                            <div className="rounded-lg h-72 overflow-auto w-[80vw] md:w-fit">
                                <pre className="whitespace-pre-wrap bg-gray-900">
                                    {`<form action="`}<span className='text-yellow-300'>{submissionLink ? submissionLink : "FormsFlow Link"}</span>{`" method="`}<span className='text-yellow-300'>post</span>{`">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" required />

    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required />

    <button type="submit">Submit</button>
</form>`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Dynamically show/hide "Why Choose Us" section */}
                    {!selectedForm && (
                        <div className="mt-10 text-center">
                            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
                            <p className="mt-4 text-gray-600">
                                FormsFlow provides a seamless experience for managing forms and submissions.
                            </p>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-xl font-semibold text-blue-600">User -Friendly</h3>
                                    <p className="mt-2 text-gray-600">Intuitive interface for easy navigation.</p>
                                </div>
                                <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-xl font-semibold text-blue-600">Customizable</h3>
                                    <p className="mt-2 text-gray-600">Tailor forms to meet your specific needs.</p>
                                </div>
                                <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <h3 className="text-xl font-semibold text-blue-600">Secure</h3>
                                    <p className="mt-2 text-gray-600">Your data is safe with our robust security measures.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Show Submissions for the selected form */}
                    {selectedForm && (
                        <div className="mt-10 text-center">
                            <h2 className="text-3xl font-bold">All Submissions</h2>
                            <p className="mt-4 text-lg">Total Submissions: {totalSubmissions}</p>
                            <div className="mt-6 overflow-auto w-[92vw] md:w-full m-auto">
                                {formSubmissions.length > 0 ? (
                                    <>
                                        <div className="p-6 border rounded-lg shadow-md overflow-auto">
                                            <table className="mt-4 w-full border-collapse border border-gray-200">
                                                <thead>
                                                    <tr>
                                                        {Object.keys(formSubmissions[0]).map((key) => (
                                                            <th
                                                                key={key}
                                                                className="border border-gray-300 px-4 py-2 text-left"
                                                            >
                                                                {key}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {formSubmissions.map((submission, index) => (
                                                        <tr key={index}>
                                                            {Object.values(submission).map((value, i) => (
                                                                <td
                                                                    key={i}
                                                                    className="border border-gray-300 px-4 py-2 text-left"
                                                                >
                                                                    {value}
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* Export Buttons */}
                                        <div className="mt-6 flex justify-center gap-4">
                                            <button
                                                onClick={() => exportToExcel(formSubmissions)}
                                                className="px-3 py-1 text-sm md:text-base md:px-4 md:py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                            >
                                                Export to Excel
                                            </button>
                                            <button
                                                onClick={() => exportToPDF(formSubmissions)}
                                                className="px-3 py-1 text-sm md:text-base md:px-4 md:py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                            >
                                                Export to PDF
                                            </button>
                                            <button
                                                onClick={() => exportToText(formSubmissions)}
                                                className="px-3 py-1 text-sm md:text-base md:px-4 md:py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                            >
                                                Export to Text
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <p className="mt-4 text-lg">No submissions yet.</p>
                                )}
                            </div>
                        </div>
                    )}



                </div>
            </div>
        </div>
    );
};

export default HomeScreen;
