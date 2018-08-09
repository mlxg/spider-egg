module.exports = () => {
  const config = {};
  config.keys = 'gongmw'

  config.middleware = ['handleBody']

  config.reptilia = {
    "pageMaxNum": "10",
    "parseURL": "http://vip.jlsprh.com/index.php?url="
  }
  return config;
};

