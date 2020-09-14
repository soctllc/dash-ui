import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {AppFrame} from '../templates/AppFrame';
import {MenuList} from '../molecules/MenuList';
import {AppLogo} from '../atoms/AppLogo';
import TopPage from './TopPage'
import TablePage from './TablePage'
import DashboardIcon from '@material-ui/icons/Dashboard';

const pages = [
  { path: '/', component: <TopPage/> },
  { path: '/table', component: <TablePage/> }
];

const menus = [
  { path: '/', icon: <DashboardIcon/>,text:'ダッシュボード'},
  { path: '/table', icon: <DashboardIcon/>,text:'テーブル'},
  { path: '/', icon: <DashboardIcon/>,text:'ダッシュボード'}
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
