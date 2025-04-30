import { db } from './base';

// Тип для объекта пользователя
interface User {
  id?: number;
  name: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;
}

const UserModel = {
  // Получить всех пользователей
  async getAll(): Promise<User[]> {
    return await db('users').select('*');
  },

  // Получить пользователя по ID
  async getById(id: number): Promise<User | undefined> {
    return await db('users').where({ id }).first();
  },

  // Получить пользователя по email
  async getByEmail(email: string): Promise<User | undefined> {
    return await db('users').where({ email }).first();
  },

  // Добавить нового пользователя
  async create(user: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<User> {
    const [newUser] = await db('users')
      .insert(user)
      .returning(['id', 'name', 'email', 'created_at', 'updated_at']);
    return newUser;
  },

  // Обновить пользователя
  async update(id: number, updates: Partial<User>): Promise<number> {
    return await db('users').where({ id }).update(updates);
  },

  // Удалить пользователя
  async delete(id: number): Promise<number> {
    return await db('users').where({ id }).del();
  },
};

export default UserModel;