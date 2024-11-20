import React from 'react';
import { Card } from '@/components/ui/card';

const QuestionCard = ({ index, question }) => {
  return (
    <Card className="p-4">
      <div className="space-y-2">
        <div className="font-medium">Question {index}</div>
        <div className="text-gray-600">{question.text}</div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {question.options.map((option, idx) => (
            <div key={idx} className="p-2 border rounded hover:bg-gray-50 cursor-pointer">
              {option}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default QuestionCard;