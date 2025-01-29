"use client";

import { Header } from "@/components/header";
import { PredictionsTab } from "@/components/predictions/predictionsTab";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, GitCompareArrows, Brain } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <Header />

        <Tabs defaultValue="predictions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
            <TabsTrigger value="predictions">
              <TrendingUp className="mr-2 h-4 w-4" />
              Predictions
            </TabsTrigger>
            <TabsTrigger value="matches">
              <GitCompareArrows className="mr-2 h-4 w-4" />
              Compare Teams
            </TabsTrigger>
            <TabsTrigger value="analysis">
              <Brain className="mr-2 h-4 w-4" />
              Analysis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="predictions">
            <PredictionsTab />
          </TabsContent>

          <TabsContent value="matches">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Compare Teams</CardTitle>
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
