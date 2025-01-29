"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trophy, ContrastIcon as Versus } from "lucide-react";
import teams from "@/lib/mockTeams.json";
import mockComparisons from "@/lib/mockTeams.json";



export default function ComparePage() {
  const [team1, setTeam1] = useState<string>("");
  const [team2, setTeam2] = useState<string>("");
  const [comparison, setComparison] = useState<string>("");
  const [loading, setLoading] = useState(false);

  function compareTeams() {
    if (!team1 || !team2) return;

    setLoading(true);
    setTimeout(() => {
      const comparisonText =
        mockComparisons[team1]?.[team2] ||
        "Comparison data not available for these teams. Please try different teams.";
      setComparison(comparisonText);
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col items-center mb-8">
        <Trophy className="w-16 h-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold text-center mb-2">Soccer Guru</h1>
        <p className="text-xl text-muted-foreground text-center">
          Compare soccer teams using comprehensive statistics and historical
          data
        </p>
      </div>

      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Compare Teams</CardTitle>
          <CardDescription>
            Select two teams to compare their statistics and get detailed
            analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <div className="w-full md:w-2/5">
              <Select value={team1} onValueChange={setTeam1}>
                <SelectTrigger>
                  <SelectValue placeholder="Select first team" />
                </SelectTrigger>
                <SelectContent>
                  {teams.map((team) => (
                    <SelectItem key={team.id} value={team.name}>
                      <span className="mr-2">{team.name}</span>
                      {team.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-center w-full md:w-1/5">
              <Versus className="w-8 h-8 text-muted-foreground" />
            </div>

            <div className="w-full md:w-2/5">
              <Select value={team2} onValueChange={setTeam2}>
                <SelectTrigger>
                  <SelectValue placeholder="Select second team" />
                </SelectTrigger>
                <SelectContent>
                  {teams.map((team) => (
                    <SelectItem key={team.id} value={team.id}>
                      <span className="mr-2">{team.logo}</span>
                      {team.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={compareTeams}
            className="w-full"
            disabled={!team1 || !team2 || loading}
          >
            {loading ? "Analyzing..." : "Compare Teams"}
          </Button>

          {comparison && (
            <div className="mt-8 prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Analysis</h3>
              <div className="whitespace-pre-wrap">{comparison}</div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
