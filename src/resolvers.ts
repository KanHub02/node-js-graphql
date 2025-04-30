let users = [
    { id: '1', name: 'Alice', email: 'alice@example.com' },
    { id: '2', name: 'Bob', email: 'bob@example.com' },
  ];
  
  export const resolvers = {
    Query: {
      users: () => users,
      user: (_: any, { id }: { id: string }) => users.find(user => user.id === id),
    },
    Mutation: {
      addUser: (_: any, { name, email }: { name: string; email: string }) => {
        const newUser = {
          id: String(users.length + 1),
          name,
          email,
        };
        users.push(newUser);
        return newUser;
      },
    },
  };