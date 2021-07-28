export interface ILogin {
  email: string;
  password: string;
}

export interface IServiceResult<T, E extends Error> {
  data: T | null;
  error: E;
}
