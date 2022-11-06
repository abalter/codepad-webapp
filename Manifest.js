console.log("Manifest.json");

let manifestJson = 
{
  "version": "1.0.96",
  "manifest_version": 2,
  "minimum_chrome_version": "51",
  "name": "Code Pad Text Editor",
  "short_name": "Code Pad Text Editor",
  "description": "An multi-language code text-editor crafted for the Chrome OS. Completely free to use and to modify under the GPL!",
  "author": "Andrew Borg",
  "homepage_url": "https://github.com/andrewbrg/codepad-chrome-app",
  "offline_enabled": true,
  "app": {
    "background": {
      "scripts": [
        "/src/js/app.js"
      ],
      "persistent": false
    }
  },
  "file_handlers": {
    "text": {
      "extensions": [
        "as",
        "as3",
        "asm",
        "bat",
        "c",
        "cc",
        "cfc",
        "cfm",
        "cgi",
        "coffee",
        "cnf",
        "conf",
        "cpp",
        "cs",
        "csh",
        "css",
        "csv",
        "dart",
        "diff",
        "do",
        "ejs",
        "el",
        "erb",
        "glsl",
        "go",
        "h",
        "haml",
        "handlebars",
        "haxe",
        "hs",
        "htm",
        "html",
        "htmls",
        "ini",
        "jade",
        "java",
        "js",
        "jsx",
        "json",
        "ksh",
        "less",
        "log",
        "love",
        "lua",
        "m",
        "make",
        "man",
        "manifest",
        "markdown",
        "mat",
        "md",
        "mdoc",
        "me",
        "micro",
        "obc",
        "patch",
        "php",
        "phtml",
        "pkb",
        "pkg",
        "pks",
        "pl",
        "pls",
        "pm",
        "ps",
        "py",
        "r",
        "rake",
        "rb",
        "sass",
        "scala",
        "scss",
        "sh",
        "shtml",
        "sql",
        "styl",
        "svg",
        "tex",
        "text",
        "ts",
        "tsx",
        "tsv",
        "txt",
        "vbs",
        "vcf",
        "xml",
        "yaml",
        "yml",
        "zsh"
      ],
      "types": [
        "text/*",
        "image/svg+xml",
        "application/ecmascript",
        "application/java",
        "application/java-byte-code",
        "application/javascript",
        "application/plain",
        "application/pkix-cert",
        "application/pkcs7-mime",
        "application/rtf",
        "application/xml",
        "application/x-bsh",
        "application/x-bytecode.python",
        "application/x-csh",
        "application/x-javascript",
        "application/x-java-class",
        "application/x-lisp",
        "application/x-php",
        "application/x-pkcs7-mime",
        "application/x-pkcs7-signature",
        "application/x-pkcs7-certreqresp",
        "application/x-pointplus",
        "application/x-rtf",
        "application/x-sh",
        "application/x-shar",
        "application/x-x509-ca-cert",
        "application/x-x509-user-cert",
        "application/json"
      ]
    }
  },
  "permissions": [
    {
      "fileSystem": [
        "write",
        "retainEntries",
        "directory"
      ]
    },
    "syncFileSystem",
    "storage",
    "clipboardRead",
    "fullscreen",
    "notifications",
    "https://www.google-analytics.com/"
  ],
  "icons": {
    "16": "/src/img/codepad.16.png",
    "32": "/src/img/codepad.32.png",
    "64": "/src/img/codepad.64.png",
    "96": "/src/img/codepad.96.png",
    "128": "/src/img/codepad.128.png",
    "256": "/src/img/codepad.256.png"
  }
};
