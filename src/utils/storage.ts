const storage = {
  getToken: (): string | null => {
    const token = window.sessionStorage.getItem('token');
    return token ? JSON.parse(token) : null;
  },
  setToken: (token: string): void => {
    window.sessionStorage.setItem('token', JSON.stringify(token));
  },
  clearToken: (): void => {
    window.sessionStorage.removeItem('token');
  },
};

export default storage;
