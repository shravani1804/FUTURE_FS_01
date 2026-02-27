import "./Contact.css";
import { useEffect } from "react";

function Contact() {

  useEffect(() => {
    const particles = document.querySelectorAll(".particles span");

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      particles.forEach((particle, index) => {
        const speed = (index % 5) + 1;
        particle.style.transform = `translate(${x / (80 * speed)}px, ${y / (80 * speed)}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="contact-page">

      {/* Background Big Text */}
      <div className="contact-bg-text">
        CONNECT
      </div>

      {/* Particles */}
      <div className="particles">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <div className="contact-container">

        <div className="contact-left">
          <h1>LET'S CONNECT</h1>
          <p>
            I am open to development opportunities, collaborations,
            and meaningful conversations about technology and innovation.
          </p>
        </div>

        <div className="contact-right">
          <div className="contact-card">
            <h3>Contact Information</h3>

            <p><span>Phone:</span> 7483547823</p>
            <p><span>Email:</span> shravanishashiprasad@gmail.com</p>
            <p><span>Location:</span> Bangalore, India</p>
            <p>
              <span>LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/shravani-s"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/shravani-s
              </a>
            </p>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Contact;