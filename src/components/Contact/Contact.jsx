import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <section id="Contact" className="bg-[#f6f3fc] py-10">
            <div className="container mx-auto px-4 md:px-0 overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8">
                 
                    <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-95 hover:shadow-xl hover:bg-[#2a1454] hover:text-white mx-4 my-4">
                        <h3 className="text-2xl font-bold mb-4 text-blue-500 hover:text-white">Get in Touch</h3>
                        <p className="text-lg">
                            I would love to hear from you! Whether you have a question, a project to discuss, or just want to connect, feel free to reach out using the contact details on the right.
                        </p>
                    </div>
                    
                    <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-95 hover:shadow-xl hover:bg-[#2a1454] hover:text-white group mx-4 my-4">
                        <h3 className="text-2xl font-bold mb-4 text-blue-500 group-hover:text-white">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-envelope text-blue-500 text-xl"></i>
                                <a href="mailto:rohannewarw@gmail.com" className="text-lg text-gray-700 group-hover:text-white">rohannewarw@gmail.com</a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-phone-alt text-blue-500 text-xl"></i>
                                <p className="text-lg text-gray-700 group-hover:text-white">+91 9284301287</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-map-marker-alt text-blue-500 text-xl"></i>
                                <p className="text-lg text-gray-700 group-hover:text-white">Nagpur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
