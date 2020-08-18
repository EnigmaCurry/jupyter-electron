# jupyter-electron

This is a simple desktop wrapper for [Jupyter
Lab](https://jupyterlab.readthedocs.io/en/latest/) using 
[electron](https://www.electronjs.org/).

As opposed to running in your web-browser, `jupyter-electron` allows you to run
jupyter lab in a full window frame, with no conflicting keyboard shortcuts.

## Prerequisites

Install [nodejs](https://nodejs.org/en/download/) and
[yarn](https://yarnpkg.com/getting-started/install)

[Install jupyter
lab](https://jupyterlab.readthedocs.io/en/latest/getting_started/installation.html)
(server) using any supported method (I personally use [my own customized
image](https://github.com/EnigmaCurry/jupyterlab)). Login and test that it is
working using your normal web browser. Make a note of the URL for your jupyter
lab instance (eg. `http://localhost:10000`) and the token (or optionally set a
password.)

## Install

Clone and install from this repository :

```
DIR=$HOME/git/vendor/enigmacurry/jupyter-electron
git clone https://github.com/EnigmaCurry/jupyter-electron.git $DIR
yarn --cwd $DIR install
```

## Create alias

Edit `$HOME/.bash_profile` (or sometimes `$HOME/.bashrc` depending on your
terminal setup) and create the environment variable and alias :

```
### jupyter-electron config:
## Point to the URL for your own jupyter lab deployment:
export JUPYTER_ELECTRON_URL=http://localhost:10000
## Set a visual scaling factor:
## If you change this later, also delete ~/.config/jupyter-electron/Preferences
export JUPYTER_ELECTRON_ZOOM=1.5
## Alias for Jupyter Electron:
alias jupyter-electron="yarn --cwd ~/git/vendor/enigmacurry/jupyter-electron start"
```

## Run

Reload your terminal and run :

```
jupyter-electron
```

Enter your token or password to login (one time). 
