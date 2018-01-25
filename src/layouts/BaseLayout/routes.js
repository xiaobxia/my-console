/**
 * Created by xiaobxia on 2018/1/25.
 */
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
        pathname: '/valueRecord',
        title: '估值记录'
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

