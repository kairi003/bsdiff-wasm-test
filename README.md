# bsdiff-wasm

`bsdiff/bspatch` compiled to WebAssembly.

This is a rebuild of [bsdiff (4.3-23)](https://packages.debian.org/en/bookworm/bsdiff) maintained by debian and is fully compatible.
The original was developed by Colin Percival. Please see http://www.daemonology.net/bsdiff/.

# Install
```sh
npm install bsdiff-wasm
```

# Usage
Examples of an operation equivalent to `bsdiff old.bin new.bin patch.bsdiff`.

For more information, see [test](./test).

## browser
```html
<script type="module">
  import { loadBsdiff, loadBspatch } from 'https://cdn.jsdelivr.net/npm/bsdiff-wasm';
  const bsdiff = await loadBsdiff();
  await fetch('./old.bin')
    .then(res => res.arrayBuffer())
    .then(buf => bsdiff.FS.writeFile('old.bin', new Uint8Array(buf)));
  await fetch('./new.bin')
    .then(res => res.arrayBuffer())
    .then(buf => bsdiff.FS.writeFile('new.bin', new Uint8Array(buf)));
  bsdiff.callMain(['old.bin', 'new.bin', 'patch.bsdiff']);
  const patch = bsdiff.FS.readFile('patch.bsdiff');
  console.log(patch);
</script>
```

## node.js
```js
import { loadBsdiff, loadBspatch } from 'bsdiff-wasm';
const bsdiff = await loadBsdiff();
const workdir = '/working';
bsdiff.FS.mkdir(workdir);
bsdiff.FS.mount(bsdiff.NODEFS, { root: process.cwd() }, workdir);
bsdiff.FS.chdir(workdir);
bsdiff.callMain(['old.bin', 'new.bin', 'patch.bsdiff']);
```

# Build
Some commands need to be modified for windows because it is designed for bash.

## shell

```sh
docker build -t bsdiff-wasm-build .
docker run --rm -v $PWD:/src -u $(id -u):$(id -g) -w /src bsdiff-wasm-build /bin/bash build.sh
bash prepare.sh
```

## node.js

```sh
npm install
npm run build:release
npm run prepare
```

# Test
Probably cross-platform.

```sh
npm test
```

