import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle } from 'lucide-react';

const StatusAlert = ({ status }) => {
  if (status !== 'success') return null;

  return (
    <Alert className="mt-4 bg-green-50 border-green-200">
      <CheckCircle className="h-4 w-4 text-green-600" />
      <AlertDescription className="text-green-600">
        Website analysis complete! View results below.
      </AlertDescription>
    </Alert>
  );
};

export default StatusAlert;