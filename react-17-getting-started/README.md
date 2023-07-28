# React 17: Getting Started

Hands-on practice of React concepts using [JsComplete](https://jscomplete.com/playground) as a playground.


## 2. The Basics


## 4. The GitHub Cards App


## 6. Setting up a Development environment

### Create React App

Install `NodeJs`:

 - global install of packages: `npm install -g <pkg-name>`
 - execute operations with packages: `npx <package> <options>`

The `create-react-app` package allows to quickly kickstart projects for the app we
are developing (think of SpringBoot and CoockieCutter)

`npx create-react-app <proj-name>`

This will unlock a few utilities 

 - `npm start`: create a bare bone project
 - `npm run eject`: export configurations


 ### Installing Environment Dependencies

 `npm init -y` creates the `package.json` that will be used to pin dependencies when `npm install`.

 `webpack` is a packager to bundle the dependencies for the browser to run the app.
 

 `babel` is a tool that translates JSX into React API calls


 `nodemon` will automatically reload the locally rendering server on changes to the sources. Install it as a _development dependency_ with `npm install -D nodemon`


 `eslint` THE code quality tool share its setting in the project for setting up team's standards


 `jest` is the de facto standard for testing in JS

 `prettier` is THE formatter 
#### External source: [The Always-recent Guide to creat a React app](https://jscomplete.com/reactful)



### Configure dependencies


Create `babel.config.js` and `webpack.config.js` (have look at the source for minimal configs).

Create custom commands in the `package.json` under the `script` field.

External source: [React Getting Started repo](https://github.com/jscomplete/rgs-template)


#### Reactful

`Reactful` is a npm package which ships an opinionated app to do all of these steps and more in one command: `npx reactful <proj-name>`.


### Stucturing Component Files

Make 1 file for each Components.
# React 17: Getting Started

Hands-on practice of React concepts using [JsComplete](https://jscomplete.com/playground) as a playground.


## 2. The Basics


## 4. The GitHub Cards App


## 6. Setting up a Development environment

### Create React App

Install `NodeJs`:

- global install of packages: `npm install -g <pkg-name>`
- execute operations with packages: `npx <package> <options>`

The `create-react-app` package allows to quickly kickstart projects for the app we
are developing (think of SpringBoot and CoockieCutter)

`npx create-react-app <proj-name>`

This will unlock a few utilities

- `npm start`: create a bare bone project
- `npm run eject`: export configurations


### Installing Environment Dependencies

`npm init -y` creates the `package.json` that will be used to pin dependencies when `npm install`.

`webpack` is a packager to bundle the dependencies for the browser to run the app.


`babel` is a tool that translates JSX into React API calls


`nodemon` will automatically reload the locally rendering server on changes to the sources. Install it as a _development dependency_ with `npm install -D nodemon`


`eslint` THE code quality tool share its setting in the project for setting up team's standards


`jest` is the de facto standard for testing in JS

`prettier` is THE formatter
#### External source: [The Always-recent Guide to creat a React app](https://jscomplete.com/reactful)



### Configure dependencies


Create `babel.config.js` and `webpack.config.js` (have look at the source for minimal configs).

Create custom commands in the `package.json` under the `script` field.

External source: [React Getting Started repo](https://github.com/jscomplete/rgs-template)


#### Reactful

`Reactful` is a npm package which ships an opinionated app to do all of these steps and more in one command: `npx reactful <proj-name>`.


### Stucturing Component Files

Make 1 file for each Components.
