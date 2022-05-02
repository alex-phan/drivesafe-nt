# DriveSafe NT Redesign, Built with Bootstrap v5

## Prerequisites ##

* [Git](https://git-scm.com/downloads)
* [NodeJS](https://nodejs.org/en/download/)

## Install ##

Once cloned, install the dependencies:

```bash
npm install
```

## Development and Production ##

For development:

```bash
npm run dev
```

For committing to production (live site):

```bash
git add dist && git commit -m "commit message"
```
```bash
git subtree push --prefix dist origin gh-pages
```