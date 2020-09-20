import React from 'react';
import styled from "styled-components"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


export const BasicCalendar = (props) => {
  const events = props.events ? props.events : [];
  return (
    <Div>
      <FullCalendar
       locale="ja"
       plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
       initialView="timeGridWeek"
       slotDuration="00:30:00" // 表示する時間軸の最小値
       selectable={true} // 日付選択可能
       allDaySlot={false}
       events={events}
       
       titleFormat={{
        year: "numeric",
        month: "short",
        day: "numeric",
        }} // タイトルに年月日を表示
       headerToolbar={{
        left: "prev,next,today",
        center: "title",
        right: "dayGridMonth,timeGridWeek",
      }}
      businessHours={{
        daysOfWeek: [1, 2, 3, 4, 5],
        startTime: "0:00",
        endTime: "24:00",
      }}
      weekends={true}
     />
    </Div>
  )
}

const Div = styled.div`
  margin:${props => props.theme.spacing(2)}px;
`
