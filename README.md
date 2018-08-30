This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents
- [Setup Environment File](#setup-environment-file)
- [Setup AntDesign](#setup-antdesign)

## Setup Environment File
 - [Add .env file to root folder]
 in the `.env` file add the following lines

PORT=3000
HTTPS=true
REACT_APP_API_URL=https://api.themoviedb.org/3
REACT_APP_API_KEY=`[themoviedb API key]`

## Setup AntDesign
- [Install Antd and required packages]
> npm i antd
> npm i -D react-app-rewired
> npm i -D babel-plugin-import

- [Update Package.json to use react-app-rewired]
```diff
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test --env=jsdom",
+   "test": "react-app-rewired test --env=jsdom",
}
```

- [create new config-overrides.js file]
```js
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
  return config;
};
```
