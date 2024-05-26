# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

### `npm test`

Format all files according to consistency rules described below

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Initial Design

![Initial design](./initial-design.png)

## Clients

Clients are configured for a scenario when most of the APIs have the same interfaces(mainly CRUD) and also need similar manipulations(e.g. Authorization header) in interceptors. So we can create fully functional client by just extending one of the base clients and just passing the API url and add additional functionality if needed.

## Consistency in code style

VSCode Extensions
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
Setup of editor config, eslint and prettier is described [here(part 1)](https://blog.theodo.com/2019/08/why-you-should-use-eslint-prettier-and-editorconfig-together/) and [here(part 2)](https://blog.theodo.com/2019/08/empower-your-dev-environment-with-eslint-prettier-and-editorconfig-with-no-conflicts/)
The following files were added

`.editorconfig`

# http://editorconfig.org

root = true

[*.{html,css,scss,js,jsx,ts,tsx,json}]
end_of_line = lf
charset = utf-8
indent_style = space
indent_size = 2
tab_width = 2
max_line_length = 100
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
max_line_length = 0
trim_trailing_whitespace = false

[COMMIT_EDITMSG]
max_line_length = 0

`package.json`
{
...,
devDependencies: {
...,
"@typescript-eslint/eslint-plugin": "^4.4.1",
"@typescript-eslint/parser": "^4.4.1",
"eslint": "^7.12.0",
"eslint-config-prettier": "^6.12.0",
"eslint-plugin-prettier": "^3.1.4"
}
...
}

`.eslintrc.json`
{
"parser": "@typescript-eslint/parser",
"extends": [
"plugin:@typescript-eslint/recommended",
"eslint:recommended",
"prettier",
"prettier/@typescript-eslint"
],
"env": {
"es6": true,
"node": true
},
"rules": {
"prettier/prettier": "error",
"no-console": "error",
"@typescript-eslint/no-explicit-any": "off",
"array-callback-return": "error",
"block-scoped-var": "error",
"semi": "error",
"@typescript-eslint/no-inferrable-types": "off",
"@typescript-eslint/no-empty-interface": "off"
},
"plugins": [
"prettier"
]
}

`.prettierrc`
{
"semi": true,
"singleQuote": true,
"quoteProps": "consistent",
"jsxSingleQuote": false,
"trailingComma": "es5",
"bracketSpacing": false,
"arrowParens": "always"
}

<br />
<br />
