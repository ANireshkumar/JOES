
import PropTypes from 'prop-types'
const UserData = [
  {
    name:"Niresh Kumar",
    profile:"images/image3.jpg",
    city:"Chennai",
    description:"Front-end Developer",
    skills:["UI/UX","Front End Developer", "Html", "Css", "JavaScript","React","Node"],
    online:true
  },
  {
    name:"Jhon Doe",
    profile:"images/image2.jpg",    city:"Chennai",
    description:"Front-end Developer",
    skills:["UI/UX","Front End Developer", "Html", "Css", "JavaScript","React","Node"],
    online:true
  },
  {
    name:"Mani",
    profile:"images/image1.jpg",
        city:"Chennai",
    description:"Front-end Developer",
    skills:["UI/UX","Front End Developer", "Html", "Css", "JavaScript","React","Node"],
    online:false
  },
  {
    name:"Mohit",
    profile:"images/image3.jpg",
        city:"Chennai",  
    description:"Front-end Developer",
    skills:["UI/UX","Front End Developer", "Html", "Css", "JavaScript","React","Node"],
    online:true
  }
]



function User(props){
  return <div className="Card-container">
    <span className={props.online ? "online" : "offline"}>{props.online ? "Online" : "Offline"}</span>
    <img src={props.profile}  className="img" alt="" />
    <h3>{props.name}</h3>
    <h3>{props.city}</h3>
    <p>{props.description}</p>
    <div className="buttons">
      <button className="primary">Message</button>
      <button className="primary outline">Follow</button>
    </div>
    <div className="skills">
      <h6>Skills</h6>
      <ul>
        {props.skills.map((skill , index) => <li key={index}>{skill}
          
        </li>)}
      </ul>
    </div>
  </div>
}
export const UserCard = () => {
  return (
    
/*       <User name= "Niresh Kumar" city = "Chennai"  description = " Front-end Developer" skills = {[
        "UI/UX","Front End Developer", "Html", "Css", "JavaScript","React","Node"
      ]} online={false} profile="images/image2.jpg"/> */
    
      <>{UserData.map((user , index) => <User key={index} {...user}/>)}</>
  )
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  online: PropTypes.bool.isRequired
}