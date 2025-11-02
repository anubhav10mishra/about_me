import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Sun, Moon } from 'lucide-react'

export default function AnubhavResume() {
  const [section, setSection] = useState('profile')
  const [darkMode, setDarkMode] = useState(false)

  const Sections = {
    profile: (
      <div>
        <h2>Profile Summary</h2>
        <p>Accomplished AI professional with expertise in Python and Generative AI, previously at EXL Services. Spearheaded innovative AI solutions, enhancing document parsing efficiency by 30%. Adept at mentoring and fostering team growth, with a proven track record in multimodal document understanding and structured data extraction. Skilled in leading-edge AI technologies and effective communication.</p>
      </div>
    ),
    skills: (
      <div>
        <h2>Key Skills</h2>
        <div className="two-col">
          <ul>
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Image Processing</li>
            <li>Computer Vision</li>
            <li>NLP</li>
            <li>Generative AI</li>
            <li>LLM</li>
            <li>Docker</li>
          </ul>
          <ul>
            <li>FastAPI</li>
            <li>Python</li>
            <li>Scikit Learn</li>
            <li>PyTorch</li>
            <li>LangChain</li>
            <li>LLamaIndex</li>
            <li>RAG</li>
            <li>Agentic AI Frameworks</li>
          </ul>
        </div>
      </div>
    ),
    experience: (
      <div>
        <h2>Experience</h2>
        <section>
          <h3>EXL Services <span className="muted">| Consultant 2 (Data Scientist) — 08/2022 - Current</span></h3>
          <ul>
            <li>Product development for various domain clients using AIML.</li>
            <li>Implementation of RAG, solving for different client needs using OpenAI and Hugging Face.</li>
            <li>Conducted extensive research on traditional OCR pipelines (Tesseract, CTC-based) and Transformer-based OCR architectures.</li>
            <li>Explored and prototyped Visual Language Models (VLMs) for multimodal document understanding.</li>
            <li>Mentored interns and junior engineers on Generative AI tech stacks and Agentic AI workflows.</li>
          </ul>
        </section>

        <section>
          <h3>Madrid Software <span className="muted">| Artificial Intelligence Engineer — 07/2021 - 08/2022</span></h3>
          <ul>
            <li>Designed AI solutions leveraging topic modeling and clustering techniques to analyze and categorize large-scale customer complaints data.</li>
            <li>Led research and development of AI-driven use cases across multiple domains.</li>
            <li>Implemented deep learning and NLP-based models for document and text analytics.</li>
            <li>Conducted training sessions on Python, data analysis, statistics, machine learning, and AI.</li>
          </ul>
        </section>

        <section>
          <h3>Code <span className="muted">| Artificial Intelligence Engineer — 12/2020 - 07/2021</span></h3>
          <ul>
            <li>Delivered DIY learning kits for students integrating computer vision, NLP, NLU, and speech recognition modules.</li>
            <li>Led a team to embed AI modules into IoT and hardware systems.</li>
            <li>Conducted workshops and knowledge sessions on AI, Data Science, and Python.</li>
          </ul>
        </section>

        <section>
          <h3>UPSEConnect <span className="muted">| Digital Content Associate — 10/2017 - 04/2020</span></h3>
          <ul>
            <li>Developed and digitized educational content for the organization's online learning platform.</li>
            <li>Strategized content structure to make complex topics easily understandable.</li>
            <li>Managed system maintenance and hardware performance to ensure optimal operation.</li>
            <li>Designed online quizzes, ad templates, and personality development programs.</li>
            <li>Conducted offline classes when required.</li>
          </ul>
        </section>
      </div>
    ),
    education: (
      <div>
        <h2>Education</h2>
        <ul>
          <li>Sharda University | B.Tech/B.E. - 75% (Electrical, Electronics & Communication Engineering), 08/2016</li>
          <li>K.V No.2 Chennai | Intermediate (Science, PCM) - 88%, 01/2011</li>
          <li>K.V No.1 Suratgarh | High School - 91%, 01/2009</li>
        </ul>
      </div>
    ),
    certifications: (
      <div>
        <h2>Certifications</h2>
        <ul>
          <li>Creativity, Innovation and Change - Coursera</li>
          <li>Python Programming for Everybody - Coursera</li>
          <li>Machine Learning and Deep Learning Masters - Simplilearn</li>
          <li>Artificial Intelligence Engineer Masters - Simplilearn</li>
          <li>Machine Learning - Coursera</li>
          <li>Data Scientist Masters - Simplilearn</li>
        </ul>
      </div>
    ),
    projects: (
      <div>
        <h2>Projects</h2>
        <h4>Chatbot & RAG Implementation</h4>
        <ul>
          <li>Implemented Retrieval-Augmented Generation (RAG) for enterprise document systems, achieving a 20% increase in processing efficiency.</li>
          <li>Developed chatbots for format-agnostic document interaction and on-demand summarization.</li>
          <li>Enabled entity extraction features to enhance search accuracy and analysis precision.</li>
        </ul>
        <h4>Entity Extraction & Intelligent Document Processing</h4>
        <ul>
          <li>Built IDP pipelines combining NLP and rule-based techniques for robust extraction.</li>
          <li>Integrated validation logic and optimized pipelines for scalability.</li>
        </ul>
      </div>
    )
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <div className="card">
        <header className="header">
          <div>
            <div className="initial">A</div>
            <h1>ANUBHAV</h1>
            <div className="contact">
              <span><Mail size={14}/> anubhav10mishra@gmail.com</span>
              <span><Phone size={14}/> +91 8178033325</span>
              <span><MapPin size={14}/> Greater Noida, India</span>
              <a href="https://linkedin.com/in/anubhav-mishra-48a12796" target="_blank" rel="noreferrer"><Linkedin size={14}/> LinkedIn</a>
            </div>
          </div>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={16}/> : <Moon size={16}/>}
          </button>
        </header>

        <nav className="nav">
          {Object.keys(Sections).map((k) => (
            <button key={k} className={section === k ? 'active' : ''} onClick={() => setSection(k)}>{k.charAt(0).toUpperCase()+k.slice(1)}</button>
          ))}
        </nav>

        <main className="content">
          <motion.div key={section} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            {Sections[section]}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
