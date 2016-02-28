# TIY Install Party: Feb 28, 2016
*Install all of this software in the account you plan to use for class.* Let Luke or Wes know if you're running into issues.

## Web browser
First, install [Google Chrome](https://www.google.com/chrome/browser/desktop/). We'll be using Chrome as our primary browser in class because it has strong support for web standards and incredible developer tools.

Feel free to install other browsers that you like as well. It never hurts to have more than one browser around, but all of the demos in class will be done in Chrome unless there's a good reason not to.

## Code editor
I'd suggest using [Brackets](http://brackets.io); this is what I use for my own frontend work and is targeted at frontend developers (it's actually written in HTML, CSS, and JS!). Please start off using this editor to reduce x-tool pain points, but feel free to experiment around with [Atom](https://atom.io/), [Sublime](https://www.sublimetext.com/), [vim](http://www.vim.org/), [emacs](https://www.gnu.org/software/emacs/), or whatever else suits your fancy later. Any issues you run into are yours to solve though ;-)

### Some useful extensions
Brackets has a ton of extensions that are all availalbe in the [Extension Registry](https://brackets-registry.aboutweb.com/). You can install any extension or theme through Brackets directly using the Extension Manager. I'd suggest installing these:

  - [brackets-beautify](https://github.com/brackets-beautify/brackets-beautify) will clean up your spacing and other simple formatting errors automatically so you don't have to worry about it. I'd also suggest enabling *Beautify on save* (`Edit > Beautify on save`). It'll conveniently do this for HTML, CSS, and JS so it'll cover all the bases we need it to.
  - [Interactive linter](https://github.com/MiguelCastillo/Brackets-InteractiveLinter) will highlight questionable code and give you information on what seems wrong with it. It's not always right but it helps catch a lot of silly errors and is also pretty informative.
  - [Markdown preview](https://github.com/gruehle/MarkdownPreview) is a tool that provides real-time translation of Markdown into HTML. We'll be using Markdown for writing documentation and is an incredibly powerful syntax to understand.

## Node Version Manager
[Node Version Manager](https://github.com/creationix/nvm) is a tool that manages installation and updates for two different tools we'll be using later in the course (NodeJS and NPM). In order to install on a Mac, you'll need to first [follow these instructions](http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/) and then run this command in your terminal:
  
```bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
```
  
  