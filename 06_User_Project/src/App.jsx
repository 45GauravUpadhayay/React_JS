import React from 'react'
import User from "./components/User"

const App = () => {

  const users = [
  {
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Smith",
    city: "New York",
    about: "Software Engineer",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Emma Johnson",
    city: "London",
    about: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "HTML", "CSS", "Bootstrap"]
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Michael Brown",
    city: "Toronto",
    about: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"]
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Sophia Davis",
    city: "Sydney",
    about: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB", "REST API", "JWT"]
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "William Wilson",
    city: "Berlin",
    about: "Full Stack Developer",
    skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript"]
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Olivia Martinez",
    city: "Paris",
    about: "Software Engineer",
    skills: ["Java", "Spring Boot", "MySQL", "Git", "Docker"]
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "James Anderson",
    city: "San Francisco",
    about: "React Developer",
    skills: ["React", "Redux", "JavaScript", "HTML", "CSS"]
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Ava Taylor",
    city: "Dubai",
    about: "Web Developer",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"]
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Benjamin Thomas",
    city: "Singapore",
    about: "MERN Stack Developer",
    skills: ["MongoDB", "Express", "React", "Node.js", "Git"]
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Mia Clark",
    city: "Tokyo",
    about: "Frontend Engineer",
    skills: ["React", "Next.js", "Tailwind", "TypeScript", "CSS"]
  }
];

  return (
    <div className='users-container'>
      {users.map(function (elem){
        return <User profilePic = {elem.profilePic} name = {elem.name} city = {elem.city} about = {elem.about} skills = {elem.skills} />
      })}
    </div>
  )
}

export default App
