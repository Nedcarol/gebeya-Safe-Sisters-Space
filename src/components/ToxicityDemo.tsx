import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Shield, AlertTriangle, CheckCircle, Loader2, Sparkles, Copy, Check } from "lucide-react";

interface AnalysisResult {
  toxicityScore: number;
  categories: {
    name: string;
    score: number;
    detected: boolean;
  }[];
  saferRewrite: string;
}

const exampleMessages = [
  "You're so stupid, no one wants you here. Just leave!",
  "I disagree with your opinion, but I respect your perspective.",
  "You'll never amount to anything. Everyone hates people like you.",
];

const ToxicityDemo = () => {
  const [message, setMessage] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [copied, setCopied] = useState(false);

  const analyzeMessage = async () => {
    if (!message.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const toxicWords = ["stupid", "hate", "never", "leave", "hates", "nothing"];
    const lowerMessage = message.toLowerCase();
    const toxicCount = toxicWords.filter(word => lowerMessage.includes(word)).length;
    const toxicityScore = Math.min(Math.max(toxicCount * 20 + Math.random() * 20, 5), 95);
    
    setResult({
      toxicityScore,
      categories: [
        { name: "Harassment", score: toxicityScore > 50 ? toxicityScore - 10 : 5, detected: toxicityScore > 50 },
        { name: "Hate Speech", score: toxicityScore > 60 ? toxicityScore - 20 : 3, detected: toxicityScore > 60 },
        { name: "Bullying", score: toxicityScore > 40 ? toxicityScore - 5 : 8, detected: toxicityScore > 40 },
        { name: "Threats", score: toxicityScore > 70 ? toxicityScore - 30 : 2, detected: toxicityScore > 70 },
      ],
      saferRewrite: toxicityScore > 30 
        ? "I understand we have different views. Let's try to find common ground and have a respectful conversation about this."
        : "Your message appears to be respectful. Keep communicating positively!",
    });
    
    setIsAnalyzing(false);
  };

  const copyRewrite = () => {
    if (result?.saferRewrite) {
      navigator.clipboard.writeText(result.saferRewrite);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getToxicityColor = (score: number) => {
    if (score < 30) return "text-green-500";
    if (score < 60) return "text-amber";
    return "text-destructive";
  };

  const getToxicityBg = (score: number) => {
    if (score < 30) return "bg-green-500";
    if (score < 60) return "bg-amber";
    return "bg-destructive";
  };

  return (
    <section id="demo" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Live Demo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Try the <span className="gradient-text">Toxicity Scanner</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Paste or type a message below to see real-time AI analysis in action.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Message Input
              </h3>
              
              <Textarea
                placeholder="Paste a message here to analyze for toxicity..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[150px] mb-4 resize-none bg-background/50 border-border/50 focus:border-primary"
              />

              <div className="flex flex-col gap-3 mb-4">
                <p className="text-sm text-muted-foreground">Or try an example:</p>
                <div className="flex flex-wrap gap-2">
                  {exampleMessages.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => setMessage(example)}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors text-left"
                    >
                      Example {index + 1}
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                variant="hero" 
                className="w-full" 
                onClick={analyzeMessage}
                disabled={!message.trim() || isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4" />
                    Analyze Message
                  </>
                )}
              </Button>
            </div>

            {/* Results Panel */}
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violet" />
                Analysis Results
              </h3>

              {!result && !isAnalyzing && (
                <div className="flex flex-col items-center justify-center h-[300px] text-muted-foreground">
                  <Shield className="w-16 h-16 mb-4 opacity-20" />
                  <p>Enter a message and click analyze to see results</p>
                </div>
              )}

              {isAnalyzing && (
                <div className="flex flex-col items-center justify-center h-[300px]">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full gradient-bg animate-pulse" />
                    <Loader2 className="w-10 h-10 text-primary-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" />
                  </div>
                  <p className="mt-4 text-muted-foreground">AI is analyzing your message...</p>
                </div>
              )}

              {result && !isAnalyzing && (
                <div className="space-y-6 animate-fade-in">
                  {/* Toxicity Score */}
                  <div className="text-center p-4 rounded-xl bg-background/50">
                    <p className="text-sm text-muted-foreground mb-2">Overall Toxicity Score</p>
                    <div className="flex items-center justify-center gap-2">
                      {result.toxicityScore < 30 ? (
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      ) : (
                        <AlertTriangle className={`w-8 h-8 ${getToxicityColor(result.toxicityScore)}`} />
                      )}
                      <span className={`text-4xl font-display font-bold ${getToxicityColor(result.toxicityScore)}`}>
                        {Math.round(result.toxicityScore)}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full mt-3 overflow-hidden">
                      <div 
                        className={`h-full ${getToxicityBg(result.toxicityScore)} transition-all duration-500`}
                        style={{ width: `${result.toxicityScore}%` }}
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="grid grid-cols-2 gap-2">
                    {result.categories.map((cat) => (
                      <div 
                        key={cat.name}
                        className={`p-3 rounded-lg text-sm ${cat.detected ? 'bg-destructive/10 text-destructive' : 'bg-secondary/50 text-muted-foreground'}`}
                      >
                        <p className="font-medium">{cat.name}</p>
                        <p className="text-xs">{cat.detected ? `Detected (${Math.round(cat.score)}%)` : 'Not detected'}</p>
                      </div>
                    ))}
                  </div>

                  {/* Safer Rewrite */}
                  {result.toxicityScore > 30 && (
                    <div className="p-4 rounded-xl bg-violet/10 border border-violet/20">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-semibold text-violet flex items-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          Suggested Safer Response
                        </p>
                        <button 
                          onClick={copyRewrite}
                          className="p-1.5 rounded-lg hover:bg-violet/10 transition-colors"
                        >
                          {copied ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-violet" />
                          )}
                        </button>
                      </div>
                      <p className="text-sm text-foreground">{result.saferRewrite}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToxicityDemo;
