import "./About.css";
import { useEffect, useState } from "react";

function About() {
  const fullText =
    "I am Shravani S, a final-year Computer Science Engineering student at CMR University with an 8.90 CGPA.";

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page">

      <section className="about-intro">

        <div className="vertical-line"></div>

        <h1 className="about-heading">ABOUT ME</h1>

        <div className="about-text">

          <p className="typing-line">
            {typedText}
          </p>

          <p>
            I am driven by a strong interest in 
            <span> software development</span> and a commitment to building 
            <span> scalable</span>, <span>efficient</span>, and 
            thoughtfully designed applications that solve real-world problems.
          </p>

          <p>
            With a solid academic foundation and hands-on project experience,
            I continuously strive to strengthen my 
            <span> technical depth</span>, 
            <span> problem-solving abilities</span>, and 
            <span> system design thinking</span>.
          </p>

          <p>
            I am actively seeking 
            <span> development roles</span> where I can apply my skills,
            take on challenging problems, and contribute meaningfully to
            innovative and growth-oriented teams.
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;