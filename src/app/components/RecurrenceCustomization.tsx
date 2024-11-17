import React from 'react';

type RecurrenceCustomizationProps = {
  frequency: string;
  interval: number;
  onChangeInterval: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RecurrenceCustomization: React.FC<RecurrenceCustomizationProps> = ({
  frequency,
  interval,
  onChangeInterval,
}) => {
  return (
    <div className="mt-4">
      <label className="block">
        Repeat every{' '}
        <input
          type="number"
          value={interval}
          onChange={onChangeInterval}
          className="w-20 p-2 border border-gray-300 rounded"
        />
        {frequency}
      </label>
    </div>
  );
};

export default RecurrenceCustomization;
