import React, { useState, useEffect , useRef} from 'react';
import { Github, Linkedin, Mail, ExternalLink, Sun, Moon, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { time } from 'framer-motion/client';


const skills = [
  { category: 'Frontend', items: ['React', 'HTML/CSS', 'JavaScript', 'TailwindCSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
  { category: 'Tools', items: ['Git/Github', 'APIs','VS Code', 'Postman'] },
  { category: 'Other', items: ['Analytical thinking', 'Communication', 'Problem Solving', 'Public Speaking']},
];

const projects = [
  {
    title: 'Empolyee Management System Platform',
    description: 'A full-stack Empolyee Managemnt Using CURD operation with React and Node.js',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    demo: '#',
    github: 'https://github.com/Gauravthkaur/Employee-Management-App',
  },
  {
    title: 'Task Management App',
    description: 'A productivity app for managing daily tasks and projects',
    tech: ['React', 'Firebase', 'Material-UI'],
    demo: 'https://vercel.com/gauravthkaurs-projects/user-management-system/CwRNnncBkndLfMQjpwpwmdL9Wgg9#',
    github: '#https://github.com/Gauravthkaur/User-Management-System',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather data visualization using external APIs',
    tech: ['React', 'OpenWeather API', 'ChartJS'],
    demo: 'https://weather-app-seven-psi-53.vercel.app/#',
    github: 'https://github.com/Gauravthkaur/weather_app',
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const form = useRef();
  const [emailStatus, setEmailStatus] = useState('');
 

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };



  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const nameAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        type: "spring",
        bounce: 0.4
      }
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setEmailStatus('Sending...');

    emailjs
      .sendForm('service_69ack9p', 'template_9su4hiy', form.current, {
        publicKey: '61L9jgIKZHwYDmVnm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEmailStatus('Message sent successfully!');
          form.current.reset();
          setTimeout(()=>{
            setEmailStatus('');},
            3000);
        },
      
        (error) => {
          console.log('FAILED...', error.text);
          setEmailStatus('Failed to send message. Please try again.');
          setEmailStatus('Message sent successfully!');
          form.current.reset();
          setTimeout(()=>{
            setEmailStatus('');},
            3000);
        },
      );
      
  };

 return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* NavBar */}
        <nav className="py-4 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <motion.a
                href="#home"
                className="text-gray-900 dark:text-white text-xl font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GT
              </motion.a>
              <div className="flex items-center space-x-4">
                {['About', 'Skills', 'Projects',  'Contact',].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                ))}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Home Section with Custom Background */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background effect */}
          <div className="absolute inset-0 custom-hero" aria-hidden="true">
            <div className="absolute inset-0 custom-hero-after"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.h1
              variants={nameAnimation}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl font-bold mb-4 text-white custom-h1"
            >
              <span className="gradient-text">Gaurav Tomar</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className=" md:text-2xl dark:text-gray-200  text-gray-600 text-2xl mb-8 "
            >
              Full Stack Web Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center space-x-4"
            >
              <a 
                href="https://github.com/Gauravthkaur" 
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors custom-link"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/gaurav-kumar-647109305/" 
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors custom-link"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ... (rest of the sections remain the same) */}

        {/* Custom styles */}
        <style jsx>{`
          .custom-hero {
            --stripe-color: rgba(255, 255, 255, 0.15);
            --stripes: repeating-linear-gradient(
              100deg,
              var(--stripe-color) 0%,
              var(--stripe-color) 7%,
              transparent 7%,
              transparent 10%
            );
            --rainbow: linear-gradient(
              100deg,
              rgba(96, 165, 250, 0.3) 0%,
              rgba(232, 121, 249, 0.3) 25%,
              rgba(94, 234, 212, 0.3) 50%,
              rgba(96, 165, 250, 0.3) 75%
            );
            background-image: var(--stripes), var(--rainbow);
            background-size: 300%, 200%;
            background-position: 0 0, 0 0;
            animation: moveBackground 20s linear infinite;
          }

          .custom-hero-after {
            content: "";
            background-image: var(--stripes), var(--rainbow);
            background-size: 200%, 100%;
            animation: moveBackground 15s linear infinite;
            mix-blend-mode: overlay;
          }

          .gradient-text {
            background: linear-gradient(45deg, #60a5fa, #e879f9, #5eead4);
            background-size: 200% 200%;
            animation: gradientAnimation 5s ease infinite;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
          }

          @keyframes moveBackground {
            0% { background-position: 0% 0%, 0% 0%; }
            100% { background-position: 100% 0%, 100% 0%; }
          }

          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
 

        {/* About Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="pt-10 pb-10 bg-gray-50 dark:bg-gray-800" 
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">About Me</h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 space-y-6">
            <h1>👋 Hello, I'm Gaurav Kumar</h1>
            <p>Welcome to my portfolio! I'm a 3rd year B.Tech (CSE) student with a burning passion for web development. My journey in the world of coding is driven by curiosity and a desire to bring ideas to life through technology.</p>

            <p>🚀 <strong>My Focus:</strong> I'm currently immersing myself in the <span class="highlight">MERN stack</span>, excited by the possibilities it offers in creating dynamic and responsive web applications.</p>
            <p>💡 <strong>Learning Journey:</strong> Every day is a new opportunity to learn and grow. I'm constantly exploring new concepts, from front-end design principles to back-end architectures. The more I learn, the more I realize there is to discover!</p>

             <p>🌱 <strong>Project-Based Learning:</strong> I believe in learning by doing. Here, you'll find a collection of my projects - each one representing a step in my journey and a new challenge I've embraced. These projects aren't just code; they're milestones in my growth as a developer.</p>

            <p>🔍 <strong>What I'm Working On:</strong> Currently, I'm focused on building real-world applications that solve practical problems. Each project is an opportunity to apply what I've learned and push my boundaries a little further.</p>
              <div className="mt-8 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                >
                  View My Work
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="py-20 bg-white dark:bg-gray-900"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillCategory, index) => (
                <motion.div
                  key={skillCategory.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">{skillCategory.category}</h3>
                  <ul className="space-y-2">
                    {skillCategory.items.map((skill) => (
                      <li key={skill} className="flex items-center text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="py-20 bg-gray-50 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.demo} className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                    <a href={project.github} className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                      <Github size={20} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
        className="py-20 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Get in Touch</h2>
          <div className="max-w-lg mx-auto">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-white">Name</label>
                <input type="text" name="user_name" id="user_name" required className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
                <input type="email" name="user_email" id="user_email" required className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white">Message</label>
                <textarea name="message" id="message" rows="4" required className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Send Message 
                </button>
              </div>
            </form>
            {emailStatus && (
              <p className={`mt-4 text-center ${emailStatus.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                {emailStatus}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center w-full text-slate-200 mt-20">
            <ArrowUp className="w-8 h-8 mb-2" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('home')}
              className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              Go up
            </motion.button>
</div>
      </motion.section>

        {/* Footer - Updated with dark mode */}
        <footer className="bg-gray-300 dark:bg-gray-700 dark:text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="mb-4 md:mb-0">&copy; 2024 Gaurav Tomar. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="https://github.com/Gauravthkaur" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/gaurav-kumar-647109305/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:gaurav079t@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}