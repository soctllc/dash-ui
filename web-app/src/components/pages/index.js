import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {AppFrame} from '../templates/AppFrame';
import {MenuList} from '../molecules/MenuList';
import {AppLogo} from '../atoms/AppLogo';
import TopPage from './TopPage'
import TablePage from './TablePage'
import CalendarPage from './CalendarPage'
import FormPage from './FormPage'
import DataPage from './DataPage'
import CardPage from './CardPage';

import DashboardIcon from '@material-ui/icons/Dashboard';
import TableChartIcon from '@material-ui/icons/TableChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CreateIcon from '@material-ui/icons/Create';
import BarChartIcon from '@material-ui/icons/BarChart';

const pages = [
  { path: '/', component: <TopPage/> },
  { path: '/table', component: <TablePage/> },
  { path: '/calendar', component: <CalendarPage/> },
  { path: '/form', component: <FormPage/> },
  { path: '/data', component: <DataPage/> },
  { path: '/card', component: <CardPage/> }
];

const menus = [
  { path: '/', icon: <DashboardIcon/>,text:'ダッシュボード'},
  { path: '/table', icon: <TableChartIcon/>,text:'テーブル'},
  { path: '/calendar', icon: <CalendarTodayIcon/>,text:'カレンダー'},
  { path: '/form', icon: <CreateIcon/>,text:'フォーム'},
  { path: '/data', icon: <BarChartIcon/>,text:'データ'},
  { path: '/card', icon: <BarChartIcon/>,text:'カード'}
]

const Pages = ()=>{
  return(
    <Router>
    <AppFrame appLogo={<AppLogo />} menus={<MenuList menus={menus}/>}>
      {pages.map((item,index) => (
        <Route
          key={index}
          exact
          path={item.path}
          component={() => item.component}
        />
      ))}
    </AppFrame>
    </Router>
  )
};
export default Pages;
