import React, { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Mail, Sun, Moon, Code, Terminal, Wrench, Brain,  } from 'lucide-react';
import {  motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap, Coffee } from 'lucide-react';
import emailjs from '@emailjs/browser'
import { TypeAnimation } from 'react-type-animation';
import Resume from './Resume';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const containerRef = useRef();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  }

  const scrollToSection = (sectionId) => {
    const sectionRef = sectionRefs[sectionId.toLowerCase()];
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId.toLowerCase());
    }
  };



  // List of projects
  const projects = [
    {
      title: 'Employee Management System',
      description: 'A full-stack Employee Management System using CRUD operations with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      demo: 'https://employee-management-system-a5y1v2g8i-gauravthkaurs-projects.vercel.app',
      github: 'https://github.com/Gauravthkaur/Employee-Management-App',
    },
    {
      title: 'User Management App',
      description: 'A productivity app for managing CRUD operations on User and their details using React and API',
      tech: ['React', 'Firebase', 'Material-UI'],
      demo: 'https://user-management-system-delta.vercel.app',
      github: 'https://github.com/Gauravthkaur/User-Management-System',
    },
    {
      title: ' Advanced Weather App',
      description: 'Real-time weather data visualization using external APIs',
      tech: ['React', 'OpenWeather API', 'ChartJS'],
      demo: 'https://weather-app-seven-psi-53.vercel.app',
      github: 'https://github.com/Gauravthkaur/weather_app',
    },
    {
      title: 'Rock Paper Scessor Game',
      description: ' Rock, Paper, Scissors game implemented with HTML (21.1%), CSS (34.3%), and JavaScript (44.6%)',
      tech: ['React', 'OpenWeather API', 'ChartJS'],
      demo: 'https://github.com/Gauravthkaur/Rock_Paper_seccior_game',
      github: 'https://github.com/Gauravthkaur/weather_app',
    },
    {
      title: 'Morder-Website UI ',
      description: 'Modern, responsivewebsite  built with HTML (49.9%), CSS (46.4%), and JavaScript (3.7%).',
      tech: ['React', 'OpenWeather API', 'ChartJS'],
      demo: 'https://github.com/Gauravthkaur/Mordern_responsive_site',
      github: 'https://github.com/Gauravthkaur/weather_app',
    },
  ];

  // Send Email API

  const SkillsSection = () => {
    const skillCategories = [
      {
        icon: <Code className="w-8 h-8" />,
        title: "Frontend",
        skills: ['React', 'HTML/CSS', 'JavaScript', 'TailwindCSS'],
        color: "from-blue-500 to-cyan-500"
      },
      {
        icon: <Terminal className="w-8 h-8" />,
        title: "Backend",
        skills: ['Node.js', 'Express', 'MongoDB', 'JWT'],
        color: "from-purple-500 to-pink-500"
      },
      {
        icon: <Wrench className="w-8 h-8" />,
        title: "Tools",
        skills: ['Git/Github', 'APIs', 'VS Code', 'Postman'],
        color: "from-green-500 to-emerald-500"
      },
      {
        icon: <Brain className="w-8 h-8" />,
        title: "Other",
        skills: ['Analytical thinking', 'Communication', 'Problem Solving', 'Public Speaking'],
        color: "from-orange-500 to-yellow-500"
      }
    ];

    return (
      <section ref={sectionRefs.skills} id='skills'className="py-20 px-4 relative overflow-hidden ">
        <motion.h2

          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <motion.div
                className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="relative p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
                whileHover={{
                  rotateY: 10,
                  rotateX: 10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        whileHover={{ scale: 1.5 }}
                      />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };



  const ContactForm = () => {
    const [formStatus, setFormStatus] = useState('');
    const formRef = useRef(null);

    const handleSubmit = (e) => {
      e.preventDefault();

      // Get form elements
      const form = e.target;
      const nameInput = form.elements.name;
      const emailInput = form.elements.email;
      const subjectInput = form.elements.subject;
      const messageInput = form.elements.message;

      // Validate inputs
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      
      // Validate form
      if (!name || !email || !subject || !message) {
        setFormStatus('error');
        return;
      }
      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if (!emailRegex.test(email)) {
        setFormStatus('invalid-email');
        return;
      }

      // Set sending status
      setFormStatus('sending');

      // Send email using EmailJS
      emailjs
        .sendForm(
          'service_69ack9p',
          'template_9su4hiy',
          formRef.current,
          {
            publicKey: '61L9jgIKZHwYDmVnm',
          }
        )
        .then(
          (response) => {
            // Successful submission
            setFormStatus('success');

            // Reset form
            formRef.current.reset();

            // Clear status after 3 seconds
            setTimeout(() => {
              setFormStatus('');
            }, 3000);
          },
          (error) => {
            // Error handling
            console.error('Email send failed:', error);
            setFormStatus('send-error');

            // Clear error status after 3 seconds
            setTimeout(() => {
              setFormStatus('');
            }, 3000);
          }
        );
    };

    return (
      <section className="min-h-screen py-20 px-6 relative overflow-hidden bg-gray-100 dark:bg-gray-900 "
      ref={sectionRefs.contact}
     
      >
        {/* Animated Background */}


        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text dark:bg-slate-100 bg-slate-800"
          >
            Let's Connect
          </motion.h2>

          {/* Main Content Container */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Column - Animation and Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-8"
            >
              {/* Lottie Animation Container */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1.5, y: 0 }}

                viewport={{ once: true }}
                transition={{ delay: .8 }}
              >
                <div className="relative w-full max-w-md mx-auto aspect-square"

                >

                  <DotLottieReact
                    src="https://lottie.host/307b22aa-5ccf-4b94-935b-fe0a831051b3/15LvgskH1T.lottie"
                    loop
                    autoplay
                    className="w-full h-full
                  "
                  />
                </div>
              </motion.div>
            </motion.div>



            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                {/* Form Glow Effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* Contact Form */}
                <form
                  
                  onSubmit={handleSubmit}
                  className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl space-y-6"
                >
                  {/* Status Message */}
                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg text-center ${formStatus === "success"
                          ? "bg-green-100/30 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                          : "bg-red-100/30 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                        }`}
                    >
                      {formStatus === "success" ? "Message sent successfully!" : "Please check your inputs."}
                    </motion.div>
                  )}

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div whileHover={{ scale: 1.02 }} className="group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full p-3 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100"
                      />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} className="group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full p-3 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100"
                      />
                    </motion.div>
                  </div>

                  {/* Subject Field */}
                  <motion.div whileHover={{ scale: 1.02 }} className="group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                      className="w-full p-3 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100"
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div whileHover={{ scale: 1.02 }} className="group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      rows="4"
                      className="w-full p-3 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 resize-none"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center">
                      {formStatus === "sending" ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : "Send Message"}
                    </span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );

  };
  const stats = [
    { icon: <Code className="w-5 h-5" />, label: 'Tech Stack', value: '10+' },
    { icon: <Briefcase className="w-5 h-5" />, label: 'Projects', value: '8+' },
    { icon: <GraduationCap className="w-5 h-5" />, label: 'Learning', value: '2 Years' },
    { icon: <Coffee className="w-5 h-5" />, label: 'Coffee/day', value: '3 Cups' },
  ];

  // Animated background shapes
  const BackgroundShapes = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [-100, 100],
            y: [-100, 100],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [200, -200],
            y: [200, -200],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-pink-500/10 blur-3xl"
          animate={{
            x: [-150, 150],
            y: [150, -150],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    );
  };

  // Enhanced scroll progress indicator
  const ScrollProgress = () => {
    return (
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left z-50"
        style={{ scaleX }}
      />
    );
  };

  // Enhanced navigation with animations
  const Navigation = () => {
    const sections = ['About', 'Skills', 'Projects', 'Contact'];



    return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-40"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text cursor-pointer"
            >
              GT
            </motion.div>
            <div className="flex items-center space-x-6">
              {sections.map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 ${activeSection === section.toLowerCase() ? 'text-blue-500 dark:text-blue-400' : ''
                    }`}
                >
                  {section}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
              >
                {darkMode ? <Sun className="w-5 h-5 text-white " /> : <Moon className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
    );
  };

  // Enhanced social icons with animations
  const SocialIcons = () => {
    const iconVariants = {
      hover: {
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.5 }
      }
    };

    const emailParams = {
      to: 'gaurav079@example.com',
      subject: 'Reaching out regarding your portfolio',
      body: 'Hi Gaurav,\n\nI saw your portfolio and would like to connect.\n\nBest regards,'
    };

    // Create mailto URL with parameters
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailParams.to}&su=${encodeURIComponent(emailParams.subject)}&body=${encodeURIComponent(emailParams.body)}`;

    return (
      <motion.div
        className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.a
          href="https://github.com/Gauravthkaur"
          variants={iconVariants}
          whileHover="hover"
          className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg backdrop-blur-md"
        >
          <Github className="w-6 h-6 dark:text-white" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/gaurav-tomar-123456789/"
          variants={iconVariants}
          whileHover="hover"
          className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg backdrop-blur-md"
        >
          <Linkedin className="w-6 h-6 dark:text-white" />
        </motion.a>
        <motion.a
          href={mailtoLink}
          variants={iconVariants}
          whileHover="hover"
          className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg backdrop-blur-md"
        >
          <Mail className="w-6 h-6 dark:text-white" />
        </motion.a>
      </motion.div>
    );
  };

  // Enhanced project card with 3D effects
  const ProjectCard = ({ project }) => (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="relative p-6 bg-white dark:bg-gray-800 rounded-lg"
        whileHover={{
          rotateY: 10,
          rotateX: 10,
          scale: 1.02,
          transition: { type: "spring", stiffness: 300 }
        }}
      >
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <motion.a
            href={project.demo}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-500 hover:text-blue-700"
          >
            Live Demo →
          </motion.a>
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-purple-500 hover:text-purple-700"
          >
            GitHub →
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <BackgroundShapes />
      <ScrollProgress />
      <Navigation />
      <SocialIcons />

      {/* Main content sections */}
      <div className="pt-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          id='home'
          ref={sectionRefs.home}
          transition={{ duration: 1 }}
          className="min-h-screen flex flex-col items-center justify-center relative px-4"
        >
          <motion.div
            className="text-center z-10 mb-12"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 1, bounce: 0.5 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Gaurav Tomar
            </motion.h1>
            <motion.p
              ref={sectionRefs.about}
              className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div>
                <TypeAnimation
                  sequence={[
                    'I`am Full Stack Developer',
                    1000,
                    'I am Programer',
                    1000,
                    'I am Reps-Buster',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '2em', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </div>
            </motion.p>
          </motion.div>

          {/* Summary Card */}
          <motion.div

            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}

            transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
            className="relative max-w-4xl w-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000" />
            <div className="relative bg-gray-100 dark:bg-gray-800 rounded-xl shadow-xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
                  >
                    <div className="mb-2 p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                      {stat.icon}
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                      {stat.value}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Summary Text */}
              <motion.p

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="mt-8 text-center text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                <h2>About</h2>
                Passionate Full Stack Developer with expertise in React and Node.js.
                Dedicated to crafting elegant solutions and delivering exceptional user experiences.
                Let's build something amazing together!
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="mt-8 flex justify-center gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}  // 
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium"
                >
                  View Projects
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg font-medium"
                >
                  Contact Me
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <section id='projects' ref={sectionRefs.projects} className="py-20 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Additional sections would go here... */}
        <SkillsSection ref={sectionRefs.skills} />
        <ContactForm />
        
        <Resume />
      </div>
    </div>
  );
};

export default Portfolio;