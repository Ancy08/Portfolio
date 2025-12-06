import html from "../assets/html.png";
import css from "../assets/css-3.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node-js.png";
import db from "../assets/data-server.png";

function About() {
  return (
    <div className="px-6 py-16 bg-gray-50">
    {/* Heading section */}
      <h2 className="text-4xl font-bold text-orange-500 text-center mb-10">
        About Me
      </h2>

      {/* Introduction & Journey */}
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-700 mb-4 text-lg">
          Hi, I’m <span className="font-bold text-blue-700">Ancy Maria</span>, a MERN stack web developer passionate about building interactive and responsive web applications.
        </p>
        <p className="text-gray-700 mb-4 text-lg">
          I started my career in Human Resource Management, but soon realized my true passion lies in coding. After completing a full-stack web development course, I now focus on turning ideas into real, functional web projects.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold text-blue-500 mb-6">Skills</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <img src={html} alt="HTML" className="w-16 h-16" />
          <img src={css} alt="CSS" className="w-16 h-16" />
          <img src={js} alt="JavaScript" className="w-16 h-16" />
          <img src={react} alt="React" className="w-16 h-16" />
          <img src={node} alt="Node.js" className="w-16 h-16" />
          <img src={db} alt="Database" className="w-16 h-16" />
        </div>
      </div>

      {/* Projects / Achievements */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold text-green-500 mb-6">Projects & Achievements</h3>
        <ul className="text-gray-700 text-lg list-disc list-inside">
          <li>Blog App – Built with React, Node.js, and MongoDB</li>
          <li>Task Manager – Responsive, interactive UI</li>
          <li>Weather App – API integration and dynamic data</li>
        </ul>
      </div>

      {/* Something fun & personal */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold text-purple-500 mb-4">Fun Fact</h3>
        <p className="text-gray-700 text-lg">
          When I’m not coding, I love experimenting with unique curly hair accessories — creativity is everywhere!
        </p>
      </div>

      {/* Call-to-Action */}
      <div className="mt-12 text-center">
        <p className="text-gray-700 mb-4 text-lg">
          Feel free to explore my projects below or reach out to collaborate on exciting opportunities!
        </p>
        <a
          href="/contact" // you can create a Contact page
          className="px-6 py-3 bg-gradient-to-r from-[#FAA116] to-[#df7320] text-white font-bold rounded-md shadow-md
                     hover:from-[#ff5f3e] hover:to-[#fb8c4f] transition-all duration-300 inline-block"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default About;
