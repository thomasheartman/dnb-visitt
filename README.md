# DNB Visitt
Repo for redoing the DNB Visitt application with Node, React, Firebase, Heroku, and Travis. Whew.

## Getting started

### `npm install`
This will install all the modules listed in the package.json file, allowing the app to build and run.

### `npm start`
This will run the dev server from localhost:3000. Hot reloading is enabled so anytime anything is saved, the app reloads reflecting changes.

## The tools

### React

#### Redux

### Google Firebase

### Heroku

### Travis CI

## Project structure

All files to be deployed must go in `src`. Other files, e.g. for documentation, can go anywhere else in the directory. 

Generally the project is structured into a few main folders:
`components`: contains the presentational components
  All subfolders are organised by main page, and then any subcomponents they use. Try and keep components and other dependencies as local as possible.
`redux`: contains the state and logic of the application

### Directories

### Naming conventions

## JavaScript Standard Style: style guide
This project uses JavaScript Standard Style.
Some basic usage is outlined below. For more info, see https://www.npmjs.com/package/standard

### `$ standard`
Presents a list of issues in your code, or nothing if none are found

### `$ standard --fix`
This will try and fix as many errors as it can, but there are certain things it cannot handle.
These must be fixed manually.


## Git guide: git gud or get rekt

### Don't be afraid of branches
Use them. A lot.

#### Branch naming
Accepted naming conventions

`feature/my_new_feature` — new features

`bugfix/breaking_bug` — bugfixes

`style/new_styling` — pure styling

`refactor/thing_to_refactor` — refactoring

`x/my_exciting_test_feature` — for experimental stuff that might never make it in to the actual project

### Setup


#### .gitconfig

See the git resources folder for an example of a .gitconfig file whith a lot of useful aliases etc.

##### Aliases


#### Windows: Chocolatey, ConEmu and posh-git


#### macOS: iTerm2 and Oh My Zsh

