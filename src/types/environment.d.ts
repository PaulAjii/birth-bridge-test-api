declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      NODE_ENV: "development" | "production";
      MONGODB_URI: string;
      // Add other env variables here
    }
  }
}

export {};
