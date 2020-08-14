module.exports = function (api) {
  api.cache(true);

  const presets = ["next/babel", "@babel/preset-env"];
  const plugins = ["emotion"];

  return { plugins, presets };
};
