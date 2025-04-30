import UserModel from './models/user';

export const resolvers = {
  Query: {
    users: async () => await UserModel.getAll(),
    user: async (_: any, { id }: { id: number }) => await UserModel.getById(id),
  },
  Mutation: {
    addUser: async (_: any, { name, email }: { name: string; email: string }) =>
      await UserModel.create({ name, email }),
  },
};