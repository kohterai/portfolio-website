// next.config.js
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/hungrysnake": { page: "/hungrysnake"}
    }
  },
}