
import React, { useEffect, useState } from 'react';

interface RecordingIndicatorProps {
  isRecording: boolean;
  duration: number;
}

const RecordingIndicator: React.FC<RecordingIndicatorProps> = ({ isRecording, duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  
  useEffect(() => {
    if (!isRecording) {
      setTimeLeft(duration);
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isRecording, duration]);
  
  if (!isRecording) return null;
  
  return (
    <div className="flex flex-col items-center mt-4 animate-fade-in">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-12 h-12 rounded-full bg-red-500 opacity-75 animate-pulse-ring"></div>
        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white">
          {timeLeft}
        </div>
      </div>
      <p className="mt-2 text-sm text-red-600 font-medium">Recording in progress...</p>
    </div>
  );
};

export default RecordingIndicator;
