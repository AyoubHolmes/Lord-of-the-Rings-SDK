declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BEARER_TOKEN: string;
      API_URL: string;
    }
  }
}
