"use client";
import React, { useState } from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import RecurrenceCustomization from './RecurrenceCustomization';
import DatePicker from './DatePicker';
import RecurringDatePreview from './RecurringDatePreview';
import { useStore } from '../store';

const RecurringDatePicker: React.FC = () => {
  const [recurrenceType, setRecurrenceType] = useState('daily');
  const [interval, setInterval] = useState(1);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const handleSelectRecurrence = (option: string) => {
    setRecurrenceType(option);
  };

  const handleChangeInterval = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterval(Number(e.target.value));
  };

  const handleSelectDate = (start: Date, end?: Date) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded shadow">
      <RecurrenceOptions selectedOption={recurrenceType} onSelect={handleSelectRecurrence} />
      <RecurrenceCustomization frequency={recurrenceType} interval={interval} onChangeInterval={handleChangeInterval} />
      <DatePicker onSelectDate={handleSelectDate} />
      {startDate && <RecurringDatePreview recurrenceType={recurrenceType} startDate={startDate} interval={interval} 
      
      endDate={endDate}

       />}
    </div>
  );
};

export default RecurringDatePicker;
