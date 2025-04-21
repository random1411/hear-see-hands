
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Mic, Translate, Play } from 'lucide-react';

type ButtonVariant = 'record' | 'translate' | 'convert';

interface ActionButtonProps {
  variant: ButtonVariant;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  variant, 
  onClick, 
  isLoading = false,
  disabled = false 
}) => {
  const getButtonConfig = () => {
    switch(variant) {
      case 'record':
        return {
          icon: <Mic className="mr-2 h-4 w-4" />,
          text: 'Record Voice',
          className: 'bg-record hover:bg-record-hover text-white',
        };
      case 'translate':
        return {
          icon: <Translate className="mr-2 h-4 w-4" />,
          text: 'Translate',
          className: 'bg-translate hover:bg-translate-hover text-white',
        };
      case 'convert':
        return {
          icon: <Play className="mr-2 h-4 w-4" />,
          text: 'Convert to Sign Language',
          className: 'bg-convert hover:bg-convert-hover text-white',
        };
      default:
        return {
          icon: null,
          text: 'Action',
          className: 'bg-primary',
        };
    }
  };

  const { icon, text, className } = getButtonConfig();

  return (
    <Button
      className={cn(
        "relative flex items-center justify-center font-medium transition-all", 
        className
      )}
      onClick={onClick}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </span>
      ) : (
        <>
          {icon}
          {text}
        </>
      )}
    </Button>
  );
};

export default ActionButton;
