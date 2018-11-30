const Mutation = {
  async createItem(parent, args, ctx, info) {
    return await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );
  },
  async updateItem(parent, args, ctx, info) {
    const updates = { ...args };
    delete updates.id;

    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    );
  },
  async deleteItem(parent, args, ctx, info) {
    return ctx.db.mutation.deleteItem(
      {
        where: {
          id: args.id
        }
      },
      info
    );
  }
};

module.exports = Mutation;
