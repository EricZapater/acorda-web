export type CreateUserRequest = {
  name?: string;
  surname?: string;
  phone_number: string;
  email: string;
  username: string;
  password: string;
};
export type UserResponse = {
  id: string;
  name: string;
  surname: string;
  phone_number: string;
  email: string;
  username: string;
  password: string;
  is_verified: boolean;
  is_active: boolean;
  created_at: string;
  password_changed_at: string;
};
export type LoginRequest = {
  username: string;
  password: string;
};
export type LoginResponse = {
  user: UserResponse;
  token: string;
  expire: Date;
};

export type GroupRequest = {
  name: string;
};

export type GroupResponse = {
  id: string;
  name: string;
  created_at: string;
};

export interface BreadcrumbItem {
  label: string;
  icon?: string;
  route?: string;
  url?: string;
  target?: string;
}
