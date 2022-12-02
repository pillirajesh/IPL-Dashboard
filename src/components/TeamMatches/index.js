// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamBanner: {}, latestMatch: {}, matchCard: [], isLoading: true}

  componentDidMount() {
    this.getIndividualMatchDetails()
  }

  getIndividualMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }

    const {teamBannerUrl, recentMatches, latestMatchDetails} = updatedData
    this.setState({teamBanner: teamBannerUrl, isLoading: false})

    const details = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
    }
    this.setState({latestMatch: details, isLoading: false})

    const matchCardDetails = recentMatches.map(eachMatchCard => ({
      competingTeamLogo: eachMatchCard.competing_team_logo,
      competingTeam: eachMatchCard.competing_team,
      result: eachMatchCard.result,
      matchStatus: eachMatchCard.match_status,
      id: eachMatchCard.id,
    }))
    this.setState({matchCard: matchCardDetails, isLoading: false})
  }

  render() {
    const {teamBanner, latestMatch, matchCard, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-bg-container">
            <div>
              <img
                src={teamBanner}
                className="team-banner-image"
                alt={teamBanner}
              />
            </div>
            <LatestMatch LatMatchDetails={latestMatch} />
            <ul className="unordered-list1">
              {matchCard.map(eachCard => (
                <MatchCard eachCardDetails={eachCard} key={eachCard.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
