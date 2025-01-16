"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, TrendingUp, History, Brain } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="h-12 w-12 text-primary" />
            <h1 className="text-4xl font-bold">Soccer Guru</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced AI-powered soccer predictions using comprehensive team statistics
            and historical data analysis
          </p>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="predictions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
            <TabsTrigger value="predictions">
              <TrendingUp className="mr-2 h-4 w-4" />
              Predictions
            </TabsTrigger>
            <TabsTrigger value="matches">
              <History className="mr-2 h-4 w-4" />
              Recent Matches
            </TabsTrigger>
            <TabsTrigger value="analysis">
              <Brain className="mr-2 h-4 w-4" />
              Analysis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="predictions">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <PredictionCard
                homeTeam="Manchester United"
                awayTeam="Chelsea"
                date="2024-04-15"
                prediction="Home Win"
                confidence={85}
              />
              <PredictionCard
                homeTeam="Barcelona"
                awayTeam="Real Madrid"
                date="2024-04-16"
                prediction="Draw"
                confidence={65}
              />
              <PredictionCard
                homeTeam="Bayern Munich"
                awayTeam="Dortmund"
                date="2024-04-17"
                prediction="Away Win"
                confidence={75}
              />
            </div>
          </TabsContent>

          <TabsContent value="matches">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Match Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Add match results here */}
                    <p className="text-muted-foreground">Coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analysis">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Team Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Add team analysis here */}
                    <p className="text-muted-foreground">Coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

function PredictionCard({
  homeTeam,
  awayTeam,
  date,
  prediction,
  confidence,
}: {
  homeTeam: string;
  awayTeam: string;
  date: string;
  prediction: string;
  confidence: number;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          {homeTeam} vs {awayTeam}
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          {new Date(date).toLocaleDateString()}
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium">Prediction</p>
            <p className="text-2xl font-bold">{prediction}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Confidence</p>
            <div className="flex items-center gap-2">
              <div className="h-2 flex-1 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${confidence}%` }}
                />
              </div>
              <span className="text-sm font-medium">{confidence}%</span>
            </div>
          </div>
          <Button className="w-full">View Details</Button>
        </div>
      </CardContent>
    </Card>
  );
}