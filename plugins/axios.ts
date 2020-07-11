export const backendURL = 'https://defendersofskyrim.com/backend';

export default function ({ app }: { app: any }) {
  app.$axios.setToken('c7551a603d8ce7e774123a6c5911c4', 'Bearer');
}
