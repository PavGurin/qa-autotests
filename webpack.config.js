const path = require("path");

module.exports = {
  resolve: {
    extensions: [".vue", ".js", ".json", "*"],
    alias: {
      "@": path.resolve("./cypress"),
      "@support": path.resolve("./cypress/support"),
    },
  },
};
