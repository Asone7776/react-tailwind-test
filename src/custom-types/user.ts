export enum ROLES {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
}

export interface User {
  id: number;
  sub?: number;
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  phone: string;
  role: ROLES;
  created_at: string;
  updated_at: string;
  access_token?: string;
  avatar?: string;
  iat?: number;
  exp?: number;
}
