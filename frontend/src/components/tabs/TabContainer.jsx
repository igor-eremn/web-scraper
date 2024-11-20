import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import QuestionsTab from './QuestionsTab';
import PreviewTab from './PreviewTab';
import AnalyticsTab from './AnalyticsTab';

const TabContainer = ({ questions }) => {
  return (
    <Tabs defaultValue="questions" className="space-y-4">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="questions">Generated Questions</TabsTrigger>
        <TabsTrigger value="preview">Question Preview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>

      <TabsContent value="questions">
        <QuestionsTab questions={questions} />
      </TabsContent>

      <TabsContent value="preview">
        <PreviewTab />
      </TabsContent>

      <TabsContent value="analytics">
        <AnalyticsTab />
      </TabsContent>
    </Tabs>
  );
};

export default TabContainer;