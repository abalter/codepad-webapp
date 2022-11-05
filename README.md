# CodePad - A multi-language text editor web application (WIP)

![gghBeJ/codepad.jpg](https://image.ibb.co/gghBeJ/codepad.jpg)

## Description
This project is based on the Chrome App [codepad-chrome-app](https://github.com/andrewbrg/codepad-chrome-app). I am trying to rewrite this as a web application that can run completely client-side. The app needs a server so that it can perform `ajax` requests---i.e. fetch files in the local directory space---but does not run any code on the server.

## Implementation
The correct way to build this app would be to re-implement the functions of the `chrome` API as pure javascript. As a shortcut, I'm using a [shim](https://en.wikipedia.org/wiki/Shim_(computing)) called [Web-Extension-Shim](https://github.com/Filter-Bubble/Web-Extension-Shim) I found through a [stackoverflow post](https://stackoverflow.com/a/55833066/188963).

The rest of the README below is unchanged from the original.


## Note

Code Pad IDE is a free and lightweight IDE/text editor built for Chrome operating system. Code Pad allows you to write code and build projects in an easy way right on your Chrome OS device.

The IDE supports a variety of different languages!

**P.S.** You can also use it as a simple text editor, if that's all you need _(duh)_...

## Currently supported languages
Bash, C/C++, CoffeeScript, CSS3, Dockerfile, GitIgnore, GoLang, HTML5, Java, JavaScript, JSON, Less, Lua, Markdown, MS SQL, Perl, PHP, PHTML, Plain text, Python, Ruby, Rust, Sass, Scala, SQL, TypeScript, XML, XHTML.

## Features
 - Full project browsing & management
 - Over 20 familiar themes _(Monokai, etc...)_
 - Choice of crisp monospaced editor fonts
 - Ready-made code snippets
 - Syntax error & bug detection/alerts
 - Syntax highlighting
 - Code auto-completion & hinting
 - Code folding
 - Works with Google Drive or Local storage
 - Centralized clipboard with ChromeOS
 - Automatic indent and outdent
 - Tweakable interface
 - Key bindings
 - Drag & drop files with your mouse
 - Toggle between soft tabs & real tabs
 - Line wrapping
 - Runs in fullscreen
 - Cut, copy & paste functionality

## Installation

**Chromebook**

The Code Pad IDE can be installed directly from the Chrome store here: 
https://chrome.google.com/webstore/detail/code-pad-ide/adaepfiocmagdimjecpifghcgfjlfmkh

**Other devices**

Alternatively, if you're not running a Chrome OS device just follow these steps:
                                              
  - Clone/download this repo to your local machine
  - Open Google Chrome browser
  - Enter [chrome://extensions](chrome://extensions) in the URL bar and enable Developer Mode.
  - While still on the extensions page, click the button marked `Load unpacked extension...` and select the directory containing the Code Pad manifest.json file.
  - The app should be 'installed' on your device and should be accessible via your start menu or programs folder
