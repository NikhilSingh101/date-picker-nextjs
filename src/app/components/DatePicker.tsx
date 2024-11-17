import React, { useState } from 'react';
import { format, addDays, addMonths, addYears, addWeeks } from 'date-fns';

type DatePickerProps = {
  onSelectDate: (startDate: Date, endDate?: Date) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({ onSelectDate }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setStartDate(date);
    onSelectDate(date, endDate);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setEndDate(date);
    onSelectDate(startDate!, date);
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="date"
        onChange={handleStartDateChange}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="date"
        onChange={handleEndDateChange}
        className="p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default DatePicker;
