import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import styled from "styled-components"

const localizer = momentLocalizer(moment)

export const BasicCalendar = (props) => {
  const events = props.events ? props.events : [];
  return (
    <Div>
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500,margin:10 }}
      />
    </Div>
  )
}

const Div = styled.div`
  margin:${props => props.theme.spacing(2)}px;
`
