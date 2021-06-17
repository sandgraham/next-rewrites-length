module.exports = {
  async rewrites() {
    return [
      {
        source: "/:foo*",
        destination: "https://www.google.com/?path=:foo*",
      },
    ];
  },
};
