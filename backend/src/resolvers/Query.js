const { forwardTo } = require("prisma-binding");

const Query = {
  itemsConnection: forwardTo("db"),
  items: forwardTo("db"),
  item: forwardTo("db")
};

module.exports = Query;
