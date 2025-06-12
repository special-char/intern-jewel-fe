module.exports = {
  apps: [
    {
      name: "payload-website-templates",
      script: "yarn",
      args: "start",
      env: {
        PORT: 8008,
      },
    },
  ],
}
