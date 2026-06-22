import React from "react";
import "./User.css";

const User = () => {
  return (
    <div className="card">
      <div className="card-top">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
          alt="profile"
          className="profile-img"
        />
      </div>

      <div className="card-content">
        <h2>Gaurav Upadhayay</h2>

        <h4 className="location">📍 New York</h4>

        <p className="desc">
          UI/UX designer and front-end developer
        </p>

        <div className="btn-group">
          <button>Message</button>
          <button>Follow</button>
        </div>

        <hr />

        <div className="skills">
          <h3>SKILLS</h3>

          <div className="skill-list">
            <span>UI/UX</span>
            <span>Front End Development</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;