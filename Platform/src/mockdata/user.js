import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://avatars3.githubusercontent.com/u/14358159?v=3&s=460',
    name: 'CH'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    stat: Mock.Random.pick(['正常营业', '关店中']),
    type: Mock.Random.pick(['生鲜食材', '调味品','餐具']),
    phone:Mock.Random.pick(['18651908626', '18522861748', '18139500119', '17717311131', '1791651515']),
    time: Mock.Random.pick(['2017.05.16 18：05', '2017.05.17 14：00', '2017.05.16 12：00', '2017.05.15 11：00', '2017.05.14 10：00']),
    store: Mock.Random.pick(['重庆小面', '港式煲仔饭', '龙凤港式茶餐厅', '龙抄手店', '超级披萨店']),
    'age|18-60': 1,
    star: Mock.Random.pick(['★', '★★','★★★','★★★★','★★★★']),
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
