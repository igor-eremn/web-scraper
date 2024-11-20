import React, { useState } from 'react';
import Header from '../components/layout/Header';
import UrlInput from '../components/url/UrlInput';
import TabContainer from '../components/tabs/TabContainer';

const WebScraperPage = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [scrapeStatus, setScrapeStatus] = useState(null);
  const [questions, setQuestions] = useState([]);

  const handleAnalyze = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setQuestions([
        {
          text: 'Sample question 1?',
          options: ['Option 1', 'Option 2', 'Option 3', 'Option 4']
        },
      ]);
      setScrapeStatus('success');
    } catch (error) {
      setScrapeStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <Header />
        <UrlInput 
          url={url}
          setUrl={setUrl}
          isLoading={isLoading}
          handleAnalyze={handleAnalyze}
          scrapeStatus={scrapeStatus}
        />
        {scrapeStatus === 'success' && (
          <TabContainer questions={questions} />
        )}
      </div>
    </div>
  );
};

export default WebScraperPage;