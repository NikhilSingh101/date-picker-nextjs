"use client";
import React, { useEffect, useState } from 'react';
import { format, addDays, addWeeks, addMonths, addYears } from 'date-fns';

type RecurringDatePreviewProps = {
  recurrenceType: string;
  startDate: Date;
  interval: number;
  endDate?: Date;
};

const RecurringDatePreview: React.FC<RecurringDatePreviewProps> = ({
  recurrenceType,
  startDate,
  interval,
  endDate,
}) => {
  const [dates, setDates] = useState<Date[]>([]);

  useEffect(() => {
    const newDates: Date[] = [];
    let currentDate = startDate;
    const limitDate = endDate || new Date();

    while (currentDate <= limitDate) {
      newDates.push(currentDate);

      switch (recurrenceType) {
        case 'daily':
          currentDate = addDays(currentDate, interval);
          break;
        case 'weekly':
          currentDate = addWeeks(currentDate, interval);
          break;
        case 'monthly':
          currentDate = addMonths(currentDate, interval);
          break;
        case 'yearly':
          currentDate = addYears(currentDate, interval);
          break;
      }
    }

    setDates(newDates);
  }, [recurrenceType, startDate, interval, endDate]);

  return (
    <div>
      <h3 className="text-lg font-semibold">Recurring Dates:</h3>
      <ul>
        {dates.map((date, idx) => (
          <li key={idx}>{format(date, 'MMMM dd, yyyy')}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecurringDatePreview;
