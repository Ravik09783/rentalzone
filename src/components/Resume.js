// Resume.jsx
import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

/*
  If your bundler complains about the import, try:
    import * as html2pdf from "html2pdf.js";
  or use a dynamic import inside handleDownload.
*/

const Resume = () => {
  const resumeRef = useRef(null);

  const handleDownload = () => {
    if (!resumeRef.current) return;

    const element = resumeRef.current;

    const opt = {
      margin: 0.4, // inches
      filename: "Ravi_Kumar_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2, // increase for better quality
        useCORS: true,
        logging: false,
      },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    // Generate PDF and save
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div style={{ padding: 20, background: "#f3f4f6", minHeight: "100vh" }}>
      {/* Download button (outside the captured resume element) */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
        <button
          onClick={handleDownload}
          style={{
            background: "#1D4ED8",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Download PDF
        </button>
      </div>

      {/* Resume content to capture */}
      <div
        ref={resumeRef}
        style={{
          maxWidth: "8.5in",
          margin: "0 auto",
          background: "white",
          padding: "0.5in",
          color: "#111827",
          fontFamily: "'Inter', Arial, sans-serif",
          fontSize: 11,
          lineHeight: 1.4,
          boxShadow: "0 0 20px rgba(0,0,0,0.08)",
        }}
      >
        {/* Inline CSS (kept minimal, matches your original) */}
        <style>{`
          .header { text-align: center; margin-bottom: 20px; border-bottom: 1px solid #6B7280; padding-bottom: 15px; }
          .name { font-size: 28pt; font-weight: 600; color: #1D4ED8; margin-bottom: 8px; letter-spacing: 1px; }
          .title { font-size: 16pt; color: #4B5563; margin-bottom: 12px; font-weight: 500; }
          .contact-info { font-size: 10pt; line-height: 1.3; color: #374151; }
          .section { margin-bottom: 12px; }
          .section-title { font-size: 12pt; font-weight: 600; color: #1D4ED8; border-bottom: 1px solid #D1D5DB; margin-bottom: 6px; padding-bottom: 2px; text-transform: uppercase; letter-spacing: 1px; }
          .job-header { margin-bottom: 6px; display: flex; justify-content: space-between; align-items: flex-start; }
          .job-title { font-weight: 500; font-size: 11pt; color: #111827; margin-bottom: 2px; }
          .company { font-weight: 500; color: #2563EB; font-size: 10pt; }
          .duration { color: #6B7280; font-size: 10pt; }
          ul { margin-left: 20px; margin-bottom: 8px; }
          li { margin-bottom: 3px; font-size: 10pt; color: #374151; }
          .highlight { font-weight: 500; }
          .skills-grid { display: grid; grid-template-columns: 1fr; gap: 4px; }
          .skill-category { margin-bottom: 4px; font-size: 10pt; }
          .skill-label { font-weight: 500; color: #1D4ED8; }
          .skill-value { color: #374151; }
          .education-item { margin-bottom: 8px; }
          .degree { font-weight: 500; color: #111827; font-size: 11pt; }
          .education-details { color: #2563EB; font-weight: 500; font-size: 10pt; }
          .projects { font-style: italic; color: #6B7280; margin-top: 3px; margin-bottom: 10px; font-size: 9pt; }
          .projects .label { font-weight: 500; }
          @media print {
            body { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; print-color-adjust: exact !important; }
          }
        `}</style>

        {/* Body content (exact content you provided) */}
        <div className="header" style={{ textAlign: "center" }}>
          <div className="name">RAVI KUMAR</div>
          <div className="title">Software Developer</div>
          <div className="contact-info">
            <p>
              <span className="label">Email:</span> ravik09783@gmail.com |{" "}
              <span className="label">Phone:</span> 8847489268 |{" "}
              <span className="label">Location:</span> Chandigarh, India
            </p>
            <p>
              <span className="label">GitHub:</span>{" "}
              https://github.com/Ravik09783 | <span className="label">Address:</span>{" "}
              3319, Mauli Jagran Complex, Chandigarh
            </p>
          </div>
        </div>

        <div className="section">
          <div className="section-title">Professional Summary</div>
          <p>
            Experienced Software Developer with 4+ years of expertise in full-stack web application development.
            Proficient in React.js, Next.js, Angular, JavaScript, and TypeScript with proven track record of delivering scalable solutions.
            Strong background in frontend development, API integration, database management, and agile methodologies.
            Demonstrated ability to improve user experience, optimize performance, and increase operational efficiency by up to 20%.
          </p>
        </div>

        <div className="section">
          <div className="section-title">Technical Skills</div>
          <div className="skills-grid">
            <div className="skill-category">
              <span className="skill-label">Programming Languages:</span>{" "}
              <span className="skill-value">JavaScript, TypeScript, HTML5, CSS3</span>
            </div>
            <div className="skill-category">
              <span className="skill-label">Frontend Frameworks:</span>{" "}
              <span className="skill-value">React.js, Next.js, Angular, Redux, NgRx</span>
            </div>
            <div className="skill-category">
              <span className="skill-label">Backend Technologies:</span>{" "}
              <span className="skill-value">Supabase, Firebase</span>
            </div>
            <div className="skill-category">
              <span className="skill-label">Database:</span>{" "}
              <span className="skill-value">MySQL, Firebase, Supabase</span>
            </div>
            <div className="skill-category">
              <span className="skill-label">Development Tools:</span>{" "}
              <span className="skill-value">Git, GitHub, Visual Studio Code, npm, Webpack</span>
            </div>
            <div className="skill-category">
              <span className="skill-label">Libraries & APIs:</span>{" "}
              <span className="skill-value">Chart.js, Nylas Calendar API, RESTful APIs</span>
            </div>
            <div className="skill-category">
              <span className="skill-label">Additional:</span>{" "}
              <span className="skill-value">UI/UX Design, Performance Optimization, Cross-browser Compatibility</span>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-title">Professional Experience</div>

          <div className="job-header">
            <div>
              <div className="job-title">Software Engineer</div>
              <div className="company">MG Smart Tech Pvt Ltd | Mohali, India</div>
            </div>
            <span className="duration">October 2024 – Present</span>
          </div>
          <ul>
            <li>
              <span className="highlight">WDYH Platform</span> Implemented AI-powered image-based search
              functionality, enabling users to upload images and receive contextually
              relevant results based on visual content analysis.
            </li>
            <li>
              <span className="highlight">BTC University International</span>Integrated Single Sign-On (SSO)
              authentication and implemented multilingual support to enhance global
              accessibility and user convenience.
            </li>
          </ul>
          <div className="projects">
            <span className="label">Project Links:</span> Btcuniversity: https://www.btcuniversity.com/ |
            Whodoesyourhair: https://whodoesyourhair.com/ | Whodoesyourhair: https://cms.whodoesyourhair.com/
          </div>

          <div className="job-header">
            <div>
              <div className="job-title">Software Engineer</div>
              <div className="company">Vision Vivante Pvt Ltd | Haryana, India</div>
            </div>
            <span className="duration">August 2023 – July 2024</span>
          </div>
          <ul>
            <li>
              <span className="highlight">Enhanced booking system functionality</span> by implementing comprehensive scheduling, rescheduling, and cancellation features for Snootme platform, improving user engagement and operational efficiency
            </li>
            <li>
              <span className="highlight">Integrated video conferencing capabilities</span> with automatic meeting recording and email delivery system, resulting in improved customer satisfaction and accessibility
            </li>
            <li>
              <span className="highlight">Developed role-based access control system</span> for Smartmeter application, implementing multi-user permissions and data visualization dashboards
            </li>
            <li>
              <span className="highlight">Technologies Used:</span> React.js, Redux, Next.js, Firebase, Nylas Calendar API, JavaScript
            </li>
          </ul>
          <div className="projects">
            <span className="label">Project Links:</span> Snootme: https://snootme-v2.vercel.app/ | Smartmeter: https://smartmeter.visionvivante.com/
          </div>

          <div className="job-header">
            <div>
              <div className="job-title">Software Developer</div>
              <div className="company">Glocify Technologies Pvt Ltd | Chandigarh, India</div>
            </div>
            <span className="duration">June 2022 – April 2023</span>
          </div>
          <ul>
            <li>
              <span className="highlight">Implemented advanced order tracking system</span> with mathematical profit analysis calculations for ZOPOXO e-commerce platform, optimizing operational efficiency and enabling data-driven business decisions
            </li>
            <li>
              <span className="highlight">Developed comprehensive data visualization dashboard</span> featuring line charts, bar graphs, and donut charts for LOGINCIDENT platform, enabling real-time complaint tracking and analysis
            </li>
            <li>
              <span className="highlight">Built commission management system</span> for ActivityHub platform, implementing referral-based earning functionality that increased user engagement and platform revenue
            </li>
            <li>
              <span className="highlight">Technologies Used:</span> Angular, TypeScript, NgRx, React.js, Redux, Chart.js, RESTful APIs
            </li>
          </ul>

          <div className="job-header">
            <div>
              <div className="job-title">Junior Software Developer</div>
              <div className="company">Aron Web Solutions Pvt Ltd | Punjab, India</div>
            </div>
            <span className="duration">December 2020 – June 2022</span>
          </div>
          <ul>
            <li>
              <span className="highlight">Enhanced company website performance</span> including homepage UI optimization for https://aronwebsolutions.com/, leading to increased user engagement and retention
            </li>
            <li>
              <span className="highlight">Implemented responsive design elements</span> and intuitive navigation features, improving accessibility and streamlining user access to key information
            </li>
            <li>
              <span className="highlight">Technologies Used:</span> React.js, Redux, HTML5, CSS3, JavaScript, Responsive Design
            </li>
          </ul>
        </div>

        <div className="section">
          <div className="section-title">Education</div>

          <div className="education-item">
            <div className="degree">Master of Computer Applications (MCA)</div>
            <div className="education-details">Lovely Professional University | Punjab, India | June 2022 – 2024</div>
          </div>

          <div className="education-item">
            <div className="degree">Bachelor of Computer Applications (BCA)</div>
            <div className="education-details">Panjab University | Chandigarh, India | August 2014 – June 2017</div>
          </div>

          <div className="education-item">
            <div className="degree">Higher Secondary Education (12th - PCM)</div>
            <div className="education-details">Jawahar Navodaya Vidyalaya | Chandigarh, India | April 2013 – March 2014</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
