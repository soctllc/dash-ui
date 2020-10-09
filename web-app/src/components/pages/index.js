import React,{lazy,Suspense} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {AppFrame} from '../templates/AppFrame';
import {MenuList,IconMenu} from '../molecules/MenuList';
import {AppLogo} from '../atoms/AppLogo';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TableChartIcon from '@material-ui/icons/TableChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CreateIcon from '@material-ui/icons/Create';
import BarChartIcon from '@material-ui/icons/BarChart';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import LinearProgress from '@material-ui/core/LinearProgress';

//import TopPage from './TopPage'
//import TablePage from './TablePage'
//import CalendarPage from './CalendarPage'
//import FormPage from './FormPage'
//import DataPage from './DataPage'
//import CardPage from './CardPage';
const TopPage = lazy(() => import('./TopPage'));
const TablePage = lazy(() => import('./TablePage'));
const CalendarPage = lazy(() => import('./CalendarPage'));
const FormPage = lazy(() => import('./FormPage'));
const DataPage = lazy(() => import('./DataPage'));
const CardPage = lazy(() => import('./CardPage'));

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
  { path: '/card', icon: <ContactMailIcon/>,text:'カード'}
]

const myMenus = [
  { icon: <DashboardIcon/>,text:'ダッシュボード'},
  { icon: <TableChartIcon/>,text:'テーブル'},
]

const Pages = ()=>{
  const handleClick = (index) => {
    alert(index);
  }
  return(
    <Router>
    <AppFrame appLogo={<AppLogo />} menus={<MenuList menus={menus}/>} iconMenu={<IconMenu menus={myMenus} onClick={(index) => {handleClick(index)}}/>}>
      {pages.map((item,index) => (
        <Route
          key={index}
          exact
          path={item.path}
          component={() => <Suspense fallback={<LinearProgress />}>{item.component}</Suspense>}
        />
      ))}
    </AppFrame>
    </Router>
  )
};
export default Pages;
