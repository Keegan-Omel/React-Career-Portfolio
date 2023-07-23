import React from 'react';
import profile from '../../assets/small/portraits/full.fern.prep.american design.jpg'
function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img
            style={{
              width: "500px",
              height: "400px",
              borderRadius: "50%",
            }}
            src={profile}
            alt="Official headshot of Keegan Omel"
          />
        </div>
        <p>     <h2>Hi, I'm Keegan, a Full-Stack Web Application Developer</h2>

<p> a passionate and highly skilled graduate from the prestigious University of Toronto, I specialize in crafting cutting-edge web applications that deliver seamless user experiences and drive business growth. With a diverse skill set and an insatiable curiosity for emerging technologies, I thrive on building innovative solutions that make a tangible impact.</p>

<h2>Mastering the Modern Web Stack</h2>

<p>My expertise spans a wide array of technologies, allowing me to create robust applications that leverage the latest tools and frameworks. With proficiency in React, Progressive Web Applications (PWAs), and state management, I ensure that users enjoy responsive, high-performance interfaces that feel like native experiences.</p>

<h2>Data Management and Databases</h2>

<p>In the realm of data, I have experience with NoSQL databases such as MongoDB and Compass, as well as SQL databases like MySQL. I excel in designing scalable database structures and have experience with Object Relational Mapping (ORM), enabling smooth interactions between application logic and data storage.</p>

<h2>Empowering Backend Development</h2>

<p>With a strong foundation in Express.js and Node.js, I craft powerful backend architectures that efficiently handle data processing, API integrations, and overall system functionality. My proficiency in Object-Oriented Programming (OOP) ensures code maintainability, extensibility, and robustness.</p>

<h2>MERN and Beyond</h2>

<p>Working extensively with the MERN stack (MongoDB, Express.js, React, Node.js), I have built numerous successful projects that showcase the seamless integration of frontend and backend technologies. Additionally, my growing expertise in GraphQL empowers me to create flexible and efficient APIs, enhancing data retrieval and optimization.</p>

<h2>Exploring the Frontiers</h2>

<p>While my current skill set is already comprehensive, I never stop learning. My curiosity has led me to explore the exciting realms of Artificial Intelligence (AI), Machine Learning (ML), and FinTech. As I delve deeper into these fields, I aim to integrate their powerful capabilities into my future projects, pushing the boundaries of what's possible in web development.</p>

<h2>Projects that Speak Volumes</h2>

<p>From dynamic e-commerce platforms to interactive social applications, my portfolio is a testament to my ability to transform ideas into functional, elegant, and user-centric products. Each project highlights the strategic use of technology, emphasizing my dedication to delivering top-tier solutions.</p>

<h2>Collaboration and Growth</h2>

<p>I firmly believe in the value of collaboration and continuous learning. As part of any team, I actively contribute my expertise while eagerly absorbing new perspectives. My commitment to professional growth enables me to stay ahead of industry trends, always seeking out the next challenge to tackle.</p>

<h2>Let's Build Something Extraordinary</h2>

<p>If you're looking for a versatile, dedicated Full-Stack Web Application Developer to bring your visions to life, let's connect. I'm excited to combine my passion for technology with my commitment to excellence to create extraordinary digital experiences together.</p>
        </p>
       
      </div>
    </section>
  );
}

export default About;
