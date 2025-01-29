import { Trophy } from "lucide-react";

function Header() {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Trophy className="h-12 w-12 text-primary" />
        <h1 className="text-4xl font-bold">Soccer Guru</h1>
      </div>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Advanced AI-powered soccer predictions using comprehensive team
        statistics and historical data analysis
      </p>
    </div>
  );
}
export { Header };
