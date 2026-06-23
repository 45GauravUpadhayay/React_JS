import React from "react";

const User = (props) => {
  return (
    <div className="card">
      <div className="card-top">
        <img
          src={props.profilePic}
          alt="profile"
          className="profile-img"
        />
      </div>

      <div className="card-content">
        <h2>{props.name}</h2>

        <h4 className="location">📍 {props.city}</h4>

        <p className="desc">
          {props.about}
        </p>

        <div className="btn-group">
          <button>Message</button>
          <button>Follow</button>
        </div>

        <hr />

        <div className="skills">
          <h3>SKILLS</h3>

          <div className="skill-list">
  {props.skills.map((skill, index) => (
    <span key={index}>{skill}</span>
  ))}
</div>
        </div>
      </div>
    </div>
  );
};

export default User;