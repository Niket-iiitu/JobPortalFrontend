import React, { useState } from "react";

import "./JobAdd.css";

function JobAdd() {
  const MIN_DAYS_BEFORE_LAST_DATE = 1;

  const [formData, setFormData] = useState({
    companyName: "",
    location: "",
    experience: 0,
    jobTitle: "",
    skillsRequired: "",
    position: "",
    salary: 100000,
    lastDate: "",
  });

  // Destructure formData for easier access
  const {
    companyName,
    location,
    experience,
    jobTitle,
    skillsRequired,
    position,
    salary,
    lastDate,
  } = formData;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "lastDate") {
      if (value === "") {
        alert("Please select a date.");
        return;
      } else {
        const selectedDate = new Date(value);
        const minDate = new Date();
        minDate.setDate(minDate.getDate() + MIN_DAYS_BEFORE_LAST_DATE);
        console.log(selectedDate);
        console.log(minDate);
        if (selectedDate.getDate() < minDate.getDate()) {
          alert("Please select a date at least 1 day in the future.");
          return;
        }
      }
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here, e.g., sending data to backend
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      companyName: "",
      location: "",
      experience: 0,
      jobTitle: "",
      skillsRequired: "",
      position: "",
      salary: 100000,
      lastDate: "",
    });
  };

  return (
    <div className="jobAdd">
      <div className="job-listing-form">
        <h2>Job Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="experience">Experience (In Years):</label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={experience}
              onChange={handleChange}
              min="0"
              step="1"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title:</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={jobTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              name="position"
              value={position}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="skillsRequired">Skills Required:</label>
            <input
              type="text"
              id="skillsRequired"
              name="skillsRequired"
              value={skillsRequired}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary (Annual):</label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={salary}
              onChange={handleChange}
              min="100000"
              step="1"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastDate">Last Date to Apply:</label>
            <input
              type="date"
              id="lastDate"
              name="lastDate"
              value={lastDate}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default JobAdd;
