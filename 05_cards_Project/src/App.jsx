import React from 'react'
import Card from "./components/Card";

const App = () => {

  /* Job Openings Details */

  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00hq3T1uhKnLNQxkwd2cHSE4jUrRNASpDulPjoNFVEg&s=10",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcRbaJvhBgd0YgBp_8nLiSylsEjA-79JncguHiPaRBw&s",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZEN2r056LDjjb6IT5qShwFPl4uJy1-BAgP0hGMmiqQ&s=10",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91gke83AgsjipPMZmrsDP0-K7oWgm4ZCkxZNh9Exo3Q&s=10",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStWnkbQJRGsDN6ptgsC2oELi9t5_U4CoP1tEfwJiLZNg&s=10",
    companyName: "Adobe",
    datePosted: "10 days ago",
    post: "UX Researcher",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$100/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrK119yU9UpNb57y6LozJOAkNsZi4UM1a6uDvTD1EMOQ&s=10",
    companyName: "Spotify",
    datePosted: "2 weeks ago",
    post: "UI Designer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$75/hr",
    location: "Delhi, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8hzKh-J239eBGf8MEFx3px3Lx4-Te1OWonP6URyogA&s=10",
    companyName: "Airbnb",
    datePosted: "4 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$115/hr",
    location: "Jaipur, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvUKjFWDizIcm5drqniSODQ5YgztVV0sfUKv6H9tgjyA&s=10",
    companyName: "Uber",
    datePosted: "6 days ago",
    post: "Web Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Agra, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJRfIw7UELA3cTtTie0ZkjEjRdVf1wC33QlFlAEivdQ&s=10",
    companyName: "LinkedIn",
    datePosted: "3 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq7Q44IZaZV_veFoDZeJGgyTiED8noQ5lTNTkxfEqiA&s=10",
    companyName: "Meta",
    datePosted: "1 day ago",
    post: "React UI Developer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$110/hr",
    location: "Kolkata, India",
  },
];


  return (
    <div className='parent'>
      {jobOpenings.map(function (elem,idx){


        return <div key = {idx}>
          <Card company = {elem.companyName} brand = {elem.brandLogo} date = {elem.datePosted} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location}/>
          </div>
      })}



    </div>
  )
}

export default App