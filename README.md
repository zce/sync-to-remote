# sync-to-remote

[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> Monitor files change and synchronize to the remote repo

## Installation

```sh
$ yarn add sync-to-remote

# or npm
$ npm install sync-to-remote
```

## Usage

```js
const syncToRemote = require('sync-to-remote')
const result = syncToRemote('zce')
console.log(result)
// => 'zce@zce.me'
```

## API

### syncToRemote(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## CLI Usage

```shell
$ yarn global add sync-to-remote

# or npm
$ npm install sync-to-remote -g
```

```shell
$ sync-to-remote --help

  Usage: creative <input>

  Options:

    -V, --version  output the version number
    -H, --host     Email host
    -h, --help     output usage information
```

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; zce <w@zce.me> (https://zce.me/)



[downloads-image]: https://img.shields.io/npm/dm/sync-to-remote.svg
[downloads-url]: https://npmjs.org/package/sync-to-remote
[version-image]: https://img.shields.io/npm/v/sync-to-remote.svg
[version-url]: https://npmjs.org/package/sync-to-remote
[license-image]: https://img.shields.io/npm/l/sync-to-remote.svg
[license-url]: https://github.com/zce/sync-to-remote/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/zce/sync-to-remote.svg
[dependency-url]: https://david-dm.org/zce/sync-to-remote
[devdependency-image]: https://img.shields.io/david/dev/zce/sync-to-remote.svg
[devdependency-url]: https://david-dm.org/zce/sync-to-remote?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: http://standardjs.com
