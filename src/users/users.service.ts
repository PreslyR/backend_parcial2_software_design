import { Injectable } from '@nestjs/common';




type UserRecord = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'client';
  createdAt: string;
};

@Injectable()
export class UsersService {
  // Usuarios "fijos" en lugar de base de datos
  private users: UserRecord[] = [
    {
      id: '1',
      name: 'Juan Pérez',
      email: 'juanperez@example.com',
      password: 'password123',
      role: 'client',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      name: 'Admin Demo',
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin',
      createdAt: new Date().toISOString(),
    },
  ];

  async validateUser(email: string, password: string) {
    const user = this.users.find((u) => u.email === email && u.password === password);
    if (!user) return null;
    // devolver sin password
    const { password: _p, ...safe } = user;
    return safe;
  }

  async findByEmail(email: string) {
    const user = this.users.find((u) => u.email === email);
    if (!user) return null;
    const { password: _p, ...safe } = user;
    return safe;
  }
}