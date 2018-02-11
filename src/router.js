import React from 'react'
import Bundle from './components/bundle'
import Login from 'Bundle-loader?lazy!localRoutes/User/Login'
import Register from 'Bundle-loader?lazy!localRoutes/User/Register'
import RegisterResult from 'Bundle-loader?lazy!localRoutes/User/RegisterResult'
import UserActive from 'Bundle-loader?lazy!localRoutes/Active'
import Dashboard from 'Bundle-loader?lazy!localRoutes/Dashboard'
import MyFund from 'Bundle-loader?lazy!localRoutes/MyFund'
import Fund from 'Bundle-loader?lazy!localRoutes/Fund'
import FundDetail from 'Bundle-loader?lazy!localRoutes/Fund/FundDetail'
import Strategy from 'Bundle-loader?lazy!localRoutes/Strategy'

//router4就得以这种方式懒加载
//其实model不需要按需加载，因为本来就不应该太大，应该由组件自己维护状态
let getComponent = (component) => {
  return (props) => {
    return (
      <Bundle load={component}>
        {(Container) => {
          return (<Container {...props}/>);
        }}
      </Bundle>
    );
  }
};
export const authRoutes = [
  {
    name: 'Login',
    path: '/user/login',
    component: getComponent(Login)
  },
  {
    name: 'Register',
    path: '/user/register',
    component: getComponent(Register)
  },
  {
    name: 'RegisterResult',
    path: '/user/registerResult',
    component: getComponent(RegisterResult)
  },
  {
    name: 'UserActive',
    path: '/user/active',
    component: getComponent(UserActive)
  }
];

export const baseRoutes = [
  {
    name: 'Dashboard Home',
    path: '/',
    component: getComponent(Dashboard)
  },
  {
    name: 'MyFund',
    path: '/myFund',
    component: getComponent(MyFund)
  },
  {
    name: 'Fund',
    path: '/fund',
    component: getComponent(Fund)
  },
  {
    name: 'FundDetail',
    path: '/fund/:code',
    component: getComponent(FundDetail)
  },
  {
    name: 'Strategy',
    path: '/strategy',
    component: getComponent(Strategy)
  }
];

export const menusInfos = [
  {
    key: 'home',
    pathname: '/',
    title: '主页',
    icon: 'home'
  },
  {
    key: 'fund',
    title: '基金',
    icon: 'pay-circle',
    children: [
      {
        pathname: '/myFund',
        title: '基金持仓'
      },
      {
        pathname: '/fund',
        title: '基金库'
      },
      {
        title: '策略',
        pathname: '/strategy'
      }
    ]
  },
  {
    key: 'website',
    title: '主站',
    icon: 'ie',
    children: [
      {
        pathname: '/resume',
        title: '简历'
      }
    ]
  }
];
export function getOpenKeyAndMainPath(pathname) {
  // /a/edit和/a/add是一样的
  const currentPathName = '/' + pathname.split('/')[1];
  for (let j = 0; j < menusInfos.length; j++) {
    const children = menusInfos[j].children;
    if (children) {
      for (let i = 0; i < children.length; i++) {
        if (children[i].pathname === currentPathName) {
          return {
            mainPath: currentPathName,
            openKey: menusInfos[j].key,
            title: children[i].title
          };
        }
      }
    } else {
      if (menusInfos[j].pathname === currentPathName) {
        return {
          mainPath: currentPathName,
          openKey: menusInfos[j].key,
          title: menusInfos[j].title
        };
      }
    }
  }
  return {};
}

