import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import QuestionCard from '../questions/QuestionCard';

const QuestionsTab = ({ questions }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Classification Questions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {questions.map((question, index) => (
          <QuestionCard key={index} index={index + 1} question={question} />
        ))}
      </CardContent>
    </Card>
  );
};

export default QuestionsTab;