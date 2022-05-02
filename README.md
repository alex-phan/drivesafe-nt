# DriveSafe NT

## Prerequisites ##

* [Git](https://git-scm.com/downloads)
* [NodeJS](https://nodejs.org/en/download/)

## Install ##

Once cloned or downloaded, install the dependencies:

```bash
npm install
```

For development:

```bash
npm run dev
```

For committing to production:
```bash
git add dist && git commit -m "commit message"
```
```bash
git subtree push --prefix dist origin gh-pages
```