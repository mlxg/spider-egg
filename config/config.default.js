module.exports = () => {
  const config = {};
  config.keys = 'gongmw'

  config.middleware = ['handleBody']

  config.reptilia = {
    "pageMaxNum": "10", //最大页数；
    "parseURL": "http://vip.jlsprh.com/index.php?url=" //vip解析
  }
  return config;
};

