export interface user {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'customer' | 'admin';
}

export interface CreateUserDTO extends Omit<user, 'id' | 'role'> {}
