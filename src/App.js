import React, { useState, useEffect } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const profileData = {
    name: "Ankush Pal",
    title: "Full Stack Developer",
    email: "ankushpal4567@gmail.com",
    phone: "+91-7379447232",
    location: "Grater Noida, Uttar Pradesh",
    about: "Passionate Full Stack Developer specializing in creating responsive web applications using modern technologies like React, JavaScript, and Node.js.",
  };

  const skills = [
    { name: "Java", level: 85 },
    { name: "Python", level: 75 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 70 },
    { name: "MongoDB", level: 65 },
    { name: "AWS", level: 60 }
  ];

  const projects = [
    {
      title: "Fit Band",
      description: "Fitness tracking application with GPS and health monitoring features.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      features: ["Step tracking", "GPS integration", "7-day battery life"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based services.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      features: ["Current weather", "Location-based", "Customizable units"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "TOUR-AND-TRAVEL",
      description: "Comprehensive travel planning and management system.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      features: ["Destination planning", "Itinerary management", "Transportation services"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const education = [
    {
      institution: "Noida Institute of Engineering and Technology",
      degree: "B.Tech - Computer Science and Engineering",
      period: "2023 - 2026",
      details: "CGPA: 7.1"
    },
    {
      institution: "MahaMaya Polytechnic of Information Technology",
      degree: "Diploma - Computer Science and Engineering",
      period: "2019 - 2022",
      details: "Percentage: 74%"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">
          <span>AP</span>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hello, I'm <span className="highlight">{profileData.name}</span></h1>
            <h2>{profileData.title}</h2>
            <p>{profileData.about}</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary">View My Work</a>
              <a href="#contact" className="btn secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              <div className="image-placeholder">
                <span>AP</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate Full Stack Developer with experience in building web applications 
                using modern technologies. I enjoy creating responsive, user-friendly interfaces 
                and solving complex problems through code.
              </p>
              <p>
                Currently pursuing my B.Tech in Computer Science, I'm constantly learning and 
                exploring new technologies to enhance my skills and build innovative solutions.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <FaEnvelope className="icon" />
                  <span>{profileData.email}</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="icon" />
                  <span>{profileData.phone}</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="icon" />
                  <span>{profileData.location}</span>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>1</h3>
                <p>Internship Experience</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a href={project.liveLink} className="project-link">Live</a>
                    <a href={project.githubLink} className="project-link">Code</a>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <ul className="project-features">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <h3>{edu.institution}</h3>
                  <p className="degree">{edu.degree}</p>
                  <p className="period">{edu.period}</p>
                  <p className="details">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>I'm always open to discussing new opportunities and interesting projects.</p>
              
              <div className="social-links">
                <a href="#" className="social-link">
                  <FaGithub />
                  GitHub
                </a>
                <a href="#" className="social-link">
                  <FaLinkedin />
                  LinkedIn
                </a>
                <a href={`mailto:${profileData.email}`} className="social-link">
                  <FaEnvelope />
                  Email
                </a>
              </div>
            </div>
            
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Ankush Pal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
