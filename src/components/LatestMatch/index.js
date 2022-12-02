// Write your code here
import './index.css'

const LatestMatch = props => {
  const {LatMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = LatMatchDetails

  return (
    <>
      <h1 className="latest-matches">Latest Matches</h1>
      <div className="latest-match">
        <div>
          <p>{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="venue">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="logo"
        />
        <div>
          <p className="innings">First Innings</p>
          <p className="venue">{firstInnings}</p>
          <p className="innings">Second Innings</p>
          <p className="venue">{secondInnings}</p>
          <p className="man-of-the-match">Man of The Match</p>
          <p className="venue">{manOfTheMatch}</p>
          <p className="umpires">Umpires</p>
          <p className="venue">{umpires}</p>
        </div>
      </div>
    </>
  )
}

export default LatestMatch
