import React from "react";
import "./Contact.css";

const contactData = [
  {
    department: "Office of Vice Chancellor",
    officer: "Prof. (Dr.) Mahesh Verma",
    designation: "Vice Chancellor",
    phone: "+91-11-25302104, 25302105 | Fax: +91-11-28035243",
    email: "vc@ipu.ac.in",
  },
  {
    department: "University School of Studies",
    officer: "",
    designation: "Dean",
    phone: "",
    email: "",
  },
  {
    department: "Office of Registrar",
    officer: "Dr. Kamal Pathak",
    designation: "Registrar",
    phone: "+91-11-25302113, 25302114 | Fax: +91-11-25302111",
    email: "registrar@ipu.ac.in",
  },
  {
    department: "Finance & Accounts Branch",
    officer: "Sh. Narendra Tyagi",
    designation: "Controller of Finance",
    phone: "+91-11-25302197",
    email: "cof@ipu.ac.in",
  },
  {
    department: "Examinations Branch",
    officer: "Dr. Gulshan Kumar",
    designation: "COE 1",
    phone: "+91-11-25302252 | Fax: +91-11-25302248",
    email: "coe@ipu.ac.in",
  },
  {
    department: "Examinations Branch",
    officer: "Dr. S. L. Bhandarkar",
    designation: "COE 2",
    phone: "+91-11-25302263",
    email: "coe@ipu.ac.in",
  },
  {
    department: "Centralized Career Guidance and Placement Cell",
    officer: "Prof. Udayan Ghose",
    designation: "Director",
    phone: "011-25302739",
    email: "cpc@ipu.ac.in, ccgpc.ggsipu@gmail.com",
  },
  {
    department: "University Information Resources Centre (Library)",
    officer: "Prof. Shruti Aggarwal",
    designation: "In-Charge",
    phone: "+91-11-25302218, 25302219, 25302221",
    email: "",
  },
  {
    department: "Centre of Excellence in Pharmaceutical Sciences (CEPS)",
    officer: "Prof. A. K. Narula",
    designation: "Director Incharge",
    phone: "+91-11-25302446",
    email: "ceps@ipu.ac.in",
  },
  {
    department: "University Centre for Disaster Management Studies",
    officer: "Prof. Amarjeet Kaur",
    designation: "Director",
    phone: "011-25302780, 011-25302782-83",
    email: "",
  },
  {
    department: "Academic Affairs",
    officer: "Prof. C. S. Rai",
    designation: "Director",
    phone: "+91-11-25302133",
    email: "director.acad@ipu.ac.in",
  },
  {
    department: "Development",
    officer: "Prof. A.K. Saini",
    designation: "Director",
    phone: "+91-11-25302119",
    email: "",
  },
  {
    department: "Research & Development Cell",
    officer: "Prof. Nimisha Sharma",
    designation: "Director Incharge",
    phone: "+91-11-25302121, 25302123 | Fax: +91-11-25302122",
    email: "drc@ipu.ac.in",
  },
  {
    department: "International Affairs",
    officer: "Prof. Vijita Singh Aggarwal",
    designation: "Director",
    phone: "+91-11-25302126, 2530125",
    email: "director.international@ipu.ac.in",
  },
  {
    department: "Students' Welfare",
    officer: "Prof. Manpreet Kaur Kang",
    designation: "Director",
    phone: "+91-11-25302800, 25302801",
    email: "dsw@ipu.ac.in",
  },
  {
    department: "Indraprastha University Industry Interaction Cell",
    officer: "Prof. A K Saini",
    designation: "Director",
    phone: "",
    email: "director.iic@ipu.ac.in",
  },
  {
    department: "Office of Proctor",
    officer: "Prof. Anup Singh Beniwal",
    designation: "Proctor",
    phone: "+91-11-25302998",
    email: "proctor@ipu.ac.in",
  },
  {
    department: "Legal Aid",
    officer: "Prof. (Dr.) Lisa P Lukose",
    designation: "Director",
    phone: "",
    email: "",
  },
  {
    department: "University Works Division",
    officer: "Sh. Shailesh",
    designation: "S.E.",
    phone: "+91-11-25302288, 25302289 | Fax: +91-11-25302290",
    email: "Se.uwd@ipu.ac.in",
  },
  {
    department: "Office of Chief Vigilance Officer (CVO)",
    officer: "Dr. Kamal Pathak",
    designation: "CVO",
    phone: "+91-11-25302190",
    email: "cvo@ipu.ac.in",
  },
  {
    department: "IIQAC & NAAC",
    officer: "Prof. A. K. Saini",
    designation: "Chairman",
    phone: "+91-11-25302119 / 608",
    email: "directordevelopment.ipu@gmail.com",
  },
  {
    department: "NSS Cell",
    officer: "Prof. Varun Joshi",
    designation: "Programme Coordinator",
    phone: "011-25302369",
    email: "nsscell@ipu.ac.in",
  },
  {
    department: "NCC Cell",
    officer: "Prof. Varun Joshi",
    designation: "Programme Coordinator",
    phone: "011-25302369",
    email: "ncccell@ipu.ac.in",
  },
  {
    department: "Staff Development Cell",
    officer: "Prof. Arvinder Kaur",
    designation: "Chairperson",
    phone: "+91-11-25302240",
    email: "sdp@ipu.ac.in",
  },
  {
    department: "University IT Services (UITS) Cell",
    officer: "Prof. Amit Prakash Singh",
    designation: "Project Director",
    phone: "011-25302746",
    email: "",
  },
  {
    department: "University Hostel",
    officer: "Prof. C. S. Rai",
    designation: "Chief Warden",
    phone: "-",
    email: "",
  },
  {
    department: "Academic Branch",
    officer: "Prof. Udayan Ghose",
    designation: "Director",
    phone: "+91-11-25302152, 25302154 | Fax: +91-11-25302158",
    email: "acad.admissions@ipu.ac.in",
  },
  {
    department: "Coordination Branch",
    officer: "Prof. Rajesh Kumar",
    designation: "Director",
    phone: "+91-11-25302135, 25302136",
    email: "coordination@ipu.ac.in",
  },
  {
    department: "Planning & Legal Branch",
    officer: "",
    designation: "",
    phone: "+91-11-25302193",
    email: "",
  },
  {
    department: "Establishment Branch",
    officer: "",
    designation: "",
    phone: "+91-11-25302182, 25302183, 25302184, 25302188",
    email: "personnel@ipu.ac.in",
  },
  {
    department: "RTI Branch",
    officer: "Sh. Naveen Bhardwaj",
    designation: "CPIO",
    phone: "+91-11-25302193",
    email: "cpio@ipu.ac.in",
  },
  {
    department: "Estate Branch",
    officer: "Sh. Dipin Arora",
    designation: "Dy. Registrar",
    phone: "+91-11-25302245, 25302247",
    email: "estate@ipu.ac.in",
  },
  {
    department: "Security & Sanitation Branch",
    officer: "Sh. Dipin Arora",
    designation: "Dy. Registrar",
    phone: "-",
    email: "",
  },
  {
    department: "Affiliation Branch",
    officer: "Dr. Abha Vermani",
    designation: "Jt. Registrar",
    phone: "+91-11-25302172, 25302173, 25302174",
    email: "affiliation@ipu.ac.in",
  },
  {
    department: "Purchase Branch",
    officer: "Ms. Shikha Agarwal",
    designation: "Dy. Registrar",
    phone: "+91-11-25302149, 25302150",
    email: "purchase@ipu.ac.in",
  },
  {
    department: "General Administration Branch",
    officer: "Sh. Prabhat Mishra",
    designation: "Incharge",
    phone: "+91-11-25302138, 25302139",
    email: "ga@ipu.ac.in",
  },
  {
    department: "University Central Store",
    officer: "Sh. Yogesh Bhati",
    designation: "Incharge",
    phone: "+91-11-25302140, 25302141, 25302142",
    email: "central.stores@ipu.ac.in",
  },
  {
    department: "Public Relation Section",
    officer: "Prof. (Dr.) Tanu Dang",
    designation: "In-charge / Media Head",
    phone: "+91-11-25302170, 25302171",
    email: "pro@ipu.ac.in",
  },
  {
    department: "Academic Grievance Committee",
    officer: "",
    designation: "Chairman",
    phone: "",
    email: "",
  },
  {
    department: "Student Grievance Redressal Committee",
    officer: "Prof. Vaishali Singh",
    designation: "Chairperson",
    phone: "",
    email: "usgrc@ipu.ac.in",
  },
  {
    department: "Internal Complaint Committee",
    officer: "Prof. Kanwal D. P. Singh",
    designation: "Chairperson",
    phone: "",
    email: "icc@ipu.ac.in",
  },
  {
    department: "Internal Complaint Committee (East Delhi Campus)",
    officer: "Prof. Abha Aggarwal",
    designation: "Chairperson",
    phone: "-",
    email: "",
  },
  {
    department: "University Inclusion & Accessibility Cell (UIAC)",
    officer: "Prof.(Dr.) Shalini Garg",
    designation: "Director",
    phone: "",
    email: "uiacutthaan@ipu.ac.in",
  },
  {
    department: "Technology Transfer Office",
    officer: "Dr. Zubair Ahmed Khan",
    designation: "Incharge",
    phone: "",
    email: "",
  },
  {
    department: "Indraprastha Centre for Strategy and Policy Research (ICSPR)",
    officer: "Prof. Divya Verma",
    designation: "Director",
    phone: "",
    email: "",
  },
  {
    department: "Centre for Human Values & Ethics",
    officer: "Prof. Vaishali Singh",
    designation: "Incharge",
    phone: "",
    email: "",
  },
  {
    department: "UITS - East Campus",
    officer: "Dr. Amar Arora",
    designation: "Director",
    phone: "",
    email: "",
  },
];


function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Guru Gobind Singh Indraprastha University <br />
          Sector - 16C, Dwarka, New Delhi - 110078 (India)
        </p>
        <p>
          Phone: +91-11-25302171 | Fax: +91-11-25302111 <br />
          Email: pro@ipu.ac.in
        </p>
      </header>

      <div className="contact-grid">
        {contactData.map((item, index) => (
          <div key={index} className="contact-card">
            <h3>{item.department}</h3>
            <p>
              <strong>{item.officer}</strong> <br />
              {item.designation}
            </p>
            <p>{item.phone}</p>
            <a href={`mailto:${item.email}`}>{item.email}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;