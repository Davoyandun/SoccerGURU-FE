import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

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

export { PredictionCard };
