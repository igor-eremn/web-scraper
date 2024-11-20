import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PreviewTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User View Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border rounded-lg p-6 bg-white">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Help us personalize your experience</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="font-medium">Question 1 of 3</p>
                <p>Sample question preview...</p>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((option) => (
                    <button
                      key={option}
                      className="w-full text-left p-3 border rounded hover:bg-gray-50"
                    >
                      Preview Option {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PreviewTab;