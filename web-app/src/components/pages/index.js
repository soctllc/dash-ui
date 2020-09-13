import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {AppFrame} from '../templates/AppFrame';
import {MenuList} from '../molecules/MenuList';
import TopPage from './TopPage'
import DashboardIcon from '@material-ui/icons/Dashboard';

const pages = [
  { path: '/', component: <TopPage/> }
];

const menus = [
  { path: '/', icon: <DashboardIcon/>,text:'ダッシュボード'},
  { path: '/', icon: <DashboardIcon/>,text:'ダッシュボード'},
  { path: '/', icon: <DashboardIcon/>,text:'ダッシュボード'}
]

const Pages = ()=>{
  return(
    <AppFrame menus={<MenuList menus={menus}/>}>
    <Router>
      {pages.map((item,index) => (
        <Route
          key={index}
          exact
          path={item.path}
          component={() => item.component}
        />
      ))}
    </Router>
    </AppFrame>
  )
};
export default Pages;
