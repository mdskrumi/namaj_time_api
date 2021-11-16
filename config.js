const devConfig = {
  port: 8080,
};

const prodConfig = {
  port: 3000,
};

const currentEnv = process.env.NODE_ENVIRONMENT;

module.exports =
  typeof currentEnv === "string" && currentEnv === "production"
    ? prodConfig
    : devConfig;
