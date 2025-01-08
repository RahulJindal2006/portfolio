import React from 'react';
import Pic from '../assets/FormalPicture.jpg';
import Video from '../assets/Introduction.TS.mp4'
import Video2 from '../assets/MainSpeech.mp4'
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="topLeft">
        <img src={Pic} alt="Formal" className="image" />
      </div>
      <div className="topRight">
        <h1> ABOUT ME</h1>
        <p>
          My name is Rahul Jindal, and I am an aspiring Computer Science and Business Administration major at Wilfrid Laurier University. 
          During high school, I was able to accumulate honors every single year, as well as maintain an exceptional 4.0 GPA in high school,
          and receive the prestigious award of Valedictorian.
        </p>
        <p>
        ‎ 
        </p>
        <p>
          I am driven by my lifelong love for coding, with proficiency in various coding
          languages such as C++, Java, Python, HTML, and CSS. I aspire to become a professional coder, able to create global solutions to a
          variety of problems, and share my knowledge to benefit future generations.
          
        </p>
        <p>
        ‎ 
        </p>
        <p>
          Besides coding and academics, I find peace in playing
          the guitar and ukulele, and painting different sceneries with my family. I've been able to accomplish success in learning basic
          life skills such as swimming by completing "Swimming Level 3 Teen Splash," a program designed for teenagers to improve their
          swimming skills and water safety. Additionally, I advocate for a healthy lifestyle, regularly engaging in swimming, meditation,
          early morning jogs, daily gym visits, and some boxing/MMA on the side. 

        </p>
        <p>
        ‎ 
        </p>
        <p>  
          My interests extend to sports, including badminton,
          table tennis, tennis, and soccer, where I am constantly going to recreational clubs to play with my friends, and I am actively
          involved in my school for different business case competitions to help further enhance my communication and critical thinking
          skills. I've honed valuable skills, including time management and communication, overcoming different challenges.

        </p>
        <p>
        ‎ 
        </p>
        <p>
        
          In middle school, I represented the entire school in a speech eloquence competition, which further played a crucial role in
          improving my extroverted skills and helping me to present well-rounded speeches. The dedication and hard work I've put in
          throughout the years were recognized in high school when I was chosen as the person who would present the graduating
          class's speech, an honor that reflects not only my personal efforts and skills but also the support and encouragement
          from my peers, teachers, and family.
        </p>
      </div>
      <div className="bottomLeft">
        <video controls className="video">
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className="bottomRight">
        <video controls className="video">
          <source src={Video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default About;
