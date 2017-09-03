# Pixilspace
I'm building Pixilspace as a tool to help me express myself and connect with others like me. And whether you'd like to contribute to the project or use Pixilspace as the basis for your own artistic playground, the following is how you would set up the Pixilspace Local Environment.

## Prereqs
I had the following on my system when I got this to build:
- OS: Linux Mint
- [Node](https://nodejs.org/en/download/), [NPM](https://docs.npmjs.com/getting-started/installing-node), [Yarn](https://yarnpkg.com/lang/en/docs/install/)
- Gulp: `npm install -g gulp-cli`
- Grunt: `npm install grunt-cli -g`
- Firebase: `npm install -g firebase-tools`
- Login to Firebase: `firebase login`
- [A Firebase account](https://firebase.google.com)

## Install
- `yarn install`
- `firebase init` to connect to your firebase
- `cd ./dev/app; npm install; grunt;` to install [Piskel](http://www.piskelapp.com/), the pixel art editor

## Development
For now, let's build plugins to the piskel editor and try to manipulate the core as little as possible. The following commands are run from the project root.

- `gulp` for local development. Launches a local server on localhost:8888/, builds everything, and watches for changes
- `gulp build` to build everything
- `gulp deploy` to build everything and then deploy things to firebase
