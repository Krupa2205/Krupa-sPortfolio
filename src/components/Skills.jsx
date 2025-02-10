import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "ReactJS", "TailwindCSS",
    "NodeJS", "MongoDB", "Firebase", "NextJS", "ExpressJS",
    "Github"
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Innovative Web Developer | Google Cloud Arcade Enthusiast '24</p>
              <div className="skill-grid">
                {skills.map((skill, index) => (
                  <button key={index} className="skill-btn">{skill}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />

      <style jsx>{`
        .skill-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 15px;
          justify-content: center;
          margin-top: 20px;
        }

        .skill-btn {
          background: linear-gradient(45deg, #2D336B, #DA0C81);
          color: white;
          font-size: 16px;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          padding: 10px 20px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 15px rgba(224, 46, 255, 0.27);
        }

        .skill-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(255, 46, 99, 0.7);
        }
      `}</style>
    </section>
  );
};
