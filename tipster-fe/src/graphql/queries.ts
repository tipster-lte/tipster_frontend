import { gql } from '@apollo/client';

export const GET_MATCH_DETAILS = gql`
  query GetMatchDetails($matchId: ID!) {
    match(id: $matchId) {
      id
      homeTeam {
        name
        logoUrl
      }
      awayTeam {
        name
        logoUrl
      }
      startTime
      venue
      competition {
        name
        logoUrl
      }
    }
  }
`;

export const GET_PREDICTION = gql`
  query GetPrediction($matchId: ID!) {
    prediction(id: $matchId) {
      id
      predictedGoalsHome
      predictedGoalsAway
      probabilityHomeWin
      probabilityDraw
      probabilityAwayWin
    }
  }
`;
