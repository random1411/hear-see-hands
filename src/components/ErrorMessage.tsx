
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface ErrorMessageProps {
  message: string | null;
  type: 'record' | 'translate' | 'convert';
  onDismiss: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, type, onDismiss }) => {
  if (!message) return null;
  
  const getErrorTitle = () => {
    switch(type) {
      case 'record':
        return 'Recording Error';
      case 'translate':
        return 'Translation Error';
      case 'convert':
        return 'Conversion Error';
      default:
        return 'Error';
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 5000); // Auto-dismiss after 5 seconds
    
    return () => clearTimeout(timer);
  }, [message, onDismiss]);
  
  return (
    <Alert className="mt-4 bg-red-50 border-red-200 animate-fade-in">
      <AlertTitle className="font-medium text-red-800">{getErrorTitle()}</AlertTitle>
      <AlertDescription className="text-red-600">
        {message}
      </AlertDescription>
    </Alert>
  );
};

export default ErrorMessage;
