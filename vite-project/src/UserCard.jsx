


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
    
      <User name= "Niresh Kumar" city = "Chennai"  description = " Front-end Developer" skills = {[
        "UI/UX","Front End Developer", "Html", "Css", "JavaScript","React","Node"
      ]} online={false} profile="images/image2.jpg"/>
    
  )
}
