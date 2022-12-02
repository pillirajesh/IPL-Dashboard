// Write your code here

import './index.css'

const MatchCard = props => {
  const {eachCardDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = eachCardDetails

  const yesOrNo = eachCardDetails.matchStatus

  const change = yesOrNo === 'Won' ? 'match-status' : 'color'

  return (
    <li className="list-container">
      <div>
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="winning-image"
        />
        <p className="card-heading">{competingTeam}</p>
        <p className="status">{result}</p>
        <p className={change}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
