import React, { useEffect, useState } from "react";
import { PredictionCard } from "./predictionCard";
import { getMatchesList } from "@/services/api";
interface IPredictionProps {
  id: number;
  homeTeam: string;
  awayTeam: string;
  date: string;
  prediction: string;
  confidence: number;
  analysis: string;
}

const PredictionsTab = () => {
  const [matches, setDatos] = useState<IPredictionProps[] | undefined>([]);
  useEffect(() => {
    const cargarDatos = async () => {
      const retrievedMatchList = await getMatchesList();
      setDatos(retrievedMatchList);
    };
    cargarDatos();
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {matches?.map((match) => (
        <PredictionCard
          key={match.id}
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
          date={match.date}
          prediction={match.prediction}
          confidence={match.confidence}
        />
      ))}
    </div>
  );
};

export { PredictionsTab };
