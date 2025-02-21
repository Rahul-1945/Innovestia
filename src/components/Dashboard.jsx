import React, { useState } from 'react';

const Dashboard = () => {
    const [startupDetails, setStartupDetails] = useState({
        name: '',
        description: '',
        industry: '',
        fundingNeeds: '',
        pitchDeck: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStartupDetails({
            ...startupDetails,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Submitted Startup Details:', startupDetails);
    };

    return (
        <div className="dashboard">
            <h1>Entrepreneur Dashboard</h1>

            <section className="submit-startup-details">
                <h2>Submit Startup Details</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={startupDetails.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea name="description" value={startupDetails.description} onChange={handleChange}></textarea>
                    </div>
                    <div>
                        <label>Industry:</label>
                        <input type="text" name="industry" value={startupDetails.industry} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Funding Needs:</label>
                        <input type="text" name="fundingNeeds" value={startupDetails.fundingNeeds} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Pitch Deck:</label>
                        <input type="file" name="pitchDeck" onChange={handleChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>

            <section className="view-matches">
                <h2>View Matches</h2>
                {/* Replace with dynamic content */}
                <div className="investor-card">
                    <p>Investor Name</p>
                    <p>Compatibility Score: 85%</p>
                    <button>View Profile</button>
                </div>
            </section>

            <section className="generate-business-plan">
                <h2>Access AI-Generated Business Plans</h2>
                <button>Generate Business Plan</button>
                <a href="#" download>Download Business Plan</a>
            </section>

            <section className="pitch-evaluation-feedback">
                <h2>Pitch Evaluation Feedback</h2>
                {/* Replace with dynamic content */}
                <p>Feasibility: High</p>
                <p>Market Potential: Strong</p>
                <button>View Full Feedback</button>
            </section>
        </div>
    );
};

export default Dashboard;