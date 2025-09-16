import React from "react";
import "./Staff.css";

const staffData = [
  { name: "Mr. Nirpendra Kumar", designation: "Asstt. Technical Officer" },
  { name: "Mr. Rajesh Kumar", designation: "Asstt. Technical Officer" },
  { name: "Mr. Rajiv Kumar Singh", designation: "Asstt. Technical Officer" },
  { name: "Mr. Roop Kishore", designation: "Asstt. Technical Officer" },
  { name: "Ms. Amita Rawat", designation: "Asstt. Technical Officer" },
  { name: "Mr. Vikash Gupta", designation: "Asstt. Technical Officer" },
  { name: "Mr. Sanjiv Verma", designation: "Asstt. Technical Officer" },
];

const Staff = () => {
  return (
    <div className="staff-container">
      <h2 className="staff-title">Staff Members</h2>
      <div className="staff-grid">
        {staffData.map((staff, index) => (
          <div className="staff-card" key={index}>
            <div className="staff-info">
              <h3 className="staff-name">{staff.name}</h3>
              <p className="staff-designation">{staff.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
