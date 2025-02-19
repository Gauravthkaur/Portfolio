import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const ScrollMotionProjects = () => {
  const projects = [
    {
      title: 'Employee Management System',
      description: 'A full-stack Employee Management System using CRUD operations with React and Node.js. Streamline HR processes with features for employee data management, attendance tracking, and performance monitoring.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      demo: 'https://employee-management-system-o4sxi58f3-gauravthkaurs-projects.vercel.app',
      github: 'https://github.com/Gauravthkaur/Employee-Management-System',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'User Management App',
      description: 'A productivity app for managing daily User and Their Detail. Using complete CRUD operations with MongoDB. Features include user authentication, data storage, and real-time updates.',
      tech: ['React', 'Firebase', 'Material-UI'],
      demo: 'https://user-management-system-delta.vercel.app',
      github: 'https://github.com/Gauravthkaur/User-Management-System',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Advanced Weather App',
      description: 'Real-time weather data visualization using external APIs. Get accurate weather forecasts, interactive maps, and detailed meteorological data with a clean, intuitive interface.',
      tech: ['React', 'OpenWeather API', 'ChartJS'],
      demo: 'https://weather-app-seven-psi-53.vercel.app',
      github: 'https://github.com/Gauravthkaur/weather_app',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <Parallax pages={projects.length + 2}>
      {/* Intro Section */}
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Scroll down to explore my work
            </p>
          </div>
        </div>
      </ParallaxLayer>

      {/* Project Pages */}
      {projects.map((project, index) => (
        <ParallaxLayer key={project.title} offset={index + 1} speed={0.5}>
          <div className="min-h-screen flex items-center justify-center p-8">
            <div className="max-w-4xl w-full">
              <div className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-1000`} />
                <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-4 py-2 text-sm bg-gradient-to-r ${project.color} text-white rounded-full font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.demo}
                      className={`px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-lg font-medium transform transition hover:scale-105`}
                    >
                      View Demo
                    </a>
                    <a
                      href={project.github}
                      className="px-6 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg font-medium transform transition hover:scale-105"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      ))}

      {/* Outro Section */}
      <ParallaxLayer offset={projects.length + 1} speed={0.5}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              More Coming Soon
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Always building, always learning
            </p>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ScrollMotionProjects;
