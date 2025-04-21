
import React, { useState } from 'react';
import Header from '@/components/Header';
import TextInput from '@/components/TextInput';
import ActionButton from '@/components/ActionButton';
import RecordingIndicator from '@/components/RecordingIndicator';
import TranslatedText from '@/components/TranslatedText';
import SignLanguageDisplay from '@/components/SignLanguageDisplay';
import ErrorMessage from '@/components/ErrorMessage';
import { toast } from '@/components/ui/sonner';

const Index = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState<string | null>(null);
  const [signLanguageFrames, setSignLanguageFrames] = useState<string[] | null>(null);
  
  const [isRecording, setIsRecording] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  
  const [error, setError] = useState<{ message: string; type: 'record' | 'translate' | 'convert' } | null>(null);

  // Mock function for simulating backend calls
  const mockBackendCall = async (functionName: string, delay: number = 2000) => {
    console.log(`Calling backend function: ${functionName}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 10% chance of error for demonstration
        if (Math.random() < 0.1) {
          reject(new Error(`Error in ${functionName}`));
          return;
        }
        resolve(true);
      }, delay);
    });
  };

  const handleRecord = async () => {
    try {
      setIsRecording(true);
      setError(null);
      
      // Mock recording for 5 seconds
      await mockBackendCall('record_audio()', 5000);
      
      // Mock audio recognition
      await mockBackendCall('recognize_audio()');
      
      // Set recognized text (for demo)
      const recognizedText = "This is the text recognized from the recorded audio.";
      setInputText(recognizedText);
      
      toast.success("Audio recorded and converted to text successfully!");
      setIsRecording(false);
    } catch (err) {
      console.error('Recording error:', err);
      setError({
        message: "Error recording audio. Please try again.",
        type: 'record'
      });
      setIsRecording(false);
    }
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      toast.error("Please enter some text or record your voice first.");
      return;
    }
    
    try {
      setIsTranslating(true);
      setError(null);
      
      // Mock translation
      await mockBackendCall('detect_and_translate()');
      
      // Set translated text (for demo)
      const result = `Translated: ${inputText}`;
      setTranslatedText(result);
      
      toast.success("Text translated successfully!");
      setIsTranslating(false);
    } catch (err) {
      console.error('Translation error:', err);
      setError({
        message: "Error translating text. Please check your input.",
        type: 'translate'
      });
      setIsTranslating(false);
    }
  };

  const handleConvert = async () => {
    if (!translatedText) {
      toast.error("Please translate the text first.");
      return;
    }
    
    try {
      setIsConverting(true);
      setError(null);
      
      // Mock sign language conversion
      await mockBackendCall('func()');
      
      // Generate dummy frames (for demo)
      const dummyFrames = [
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXppdmthcmU4Y3Q0YzRqdm1uaWE3cmZudnUwbGlyd3F0OWVzc2t4YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKNkzGJVpd7HfwI/giphy.gif',
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmh2cDk3M3I4bDFtNnE5M2pzMWMzNWNteW5ybmFnc2k0eHgyOTJ1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RcgIWwNIlxl9tGJFCy/giphy.gif',
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGVkbzB0YmZuZjgzeXg1dzFtMHU5a2Flc25hamZkZGd5YTUyNnUwaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1UgIg7OZcZQQrUXYo7/giphy.gif',
      ];
      setSignLanguageFrames(dummyFrames);
      
      toast.success("Text converted to sign language successfully!");
      setIsConverting(false);
    } catch (err) {
      console.error('Conversion error:', err);
      setError({
        message: "Error converting to sign language. Please try again.",
        type: 'convert'
      });
      setIsConverting(false);
    }
  };

  const clearError = () => setError(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Enter your message</h2>
          
          <TextInput value={inputText} onChange={setInputText} />
          
          <div className="mt-6 flex flex-wrap gap-4">
            <ActionButton 
              variant="record" 
              onClick={handleRecord} 
              isLoading={isRecording} 
              disabled={isTranslating || isConverting}
            />
            
            <ActionButton 
              variant="translate" 
              onClick={handleTranslate} 
              isLoading={isTranslating} 
              disabled={isRecording || isConverting || !inputText.trim()}
            />
            
            <ActionButton 
              variant="convert" 
              onClick={handleConvert} 
              isLoading={isConverting} 
              disabled={isRecording || isTranslating || !translatedText}
            />
          </div>
          
          <RecordingIndicator isRecording={isRecording} duration={5} />
          
          {error && (
            <ErrorMessage 
              message={error.message} 
              type={error.type} 
              onDismiss={clearError} 
            />
          )}
          
          <TranslatedText 
            text={translatedText} 
            isLoading={isTranslating} 
          />
          
          <SignLanguageDisplay 
            frames={signLanguageFrames} 
            isLoading={isConverting} 
          />
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6 px-4 border-t">
        <div className="container mx-auto text-center text-gray-600">
          <p>© 2025 Sign Language Translator | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
