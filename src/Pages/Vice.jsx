import React, { useState } from "react";
import "./Vice.css";
import vcImg from "../assets/vc.png"; // 👈 your image here

function ViceChancellor() {
  const [activeTab, setActiveTab] = useState("positions");

  return (
    <div className="vc-page">
      {/* Hero Section */}
      <div className="vc-hero">
        <img src={vcImg} alt="Prof. (Dr.) Mahesh Verma" className="vc-img" />
        <div className="vc-info">
          <h1>Prof. (Dr.) Mahesh Verma</h1>
          <h2>Vice Chancellor</h2>
          <h3>Guru Gobind Singh Indraprastha University, New Delhi</h3>
          <ul className="vc-highlights">
            <li>Padma Shri Awardee</li>
            <li>DR. B. C. Roy Awardee</li>
            <li>National Science and Technology Awardee</li>
            <li>Conferred Rank of Hony. Colonel in the Armed Forces</li>
          </ul>
          <p className="vc-qualifications">
            BDS, MDS, MBA, FAMS, FDSRCS (England), FDSRCPSG (Glasgow), FDSRCS
            (Edinburgh), Ph.D. (IPU), Ph.D. (hc), DSc(hc)
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="vc-tabs">
        <button
          className={activeTab === "positions" ? "active" : ""}
          onClick={() => setActiveTab("positions")}
        >
          Positions
        </button>
        <button
          className={activeTab === "awards" ? "active" : ""}
          onClick={() => setActiveTab("awards")}
        >
          Awards
        </button>
      </div>

      {/* Content */}
      <div className="vc-content">
        {activeTab === "positions" ? (
          <div>
            <h2>Positions</h2>
            <ul className="vc-list">
             <li>Vice Chancellor — Guru Gobind Singh Indraprastha University, New Delhi</li>
<li>Trustee — Board of Trustees, India International Centre (IIC), New Delhi</li>
<li>Former Vice Chancellor — Delhi Pharmaceutical Sciences and Research University, New Delhi</li>
<li>Chairman — State Higher Education Council, Delhi</li>
<li>Former Chairman — National Accreditation Board for Hospitals & Healthcare Providers (NABH)</li>
<li>Professor Emeritus — Maulana Azad Institute of Dental Sciences, New Delhi</li>
<li>Former Dean — Maulana Azad Institute of Dental Sciences, New Delhi-110002, India</li>
<li>President — International Association for Disability and Oral Health (iADH) India Chapter</li>
<li>President — Indian Academy of Restorative Dentistry (IARD)</li>
<li>Past Vice President — Dental Council of India</li>
<li>Past President — International Association for Dental Research (IADR) India Division</li>
<li>Past President — Indian Dental Association (National)</li>
<li>Past President — Dental Council of India (Acting)</li>
<li>Past President — Indian Prosthodontic Society</li>
<li>Past President — Indian Dental Association (Delhi)</li>
<li>Past President — International College of Dentists (India, Sri Lanka & Nepal Section)</li>
<li>Past President — Pierre Fauchard Academy (India Section)</li>
<li>Past President — Delhi Dental Council</li>
<li>Chairperson — Governing Body, University College of Medical Sciences, University of Delhi</li>
<li>Chairperson — The Indian Board of Forensic Odontology (IBFO)</li>
<li>Chairperson — Research Committee (Project Review Committee – PRC) for Oral Health at Indian Council of Medical Research (ICMR)</li>
<li>Chairperson — Higher Education, Skill Development and Related Services Sectional Committee, SSD 04 of Bureau of Indian Standards</li>
<li>Chairperson — Review Committee for empanelment of Hospitals, Diagnostic Centres/Labs and Authorised Medical Attendants, University of Delhi</li>
<li>Chairperson — Drug Purchase Committee, University of Delhi</li>
<li>Honorary Advisor — Armed Forces Dental Services, Ministry of Defence</li>
<li>Eminent Research Scholar/Scientist — Armed Forces Medical Research Committee (AFMRC), Govt. of India</li>
<li>Eminent Research Scholar/Scientist — Council of Scientific & Industrial Research (CSIR)</li>
<li>Eminent Research Scholar/Scientist — Department of Science & Technology (DST)</li>
<li>Clinical Director — AAID Maxicourse India</li>
<li>Research — Principal Investigator, Project by CSIR, Ministry of Science and Technology, Govt. of India for Indigenous Dental Implants (Phase I completed, Phase II Started)</li>
<li>Past Secretary — Indian Prosthodontic Society</li>
<li>Part Time Faculty — Faculty of Management Studies, Delhi University (MBA Classes)</li>
<li>International Advisor — Royal College of Physicians & Surgeons of Glasgow</li>
<li>Executive Editor (Past) — Journal of International College of Dentists (India, Sri Lanka & Nepal Section-VI)</li>
<li>Past Editor — Dentistry India (Springer)</li>
<li>Editorial Board — Journal of American Dental Association (Indian Edition)</li>
<li>Editorial Board — Journal of British Dental Association (Indian Edition)</li>
<li>Editorial Board — Journal of Indian Dental Association</li>
<li>Editorial Board — Journal of Indian Prosthodontic Society</li>
<li>Editorial Board — Journal of Oral Biology and Clinical Dentistry (India Section)</li>
<li>Council Member — National Academy of Medical Sciences (NAMS)</li>
<li>Member of the Board — National Accreditation Board for Hospitals (NABH)</li>
<li>Governing Board Member — Indraprastha Apollo Hospital, New Delhi, Director representing Govt. of Delhi</li>
<li>Governing Board Member — National Accreditation Board for Hospitals (NABH), Quality Council of India, New Delhi</li>
<li>Governing Board Member — V.P. Patel Chest Institute – Delhi University, New Delhi</li>
<li>Governing Board Member — Kalantar Art Trust, Noida</li>
<li>Former Governing Board Member — NITTE University (Deemed to be University), Mangalore, Karnataka</li>
<li>Former Governing Board Member — Indian Council of Medical Research (ICMR), New Delhi</li>
<li>Former Governing Board Member — Indian Red Cross Society, Delhi</li>
<li>Member (International) — Global Committee, American Academy of Implant Dentistry (USA)</li>
<li>Member (International) — Global Child Dental Health Task Force (UK)</li>
<li>Think Tank Committee Member — Alliance Oral Health Across Borders, USA</li>
<li>Member (International) — Alliance for Cavity Free Future, USA</li>
<li>Former Member (International) — Science Committee, FDI World Dental Federation, Geneva</li>
<li>Former Member (International) — Working Group on Artificial Intelligence in Dentistry, FDI World Dental Federation</li>
<li>Former Member (International) — Antimicrobial Resistance Antibiotic Stewardship (AMR-ABS), FDI World Dental Federation, Geneva</li>
<li>Member (National) — Dental Council of India (Representing Govt. of India)</li>
<li>Member (National) — National Medical Commission (Medical Council of India)</li>
<li>Member (National) — Advisory and Ethics Committee of Indian Prosthodontic Society</li>
<li>Member (National) — Planning Board, Pandit B.D. Sharma University of Health Sciences, Rohtak, Haryana</li>
<li>Member (National) — Advisory Board, Pre-incubation Centre, VSPM’s Dental College & Research Centre, Nagpur</li>
<li>Member (National) — Disciplinary Committee, National Academy of Medical Sciences (NAMS), New Delhi</li>
<li>Member (National) — Planning Board, Indira Gandhi Delhi Technical University for Women (IGDTUW), Delhi</li>
<li>Member (National) — Insurance Regulatory and Development Authority of India (IRDA), Hyderabad</li>
<li>Member (National) — Establishment Committee, Association of Indian Universities (AIU)</li>
<li>Member (National) — Sh. Mata Vaishno Devi Institute of Medical Excellence, J&K</li>
<li>Former Member (National) — COVID Committee for Hospitals, Govt. of Delhi</li>
<li>Former Member (National) — National Medical and Wellness Tourism Board (NMWTB), Govt. of India</li>
<li>Visiting Fellowship — FAIMER Fellow, Philadelphia (USA)</li>
<li>Visiting Fellowship — T.C. White Fellowship, Royal College of Surgeons and Physicians of Glasgow (UK)</li>
<li>Visiting Fellowship — University of Medicine & Dentistry of New Jersey (USA)</li>
<li>Visiting Fellowship — WHO Fellow, State University of New York (SUNY), Buffalo (USA)</li>
<li>Fellow — American College of Dentists – FACD (USA)</li>
<li>Fellow — National Academy of Medical Sciences (FAMS)</li>
<li>Fellow — International Medical Sciences Academy (FIMSA)</li>
<li>Honorary Fellow — Royal College of Surgeons of England – FDSRCS (England)</li>
<li>Fellow — Royal College of Surgeons, Faculty of General Dentistry Practice – FGDPRCS (England)</li>
<li>Fellow — Royal College of Surgeons of Edinburgh – FDSRCSE (Edinburgh)</li>
<li>Fellow — International Congress of Oral Implantologists – ICOI</li>
<li>Fellow — World Congress for Oral Implantology – WCOI (Japan)</li>
<li>Fellow — International Academy for Dental Facial Esthetics – IADFE (USA)</li>
<li>Academic Associate Fellow — American Academy of Implant Dentistry – FAAID (USA)</li>
<li>Master Fellow — International College of Dentists – FICD (USA)</li>
<li>Honorary Fellow — Royal College of Physicians and Surgeons of Glasgow – FDSRCPSG (England)</li>
<li>Fellow of Eminence — World Academy of Higher Education and Development (W-AHEAD)</li>
<li>Patent (US) — Dental Implant System, Verma et al. Patent Number: 9,833,300 B2; May, 2017</li>
<li>Patent (India) — Dental Implant System, Patent Number: 324068; October, 2007</li>
            </ul>
          </div>
        ) : (
          <div>
            <h2>Awards</h2>
            <ul className="vc-list">
              <li>‘Prerna Strot Sammaan’ by Chief Minister, Govt. of Himachal Pradesh, August 2024</li>
<li>National Award for Outstanding Efforts in Science & Technology by the President of India, February 2020</li>
<li>National Oral Healthcare ‘Sushruta Award’ by Indian Dental Association, December 2017</li>
<li>‘Padmashri’ by Hon’ble President of India, 2014 (4th Highest Civilian Award)</li>
<li>‘Dr. B.C. Roy National Award’ by President of India, 2007 (Highest Medical Award presented by President of India)</li>
<li>‘Dr. B.C. Shroff Oration’ – Indian Prosthodontic Society Annual Conference, 2007</li>
<li>‘Dr. P.N. Behl Foundation Award’ by Delhi Medical Association, 2006</li>
<li>Best Doctor ‘State Award’ by Govt. of NCT of Delhi, 2001</li>
<li>‘Commonwealth Dental Association Oration’, 2001</li>

<li>‘Outstanding Science Committee Contributions’ Award, FDI World Dental Federation, Istanbul, Turkey, September 2024</li>
<li>‘Presidential Citation’ by American Dental Association, October 2021</li>
<li>‘International Dental Professional of the Year 2017’ by American Academy of Implant Dentistry, San Diego, October 2017</li>
<li>‘Global Oral Health Progress Award’ by International Dental Manufacturers (IDM), Madrid, Spain, August 2017</li>
<li>‘Elmer S Best Memorial Award’ by Pierre Fauchard Academy, Madrid, Spain, August 2017</li>
<li>‘Aryabhata International Award 2015’ during 3rd Healthcare Summit & Awards, May 2016, Bangalore</li>

<li>Honorary Membership of British Dental Association, London (Lifetime), 2015</li>
<li>‘Honorary American Dental Association Membership’ by American Dental Association, Washington (Lifetime), November 2015</li>

<li>‘Atal Tiranga Award’ by Dr. Mahendra Nath Pandey & Shri Manoj Tiwari, NDMC Convention Centre, December 26th, 2023</li>
<li>‘DMA Medical Education Excellence Award’ by Delhi Medical Association, New Delhi, March 26th, 2023</li>
<li>‘Eminent Medical & Health Education Teacher Award’ by Delhi Medical Association, September 5th, 2022</li>
<li>‘Global Thought Leader Award’ by Indian Accounting Association, NCR Chapter, September 5th, 2022</li>
<li>‘Distinguished Alumnus Medical Award’ by Chief Minister, Govt. of Kerala, August 26th, 2022</li>
<li>‘Legend in Dentistry Award’ by PMS College of Dental Science & Research, Thiruvananthapuram, March 7th, 2022</li>
<li>‘Samaj Ratna Award’ by Kishore Kumar Memorial Club, New Delhi, December 27th, 2021</li>
<li>‘Dr. Hari Parkash Oration’ by AIIMS, New Delhi, September 2021</li>
<li>‘Hall of Fame Award’ by Ramanuj College, Delhi University, September 5th, 2021</li>
<li>‘Lifetime Achievement Award 2021’ in Dental Sciences/Prosthodontics by Indraprastha Shikshaavam Khel Vikas Sangathan, July 1st, 2021</li>
<li>Certificate of Appreciation in Health Services & Education by Padmavibhushan Dr. A.N Jha Memorial Trust, July 1st, 2021</li>
<li>‘Famdent Legend Award’, June 1st, 2021</li>
<li>‘Rashtriya Icon Award’ by NNS Media Group, India International Centre, April 2020</li>
<li>‘Aarogya Sevavrati Puraskar’ by Vaidyakeeya Madat Nidhi, Mumbai, June 2018</li>
<li>‘28th TP Jhunjhunwala National Excellence Award’ by TP Jhunjhunwala Foundation, New Delhi, February 2018</li>
<li>‘Life Time Achievement Award’ by Indian Association of Positive Psychology & Manav Rachna International University, February 2016</li>
<li>‘ISDR Founder President Prof. M. Rahmatulla Award’ by Indian Society for Dental Research (ISDR), December 2016</li>
<li>‘Distinguished Teacher cum Administrator Award’ by Delhi School of Professional Studies & Research, September 2015</li>
<li>‘M.P.N. Sharma Life Time Achievement Award’ by Institute for Environment, Yoga & Social Security, September 2015</li>
<li>‘Bhagirathi Award’ by Bhagirathi Samajik Saanskritik Manch, November 2014</li>
<li>‘Life Time Achievement Award 2014’ by Heal Talk Publishing House, September 2014</li>
<li>‘Excellence in Dentistry Award’ by Medscape India, Mumbai, September 2014</li>
<li>‘Dr. Radhakrishnan Memorial Award’ by All India Freelance Journalists & Writers Association, September 2014</li>
<li>‘Gomti Devi Swarankar Oration’ by Mahatma Gandhi University of Medical Sciences & Technology, Jaipur, 2014</li>
<li>‘National Award for Healthcare’ by Journalists Federation of India</li>
<li>‘Delhi Medical Association Centenary Healthcare Leadership Award’, 2014</li>
<li>‘Dental Public Health Award’ by National Academy of Medical Sciences, Bhopal, 2013</li>
<li>‘Vashisht Chikitsa Ratan Award’ by Delhi Medical Association, 2013</li>
<li>‘Health Care Personality of the Year’ by FICCI, 2012</li>
<li>‘Commendation’ by Vice Chief of Army Staff, 2009</li>
<li>‘Rotary Vashishat Sewa Samman’ by Rotary Club of India, 2002</li>

<li>Patent (US) — Dental Implant System, Verma et al. Patent Number: 9,833,300 B2; May, 2017</li>
<li>Patent (India) — Dental Implant System, Patent Number: 324068; October, 2007</li>

<li>Jury Member — FICCI Healthcare Awards</li>
<li>Jury Member — FICCI Higher Education Awards</li>
<li>Jury Member — Heart Care Foundation of India Awards</li>
<li>Jury Member — Prof. S.K. Joshi Laboratory Excellence Award, Quality Council of India</li>
<li>Jury Member — Medicine & Surgery for Womennovator 2019</li>
<li>Jury Member — Famdent Prosthodontist of the Year Award</li>
<li>Jury Member — Famdent Academician of the Year Award</li>
<li>Jury Member — Famdent Outstanding Dentist of the Year Award</li>
<li>Jury Member — Bitein Dental Awards</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViceChancellor;