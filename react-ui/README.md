# DNB Visitt
Repo for redoing the DNB Visitt application with Node, React, Firebase, Heroku, and Travis. Whew.

## Getting started

### `npm install`
This will install all the modules listed in the package.json file, allowing the app to build and run.

### `npm start`
This will run the dev server from localhost:3000. Hot reloading is enabled so anytime anything is saved, the app reloads reflecting changes.

## The tools

### React

Facebook's own front-end JavaScript library. Totally cool.

#### Redux

Appears to be the most recommended way of dealing with state in React. Oh, and I love it.

### Google Firebase

Free, quick, no-server, NoSQL database. Denormalize!

### Heroku

Deployment service, so that the page can always be found somewhere.

### Travis CI

Continous integration service that will run tests, make sure the build succeeds on a server (hint: a lot of them run Linux!), and can, optionally, deploy to a hosting service of your choice. They're the good guys.

### 'But wait, what about Node?'

Well, with just a static website, there really is no need to use it for anything else than `npm`. It would've been cool to set up, but we don't have time to mess around with it, I'm afraid.

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


## Git guide: git gud or git rekt

### Don't be afraid of branches
Use them. A lot. It's much better to have many, short-lived branches, than few long ones. Make them small enough that you can go through a few a day, even.

Oh, and remember to delete them (both upstream and locally) when they're not useful anymore!

#### Branch naming
Accepted naming conventions

`feature/my_new_feature` — new features

`bugfix/breaking_bug` — bugfixes

`style/new_styling` — pure styling

`refactor/thing_to_refactor` — refactoring

`x/my_exciting_test_feature` — for experimental stuff that might never make it in to the actual project

### Commits

Commit early, commit often. Push when you have something implemented, so that it won't break anyone's experience should they jump on your branch.

### Merge tactics

Go ahead and grab the alias `mergetest` from the .gitconfig example. This is a very handy tool, which'll tell you whether you'll get any conflicts or not.

Stay up to date with master and merge it into your branch whenever it updates (`git merge master`). This decreases the chance of conflicts

Also, before merging back into master, it's not a bad idea to merge master into your branch first, thereby avoiding conflict resolving on master.

### Setup


#### .gitconfig

See the git resources folder for an example of a .gitconfig file whith a lot of useful aliases etc.

##### Aliases

Want to create custom commands? Want git gud or git rekt to acutally do something useful? Well, you can! Just configure them in your .gitconfig file!

#### Windows: Chocolatey, ConEmu and posh-git

This is a set-up I've been recommended by a very tech-savvy and terminal-happy coworker of mine.


#### macOS: iTerm2 and Oh My Zsh

This is my setup (using theme powerlevel9k), and it rocks my socks.
