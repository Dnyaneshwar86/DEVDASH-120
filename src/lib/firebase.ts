// Firebase Configuration for Google AdMob Analytics & App Campaign Tracking
export const firebaseConfig = {
  apiKey: "AIzaSy_DEV_DASH_120_FIREBASE_API_KEY",
  authDomain: "devdash-120.firebaseapp.com",
  projectId: "devdash-120",
  storageBucket: "devdash-120.appspot.com",
  messagingSenderId: "968241070862",
  appId: "ca-app-pub-9682410708621086~4307133982"
};

export const logAdMobEvent = (eventName: string, params?: Record<string, any>) => {
  console.log(`[AdMob Firebase Analytics] ${eventName}`, params);
};
