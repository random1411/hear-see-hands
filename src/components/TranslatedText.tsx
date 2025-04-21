
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TranslatedTextProps {
  text: string | null;
  isLoading: boolean;
}

const TranslatedText: React.FC<TranslatedTextProps> = ({ text, isLoading }) => {
  if (!text && !isLoading) return null;
  
  return (
    <Card className="mt-6 animate-slide-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-gray-700">Translated Text</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex flex-col space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          </div>
        ) : (
          <p className="text-gray-800 text-lg">{text}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default TranslatedText;
