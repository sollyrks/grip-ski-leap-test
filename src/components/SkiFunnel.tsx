
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Ski {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  category: string;
}

interface SkiFunnelProps {
  skis: Ski[];
  onAddToCart: (ski: Ski) => void;
  onClose: () => void;
  onRecommendation: (ski: Ski) => void;
}

const SkiFunnel = ({ skis, onAddToCart, onClose, onRecommendation }: SkiFunnelProps) => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    experience: '',
    terrain: '',
    style: '',
    email: ''
  });

  const questions = [
    {
      id: 'experience',
      title: 'What\'s your skiing experience level?',
      options: [
        { value: 'beginner', label: 'Beginner - I\'m just starting out' },
        { value: 'intermediate', label: 'Intermediate - I can handle most slopes' },
        { value: 'advanced', label: 'Advanced - I ski challenging terrain' },
        { value: 'expert', label: 'Expert - I ski everything' }
      ]
    },
    {
      id: 'terrain',
      title: 'What type of terrain do you prefer?',
      options: [
        { value: 'groomed', label: 'Groomed runs and carving' },
        { value: 'allmountain', label: 'All-mountain versatility' },
        { value: 'powder', label: 'Off-piste and powder' },
        { value: 'park', label: 'Terrain parks and freestyle' }
      ]
    },
    {
      id: 'style',
      title: 'What\'s your skiing style?',
      options: [
        { value: 'cruising', label: 'Relaxed cruising and comfort' },
        { value: 'performance', label: 'High-speed performance' },
        { value: 'playful', label: 'Playful and fun' },
        { value: 'aggressive', label: 'Aggressive and precise' }
      ]
    }
  ];

  const getRecommendation = (userAnswers: typeof answers) => {
    const { experience, terrain, style } = userAnswers;
    
    // Simple recommendation logic based on answers
    if (experience === 'beginner' || terrain === 'groomed' || style === 'cruising') {
      return skis.find(ski => ski.name === 'APEX') || skis[1];
    } else if (terrain === 'park' || style === 'playful') {
      return skis.find(ski => ski.name === 'NOVA') || skis[3];
    } else if (style === 'performance' || style === 'aggressive') {
      return skis.find(ski => ski.name === 'VELOCITY') || skis[0];
    } else if (experience === 'advanced' || experience === 'expert') {
      return skis.find(ski => ski.name === 'TITAN') || skis[2];
    } else {
      return skis.find(ski => ski.name === 'PRECISION') || skis[4];
    }
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Email step - get recommendation and close funnel
      if (answers.email && answers.email.includes('@')) {
        const recommendedSki = getRecommendation(answers);
        onRecommendation(recommendedSki);
        onClose();
        toast({
          title: "Perfect match found!",
          description: `We recommend the ${recommendedSki.name} - it's highlighted below!`,
        });
      } else {
        toast({
          title: "Valid email required",
          description: "Please enter a valid email address to see your recommendation.",
          variant: "destructive"
        });
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    if (currentStep < questions.length) {
      const currentQuestion = questions[currentStep];
      return answers[currentQuestion.id as keyof typeof answers] !== '';
    } else if (currentStep === questions.length) {
      return answers.email && answers.email.includes('@');
    }
    return false;
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl bg-gray-900 border-gray-700 text-white max-h-[90vh] overflow-y-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Find Your Perfect Ski</CardTitle>
          <div className="flex justify-center mt-4">
            {[...Array(questions.length + 1)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index <= currentStep ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {currentStep < questions.length ? (
            // Question steps
            <div>
              <h3 className="text-xl mb-6">{questions[currentStep].title}</h3>
              <div className="space-y-3">
                {questions[currentStep].options.map((option) => {
                  const isSelected = answers[questions[currentStep].id as keyof typeof answers] === option.value;
                  return (
                    <div
                      key={option.value}
                      onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                      className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all hover:scale-[1.02] ${
                        isSelected 
                          ? 'border-white bg-gray-800/70 shadow-lg' 
                          : 'border-gray-700 hover:border-gray-500'
                      }`}
                    >
                      <span className="flex-1">{option.label}</span>
                      {isSelected && (
                        <Check className="w-5 h-5 text-white ml-3" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            // Email step
            <div>
              <h3 className="text-xl mb-4">Almost there! Enter your email to see your perfect ski match</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={answers.email}
                    onChange={(e) => handleAnswer('email', e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                </div>
                <p className="text-sm text-gray-400">
                  We'll send you exclusive ski tips and updates about our latest products.
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center pt-6 gap-3">
            <div className="flex gap-2 order-2 sm:order-1">
              {currentStep > 0 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="border-gray-600 text-white hover:bg-gray-800 hover:text-white hover:border-gray-400 flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </Button>
              )}
              
              <Button
                variant="ghost"
                onClick={onClose}
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                Skip
              </Button>
            </div>
            
            <div className="order-1 sm:order-2">
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {currentStep === questions.length ? 'Get Recommendation' : 'Next'}
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkiFunnel;
