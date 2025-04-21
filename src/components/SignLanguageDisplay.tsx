
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SignLanguageDisplayProps {
  frames: string[] | null;
  isLoading: boolean;
}

const SignLanguageDisplay: React.FC<SignLanguageDisplayProps> = ({ frames, isLoading }) => {
  if (!frames && !isLoading) return null;
  
  return (
    <Card className="mt-6 animate-slide-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-gray-700">Sign Language Translation</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : frames && frames.length > 0 ? (
          <div className="flex justify-center overflow-hidden">
            <div className="flex space-x-4 overflow-x-auto py-4 px-2 max-w-full">
              {frames.map((frame, index) => (
                <div 
                  key={index} 
                  className="min-w-[180px] h-[180px] rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden"
                >
                  <img 
                    src={frame} 
                    alt={`Sign language frame ${index}`} 
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-48 text-gray-500">
            No matching GIFs found for the input.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SignLanguageDisplay;
