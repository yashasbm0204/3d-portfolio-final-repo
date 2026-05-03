import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.S. Information Systems & Technology</h4>
                <h5>Claremont Graduate University</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Master's student focused on Data Science & Analytics, scalable
              systems, applied machine learning, cybersecurity, and secure
              software design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>Clinix, Bangalore</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed modular RESTful backend services for concurrent user
              workflows, improved SQL performance through indexing, contributed to
              secure architecture discussions, and evaluated AWS EC2/S3 deployment
              configurations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>Bangalore Institute of Technology</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed computer science coursework and shipped academic software
              projects spanning EV reservation systems, SQL-backed insurance
              management, and mobile translation applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Internshala & Jspiders</h5>
              </div>
              <h3>2023-24</h3>
            </div>
            <p>
              Completed Machine Learning using Python, Excel, Tableau and SQL, plus
              Full-Stack Development using Python.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
