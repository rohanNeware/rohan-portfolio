import React from 'react';

const Projects = () => {
    return (
        <section id="Projects" className="py-12 bg-[#f6f3fc]">
            <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-6 shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#2a1454] hover:text-white">
                    <h3 className="text-2xl font-semibold">E commerce</h3>
                    <p className="mt-2">
                        Project was about hardware wholeseller and retailers selling and deliver all product in Australia.
                        In an e-commerce project, I handled UI development with Chakra UI in React.JS, managed
                        codebase via GitHub’s CI/CD pipeline with AWS, and used Netlify for staging.
                        Building custom components and integrating new functionality for the FE build process.
                    </p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#2a1454] hover:text-white">
                    <h3 className="text-2xl font-semibold">Main-Street</h3>
                    <p className="mt-2">Online registration is now available at all MainStreet and KidsStreet clinics.
                        Learn more about our contactless registration process.
                        We suggest you register online as early as possible to increase your chances of being
                        seen at our clinic today. Our online registration opens 30 minutes before the clinic opens.</p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#2a1454] hover:text-white">
                    <h3 className="text-2xl font-semibold">Vendor-Registration Portal</h3>
                    <p className="mt-2">Vendor management is a term that describes the processes organizations
                        use to manage their suppliers, who are also known as vendors.
                        Vendor management includes activities such as selecting vendors, negotiating contracts,
                        controlling costs, reducing vendor-related risks and ensuring service delivery</p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#2a1454] hover:text-white">
                    <h3 className="text-2xl font-semibold">Multi-Step Form</h3>
                    <p className="mt-2">While you can use a form to collect data in Power Pages sites,
                        a multistep form allows you to create a form with multiple steps.
                        Use a multistep form when you want to collect user input through multiple forms that use different components.</p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#2a1454] hover:text-white">
                    <h3 className="text-2xl font-semibold">To-do List App</h3>
                    <p className="mt-2">A TODO is written to tell future maintainers about something important: something that should be added,
                         or should be changed, or should not be forgotten.
                         The intention is often to increase the quality of the code. Sometimes a TODO comment can save you a lot of time!</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
