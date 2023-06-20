const storage = {
  getToken: (): string | null => {
    const token = window.localStorage.getItem('token');
    return token ? JSON.parse(token) : null;
  },
  setToken: (token: string): void => {
    window.localStorage.setItem('token', JSON.stringify(token));
  },
  clearToken: (): void => {
    window.localStorage.removeItem('token');
  },
};

export default storage;
