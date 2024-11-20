import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CheckCircle } from 'lucide-react';
import StatusAlert from './StatusAlert';

const UrlInput = ({ url, setUrl, isLoading, handleAnalyze, scrapeStatus }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Website URL</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <Input 
            placeholder="Enter website URL (e.g., https://example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1"
          />
          <Button 
            onClick={handleAnalyze}
            disabled={isLoading || !url}
          >
            {isLoading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing</>
            ) : (
              'Analyze Website'
            )}
          </Button>
        </div>
        <StatusAlert status={scrapeStatus} />
      </CardContent>
    </Card>
  );
};

export default UrlInput;