import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.videodromm.app',
  appName: 'videodromm',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
