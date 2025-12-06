import { User } from 'lucide-react'
import React from 'react'
import Card from './components/Card'
import Myuser from './components/Myuser'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://media.licdn.com/dms/image/v2/D4D12AQF083mMinXCtQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686067344413?e=2147483647&v=beta&t=nm30MQ8OI-9VSUXR95shyABNZfOmt-f5f9R4zf9_yeU",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$203/hr",
    location: "Mumbai, Andheri"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$180/hr",
    location: "Bangalore, Whitefield"
  },
  {
    brandLogo: "https://i.pinimg.com/originals/95/d9/53/95d9534fab30d2a09cab60a9b2d65ec3.png",
    companyName: "Meta",
    datePosted: "1 day ago",
    post: "Product Designer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$210/hr",
    location: "San Francisco, CA"
  },
  {
    brandLogo: "https://cdn-icons-png.freepik.com/512/0/747.png",
    companyName: "Apple",
    datePosted: "6 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$250/hr",
    location: "Cupertino, CA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$195/hr",
    location: "Remote, Global"
  },
  {
    brandLogo: "https://www.logo.wine/a/logo/Microsoft_Store/Microsoft_Store-Logo.wine.svg",
    companyName: "Microsoft",
    datePosted: "8 days ago",
    post: "Azure Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$260/hr",
    location: "Hyderabad, Hitech City"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GYDIvxL-beJ8TFMwamtsRNTKncCUMcXNdA&s",
    companyName: "Tesla",
    datePosted: "4 days ago",
    post: "Embedded Systems Engineer",
    tag1: "On-site",
    tag2: "Mid Level",
    pay: "$220/hr",
    location: "Austin, Texas"
  },
  {
    brandLogo: "https://www.logo.wine/a/logo/Nvidia/Nvidia-Light-Vertical-Dark-Background-Logo.wine.svg",
    companyName: "Nvidia",
    datePosted: "9 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Lead Level",
    pay: "$300/hr",
    location: "Santa Clara, CA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobT6Nq7W-FJnK5lLapZlwySLwB0W4sKCYDg&s",
    companyName: "OpenAI",
    datePosted: "7 days ago",
    post: "ChatGPT Prompt Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$270/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/250px-Spotify_App_Logo.svg.png",
    companyName: "Spotify",
    datePosted: "5 days ago",
    post: "UX Researcher",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$175/hr",
    location: "Stockholm, Sweden"
  }
];
console.log(jobOpenings)
  return (
    <div className='per'>
      {jobOpenings.map(function(el){
        return <Card companyName={el.companyName} brand={el.brandLogo} post={el.post} date ={el.datePosted} tag1={el.tag1} tag2={el.tag2}  pay ={el.pay} location={el.location} />
      })}
    
    </div>
  )
}

export default App
