module.exports = async () => {
  process.env.TZ = "UTC";
  process.env.APP_DEBUG = "false";
  process.env.APP_IN_TEST = "true";
  process.env.APP_LANGUAGE = 'en';
  process.env.APP_IS_BETA = 'false';
};
