import React from 'react';
import {BasicCalendar} from '../molecules/Calendar';
import {events} from '../../demo/eventData';
import {PageTitle} from '../atoms/Title';

const CalendarPage = () => {
  return(
    <div>
      <PageTitle>カレンダー</PageTitle>
      <BasicCalendar events={events}/>
    </div>
  )
};

export default CalendarPage;
