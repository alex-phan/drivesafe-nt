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

For pushing changes to the version one live site:

```bash
git subtree push --prefix dist origin version-one
```

For pushing changes to the version two live site:

```bash
git subtree push --prefix dist origin version-two
```