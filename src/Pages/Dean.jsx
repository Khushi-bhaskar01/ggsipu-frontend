import "./Dean.css";
import deanImg from "../assets/dean.jpg"; 

export default function Dean() {
  return (
    <div className="dean-page">
      <h1 className="dean-title">Dean</h1>

      <div className="dean-card">
        <div className="dean-image">
          <img src={deanImg} alt="Prof. Anjana Gosain" />
        </div>

        <div className="dean-info">
          <h2>Prof. Anjana Gosain</h2>
          <p className="designation">Professor & Dean, Computer Science</p>
          <p><strong>Educational Qualification:</strong> Ph.D.</p>
          <p><strong>Email:</strong> dean.usict@ipu.ac.in</p>
          <p><strong>Phone:</strong> +91-11-25302700, 25302702</p>
          <p><strong>Field of Interest:</strong> Databases, Data Analytics, Machine Learning, Software Engineering, Data Warehousing & Data Mining</p>
          <p><strong>Official Address:</strong> University School of Information & Communication Technology, GGS Indraprastha University, Sector 16-C, Dwarka, New Delhi-110078</p>
        </div>
      </div>

      <section className="dean-section">
        <h3>Teaching & Research Experience</h3>
        <p>
          Dr. (Mrs.) Anjana Gosain is working as Professor in University School of Information & Communication Technology. 
          She obtained her Ph.D. from GGS Indraprastha University & M.Tech in Information Systems by receiving gold medal 
          from Netaji Subhas Institute of Technology (NSIT) Delhi. Prior to joining the school, she has worked with Computer Science 
          department of YMCA Institute of Engineering, Faridabad (1994-2002). She has also worked with REC, Kurukshetra. 
          Her technical and research interests include data warehouse, data mining, requirements engineering, databases, software 
          engineering, object orientation and conceptual modeling.
        </p>
      </section>

      <section className="dean-section">
        <h3>Research Publications</h3>
        <p>She has published 80 research papers in International / National journals and conferences.</p>
      </section>

      <section className="dean-section">
        <h3>Awards & Achievements</h3>
        <p>Best researcher award consecutively for last four years.</p>
      </section>
    </div>
  );
}