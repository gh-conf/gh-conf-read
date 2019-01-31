# gh-conf-read

[![Build Status](https://travis-ci.com/gh-conf/gh-conf-read.svg?branch=master)](https://travis-ci.com/gh-conf/gh-conf-read)
[![Github Repo Size](https://img.shields.io/github/repo-size/gh-conf/gh-conf-read.svg)](https://github.com/gh-conf/gh-conf-read)
[![Contributors](https://img.shields.io/github/contributors/gh-conf/gh-conf-read.svg)](https://github.com/gh-conf/gh-conf-read/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/gh-conf/gh-conf-read.svg)](https://github.com/gh-conf/gh-conf-read/commits/master)
[![NPM Version](https://img.shields.io/npm/v/@gh-conf/gh-conf-read.svg)](https://www.npmjs.com/package/@gh-conf/gh-conf-read)

It reads the github config file and returns it contents.
It needs respository path as input to read the config.

> Give us a :star: if you like our work :heart:

<a href="https://www.buymeacoffee.com/gh-conf" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
<a href="https://www.patreon.com/bePatron?u=15454240" target="_blank"><img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patron!" height="40"></a>

Please consider donating, if you like my work

## Install

```
$ npm install @gh-conf/gh-conf-read
```

## Usage

```javascript
const { readConf } = require('@gh-conf/gh-conf-read');

(async () => {
  try {
    const configContent = await readConf('./gh-conf-read');
    console.log(configContent);
    /**
     * [core]
     *     repositoryformatversion = 0
     *     filemode = true
     *     bare = false
     *     logallrefupdates = true
     * [remote "origin"]
     *     url = git@github.com:gh-conf/gh-conf-read
     *     fetch = +refs/heads/*:refs/remotes/origin/*
     * [branch "master"]
     *   remote = origin
     *   merge = refs/heads/master
     * [user]
     *     name = Arshad Kazmi
     *     email = arshadkazmi42@gmail.com
     **/
  } catch (error) {
    console.log(error);
  }
})();



```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/gh-conf/gh-conf-read/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase
