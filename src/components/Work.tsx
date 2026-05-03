import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Personal Finance Tracker",
    category: "Secure Full-Stack Finance Application",
    description:
      "This project is a full-stack financial tracking application focused on secure personal finance workflows. I architected protected user authentication, role-based access control, input validation, and safeguarded transaction processing. The backend was designed to calculate balances accurately in real time while supporting recurring transactions without compromising data integrity. On the frontend, I built responsive dashboards with dynamic visualizations so users could understand their spending patterns quickly. I also performed time and space complexity analysis to improve backend data processing efficiency.",
    tools:
      "RBAC, secure authentication, input validation, protected transactions, real-time balance calculations, responsive dashboards",
  },
  {
    title: "AI Job Anxiety NLP Analysis",
    category: "Natural Language Processing Project",
    description:
      "This NLP project analyzed emotional sentiment around AI-driven job anxiety and future optimism using roughly 10,000 Reddit posts. I built an end-to-end text processing pipeline that combined sentiment analysis, topic modeling, and supervised classification. The project compared multiple machine learning models to identify patterns of anxiety, optimism, and uncertainty in public discussion. SVM with TF-IDF emerged as the most reliable approach for emotion classification in this dataset. The final result showed how practical NLP methods can turn noisy social text into structured insight about career uncertainty.",
    tools:
      "10,000 Reddit posts, sentiment analysis, topic modeling, supervised classification, SVM, TF-IDF",
  },
  {
    title: "Voltspot",
    category: "EV Dock Locator and Power Reservation",
    description:
      "Voltspot is an EV dock locator and power reservation system built to support high-volume booking workflows. I engineered a concurrent reservation flow using asynchronous request handling in Node.js so multiple users could search and book charging slots efficiently. The database layer used normalized schemas and indexing strategies to improve read and write performance under simulated demand. I also developed a predictive wait-time estimation algorithm that reached 85% accuracy. The project emphasized practical system design, efficient data structures, and reliable booking behavior under load.",
    tools:
      "Node.js asynchronous handling, concurrent booking, normalized schemas, indexing, predictive wait-time estimation with 85% accuracy",
  },
  {
    title: "Life Insurance Management System",
    category: "SQL Database and Front-End Integration",
    description:
      "This project digitized core life insurance management workflows around policyholder data, plans, and reporting. I engineered and normalized a SQL database capable of managing more than 5,000 policyholder records while preserving data integrity. The project included complex SQL queries for extracting and segmenting customer data by policy type and demographic information. These query results supported risk assessment analysis and more structured reporting. The final prototype demonstrated strong integration between database design, query optimization, and a usable front-end experience.",
    tools:
      "5,000+ policyholder records, normalized SQL database, complex queries, customer segmentation, risk assessment reporting",
  },
  {
    title: "Language Translator App",
    category: "Android Mobile Application",
    description:
      "This Android mobile application was built to make multilingual text translation simple and immediate. I developed the app in Android Studio with a clean interface for entering source text and viewing translated output. The application integrated translation APIs to provide real-time language conversion across different languages. The interface was designed for a smooth input-to-output flow so users could type in one language and quickly see the translated result. This project strengthened my mobile development skills and API integration experience.",
    tools:
      "Android Studio, translation APIs, real-time multilingual text input and output, mobile UI design",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Resume <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
