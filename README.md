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

Obtain a typescript error on build
```
> tsc

node_modules/split-me/dist/types/components.d.ts:8:45 - error TS2307: Cannot find module './stencil.core'.

8 import { HTMLStencilElement, JSXBase } from './stencil.core';
                                              ~~~~~~~~~~~~~~~~

node_modules/typescript/lib/lib.dom.d.ts:4617:101 - error TS2344: Type 'HTMLElementTagNameMap[K]' does not satisfy the constraint 'Element'.
  Type 'HTMLElement | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | HTMLAnchorElement | HTMLAppletElement | HTMLScriptElement | HTMLEmbedElement | HTMLFormElement | ... 63 more ... | HTMLSplitMeElement' is not assignable to type 'Element'.
    Type 'HTMLSplitMeElement' is missing the following properties from type 'Element': assignedSlot, attributes, classList, className, and 123 more.

4617     getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
                                                                                                         ~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/typescript/lib/lib.dom.d.ts:4985:101 - error TS2344: Type 'HTMLElementTagNameMap[K]' does not satisfy the constraint 'Element'.
  Type 'HTMLElement | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | HTMLAnchorElement | HTMLAppletElement | HTMLScriptElement | HTMLEmbedElement | HTMLFormElement | ... 63 more ... | HTMLSplitMeElement' is not assignable to type 'Element'.
    Type 'HTMLSplitMeElement' is not assignable to type 'Element'.

4985     getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
                                                                                                         ~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/typescript/lib/lib.dom.d.ts:11185:87 - error TS2344: Type 'HTMLElementTagNameMap[K]' does not satisfy the constraint 'Node'.
  Type 'HTMLElement | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | HTMLAnchorElement | HTMLAppletElement | HTMLScriptElement | HTMLEmbedElement | HTMLFormElement | ... 63 more ... | HTMLSplitMeElement' is not assignable to type 'Node'.
    Type 'HTMLSplitMeElement' is missing the following properties from type 'Node': baseURI, childNodes, firstChild, isConnected, and 47 more.

11185     querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
```
