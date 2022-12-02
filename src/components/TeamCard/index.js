// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeamDetails} = props
  const {id, name, teamImageUrl} = eachTeamDetails
  return (
    <Link to={`team-matches/${id}`} className="link">
      <li className="list-container3">
        <div>
          <div className="teams-container">
            <img src={teamImageUrl} alt={name} className="team-image" />
            <p className="name">{name}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
