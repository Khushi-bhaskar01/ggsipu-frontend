import React from "react";
import "./Faculty.css";

const facultyData = [
  {
    name: "Dr. Yogesh Singh",
    designation: "Professor [On Deputation at DU w.e.f 08.10.21]",
    email: "-",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. B. V. R. Reddy",
    designation: "Professor [On Deputation at NIT Kurukshetra, w.e.f 04.02.22]",
    email: "bvrreddy@ipu.ac.in",
    profile: "Profile",
    research: "Research Profile",
  },
  {
    name: "Dr. Navin Rajpal",
    designation: "Professor",
    email: "navin.rajpal@ipu.ac.in",
    profile: "Profile",
    research: "Research Profile",
  },
  {
    name: "Dr. Chandra Shekhar Rai",
    designation: "Professor",
    email: "csrai@ipu.ac.in",
    profile: "Profile",
    research: "Research Profile",
  },
  {
    name: "Dr. (Mrs.) Arvinder Kaur",
    designation: "Professor",
    email: "arvinder@ipu.ac.in",
    profile: "Profile",
    research: "Research Profile",
  },
  {
    name: "Dr. Pravin Chandra",
    designation: "Professor",
    email: "pchandra@ipu.ac.in",
    profile: "Profile",
    research: "Research Profile",
  },
  {
    name: "Dr. Anjana Gosain",
    designation: "Professor & Dean",
    email: "anjana_gosain@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. Udayan Ghose",
    designation: "Professor",
    email: "udayan@ipu.ac.in",
    profile: "Profile",
    research: "Research Profile",
  },
  {
    name: "Dr. Bharti Suri",
    designation: "Professor",
    email: "bhartisuri@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. Amit Prakash Singh",
    designation: "Professor",
    email: "amit@ipu.ac.in",
    profile: "Samarth Profile",
    research: "Research Profile",
  },
  {
    name: "Dr. Pushpendra Singh Bharti",
    designation: "Professor",
    email: "psbharti@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. R. Rama Kishore",
    designation: "Professor",
    email: "rama.kishore@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. Anju Saha",
    designation: "Professor",
    email: "anju@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. Ravindra Kr. Purwar",
    designation: "Professor",
    email: "ravindra@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. Virendra Prasad Vishwakarma",
    designation: "Professor",
    email: "vpv@ipu.ac.in",
    profile: "Profile",
    research: "Research Profile",
  },
  {
    name: "Dr. Anurag Jain",
    designation: "Professor",
    email: "anurag@ipu.ac.in",
    profile: "Profile",
    research: "Research Profile",
  },
  {
    name: "Dr. Sanjay Kr. Malik",
    designation: "Professor",
    email: "skmalik@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. Vandana Nath",
    designation: "Professor",
    email: "vandana.nath@ipu.ac.in",
    profile: "Profile",
    research: "Research Profile",
  },
  {
    name: "Dr. Sartaj Singh Sodhi",
    designation: "Professor",
    email: "sartaj@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. Rinkaj Goyal",
    designation: "Professor",
    email: "rinkaj@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. Ashish Payal",
    designation: "Professor",
    email: "ashish@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. Rameshwar Lal Ujjwal",
    designation: "Professor",
    email: "ujjwal@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. Maddali Bala Krishna",
    designation: "Professor",
    email: "mbalakrishna@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. Jyotsna",
    designation: "Associate Professor",
    email: "jyotsnayadav@ipu.ac.in",
    profile: "Profile",
    research: "Research Profile",
  },
  {
    name: "Dr. Reena Gupta",
    designation: "Associate Professor",
    email: "reena@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. Anuradha Chug",
    designation: "Associate Professor",
    email: "anuradha@ipu.ac.in",
    profile: "Profile",
    research: "Research Profile",
  },
  {
    name: "Dr. Kamaldeep Kaur",
    designation: "Associate Professor",
    email: "Kdkaur99@ipu.ac.in",
    profile: "Profile",
    research: "Research Profile",
  },
  {
    name: "Ms. Priyanka Bhutani",
    designation: "Assistant Professor",
    email: "priyankachoudhary@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. Mansi Jhamb",
    designation: "Assistant Professor",
    email: "mansi.jhamb@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. Jaspreeti Singh",
    designation: "Assistant Professor",
    email: "jaspreeti_singh@ipu.ac.in",
    profile: "Profile",
    research: "Research Profile",
  },
  {
    name: "Dr. Ruchi Sehrawat",
    designation: "Assistant Professor",
    email: "ruchi.sehrawat@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Dr. Manoj Kumar Satyarthi",
    designation: "Assistant Professor",
    email: "mksssrewa@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Sh. Shiv Ram Meena",
    designation: "Assistant Professor",
    email: "srm@ipu.ac.in",
    profile: "Profile",
    research: "Research Profile",
  },
  {
    name: "Ms. Shweta Dabas",
    designation: "Assistant Professor",
    email: "shwetadbs@ipu.ac.in",
    profile: "Profile",
    research: "Research Profile",
  },
  {
    name: "Dr. Chakresh Kumar",
    designation: "Assistant Professor",
    email: "chakreshk@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Ms. Priyanka Chaudhary",
    designation: "Assistant Professor",
    email: "priyanka.b@ipu.ac.in",
    profile: "Profile",
    research: "Research Profile",
  },
  {
    name: "Sh. Parijat Mathur",
    designation: "Assistant Professor",
    email: "Parijat.mathur@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
  {
    name: "Ms. Asna Furqan",
    designation: "Assistant Professor",
    email: "asna.furqan@ipu.ac.in",
    profile: "Profile",
    research: null,
  },
];
const Faculty = () => {
  return (
    <div className="faculty-page">
      <h1 className="faculty-title">USICT Faculty Members</h1>
      <div className="faculty-grid">
        {facultyData.map((f, index) => (
          <div className="faculty-card" key={index}>
            <h2>{f.name}</h2>
            <p className="designation">{f.designation}</p>
            <p>
              <strong>Email:</strong>{" "}
              {f.email !== "-" ? (
                <a href={`mailto:${f.email}`} className="email-link">
                  {f.email}
                </a>
              ) : (
                "N/A"
              )}
            </p>
            <div className="links">
              {f.profile && <a href="#">{f.profile}</a>}
              {f.research && <a href="#">{f.research}</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
