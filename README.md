# stenciljs-in-jupyterlab

A JupyterLab extension for rendering json files.

## Build
```bash
conda create -n jupyterlab-ext -c conda-forge --override-channels nodejs jupyterlab git
source activate jupyterlab-ext
git clone https://github.com/alesgenova/stenciljs-in-jupyterlab.git
cd stenciljs-in-jupyterlab
npm install
jupyter labextension link .
```

Obtain a webpack error due to circular dependencies
```
$ webpack
/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/toposort/index.js:35
      throw new Error('Cyclic dependency' + nodeRep)
      ^

Error: Cyclic dependency
    at visit (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/toposort/index.js:35:13)
    at visit (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/toposort/index.js:53:9)
    at visit (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/toposort/index.js:53:9)
    at Function.toposort [as array] (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/toposort/index.js:22:22)
    at Object.module.exports.dependency (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/html-webpack-plugin/lib/chunksorter.js:50:35)
    at HtmlWebpackPlugin.sortChunks (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/html-webpack-plugin/index.js:364:35)
    at /home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/html-webpack-plugin/index.js:113:21
    at _err0 (eval at create (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:12:1)
    at /home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/duplicate-package-checker-webpack-plugin/lib/index.js:190:5
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:7:1)
    at AsyncSeriesHook.lazyCompileHook (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/tapable/lib/Hook.js:154:20)
    at Compiler.emitAssets (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/webpack/lib/Compiler.js:311:19)
    at onCompiled (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/webpack/lib/Compiler.js:178:9)
    at hooks.afterCompile.callAsync.err (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/webpack/lib/Compiler.js:500:14)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:15:1)
    at AsyncSeriesHook.lazyCompileHook (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/tapable/lib/Hook.js:154:20)
    at compilation.seal.err (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/webpack/lib/Compiler.js:497:30)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/tapable/lib/Hook.js:154:20)
    at hooks.optimizeAssets.callAsync.err (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/webpack/lib/Compilation.js:986:35)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/tapable/lib/Hook.js:154:20)
    at hooks.optimizeChunkAssets.callAsync.err (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/webpack/lib/Compilation.js:977:32)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/tapable/lib/Hook.js:154:20)
    at hooks.additionalAssets.callAsync.err (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/webpack/lib/Compilation.js:972:36)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/tapable/lib/Hook.js:154:20)
    at hooks.optimizeTree.callAsync.err (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/webpack/lib/Compilation.js:968:32)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/alessandro/anaconda3/envs/jupyterlab-ext/share/jupyter/lab/staging/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)
error Command failed with exit code 1.

```
