import React from 'react';
import {BasicCalendar} from '../molecules/Calendar';
import {events} from '../../demo/eventData';
import {PageTitle} from '../atoms/Title';
import {FloatingMenu} from '../molecules/MenuList'
import DashboardIcon from '@material-ui/icons/Dashboard';
import TableChartIcon from '@material-ui/icons/TableChart';

const menus = [
  { path: '/', icon: <DashboardIcon/>,text:'ダッシュボード'},
  { path: '/table', icon: <TableChartIcon/>,text:'テーブル'},
]
const handleSelect = (info) => {
  console.log(info);
}
const handleEventClick = (info) => {
  console.log(info);
}

const CalendarPage = () => {
  const handleClick = (index) => {
    alert(index);
  }
  return(
    <div>
      <PageTitle>カレンダー</PageTitle>
      <BasicCalendar events={events} onSelect={(info) => handleSelect(info)} onEventClick={(info) => handleEventClick(info)}/>
      <FloatingMenu onClick={(index) => {handleClick(index)}} menus={menus}/>
    </div>
  )
};

export default CalendarPage;
