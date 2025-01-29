import axios from "axios";

import mockMatches from "@/lib/mockMatches.json";
import mockTeams from "@/lib/mockTeams.json";
const api = axios.create({
  baseURL: "https://sockerguru/api",
});

export const getTeamsList = async () => {
  try {
    const response = await api.get("/teams");
    response.data = mockTeams;
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMatchesList = async () => {
  try {
    // const response = await api.get("/matches");

    // return response.data;

    return mockMatches;
  } catch (error) {
    console.error(error);
  }
};

export const getPredictions = async (
  awayTeamId: number,
  homeTeamId: number
) => {
  try {
    const response = await api.get(
      `/predictions?awayTeam=${awayTeamId}&homeTeam=${homeTeamId}`
    );
    const mockPrediction = {
      homeTeam: "Manchester United",
      awayTeam: "Chelsea",
      date: "2021-10-24T14:00:00Z",
      prediction: "Home",
      confidence: 80,
    };
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getComparationTeams = async (team1: string, team2: string) => {
  try {
    const response = await api.get(
      `/comparations?team1=${team1}&team2=${team2}`
    );
    const mockComparation = [
        {
            team1: "Manchester United",
            team2: "Chelsea",
            comparison: "Manchester United has won 3 out of the last 5 matches.",
            
        },
        
    ]
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
