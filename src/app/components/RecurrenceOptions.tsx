import React from 'react';

type RecurrenceOptionsProps = {
  selectedOption: string;
  onSelect: (option: string) => void;
};

const RecurrenceOptions: React.FC<RecurrenceOptionsProps> = ({ selectedOption, onSelect }) => {
  return (
    <div className="flex gap-4">
      <label>
        <input
          type="radio"
          name="recurrence"
          value="daily"
          checked={selectedOption === 'daily'}
          onChange={() => onSelect('daily')}
          className="mr-2"
        />
        Daily
      </label>
      <label>
        <input
          type="radio"
          name="recurrence"
          value="weekly"
          checked={selectedOption === 'weekly'}
          onChange={() => onSelect('weekly')}
          className="mr-2"
        />
        Weekly
      </label>
      <label>
        <input
          type="radio"
          name="recurrence"
          value="monthly"
          checked={selectedOption === 'monthly'}
          onChange={() => onSelect('monthly')}
          className="mr-2"
        />
        Monthly
      </label>
      <label>
        <input
          type="radio"
          name="recurrence"
          value="yearly"
          checked={selectedOption === 'yearly'}
          onChange={() => onSelect('yearly')}
          className="mr-2"
        />
        Yearly
      </label>
    </div>
  );
};

export default RecurrenceOptions;
