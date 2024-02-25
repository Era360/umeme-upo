'use client';

import React, { useState } from 'react';

// Local imports
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const Dashboard: React.FC = () => {
  const [isLocationAvailable, setLocationAvailability] = useState(true);
  const [turnOffReason, setTurnOffReason] = useState('');

  const handleReasonChange = (reason: string) => {
    setTurnOffReason(reason);
  };

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h1 className='mb-4 text-2xl font-bold'>Location Availability</h1>
      <ToggleSwitch
        isOn={isLocationAvailable}
        handleToggle={(checked) => setLocationAvailability(checked)}
      />
      {!isLocationAvailable && (
        <ReasonForm
          turnOffReason={turnOffReason}
          onReasonChange={handleReasonChange}
        />
      )}
    </div>
  );
};

const ToggleSwitch: React.FC<{
  isOn: boolean;
  handleToggle: (checked: boolean) => void;
}> = ({ isOn, handleToggle }) => {
  return (
    <div className='flex items-center'>
      <Label htmlFor='location-toggle' className='mr-2'>
        {isOn ? 'On' : 'Off'}
      </Label>
      <Switch
        id='location-toggle'
        checked={isOn}
        onCheckedChange={handleToggle}
      />
    </div>
  );
};

const ReasonForm: React.FC<{
  turnOffReason: string;
  onReasonChange: (reason: string) => void;
}> = ({ turnOffReason, onReasonChange }) => {
  return (
    <div className='mt-4'>
      <label className='block text-sm font-medium text-gray-700'>
        Reason for Turning Off Location
      </label>
      <textarea
        className='form-input mt-1 block w-full border p-2'
        placeholder='Enter reason...'
        value={turnOffReason}
        onChange={(e) => onReasonChange(e.target.value)}
      />
    </div>
  );
};

export default Dashboard;
