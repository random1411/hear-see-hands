
import React from 'react';
import { Textarea } from '@/components/ui/textarea';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <Textarea
        placeholder="Enter text here or record your voice."
        className="resize-none min-h-[120px] w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
