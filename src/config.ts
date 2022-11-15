interface Config {
  baseUrl: string | undefined;
  apiKey: string | undefined;
}

const config: Config = {
  baseUrl: process.env.REACT_APP_BASE_URL,
  apiKey: process.env.REACT_APP_API_KEY
};

export default config;
