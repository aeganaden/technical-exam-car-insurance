const CracoLessPlugin = require('craco-less');
const path = require('path');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(
    fs.readFileSync(
      path.join(__dirname, './src/assets/theme-variables.less'),
      'utf8',
    ),
  );
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: themeVariables,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};