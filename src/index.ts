import { IRenderMime } from '@jupyterlab/rendermime-interfaces';


import { JSONObject } from '@phosphor/coreutils';


import { Widget } from '@phosphor/widgets';

import { defineCustomElements } from 'split-me/loader';

import '../style/index.css';

defineCustomElements(window);

/**
 * The default mime type for the extension.
 */
const MIME_TYPE = 'application/vnd.alesgenova.json';

/**
 * The class name added to the extension.
 */
const CLASS_NAME = 'mimerenderer-json';

/**
 * A widget for rendering json.
 */
export class OutputWidget extends Widget implements IRenderMime.IRenderer {
  /**
   * Construct a new output widget.
   */
  constructor(options: IRenderMime.IRendererOptions) {
    super();
    this._mimeType = options.mimeType;
    this.addClass(CLASS_NAME);
  }

  /**
   * Render json into this widget's node.
   */
  renderModel(model: IRenderMime.IMimeModel): Promise<void> {
    
    let data = model.data[this._mimeType] as JSONObject;
    this.node.textContent = JSON.stringify(data);
    
    return Promise.resolve();
  }

  private _mimeType: string;
}

/**
 * A mime renderer factory for json data.
 */
export const rendererFactory: IRenderMime.IRendererFactory = {
  safe: true,
  mimeTypes: [MIME_TYPE],
  createRenderer: options => new OutputWidget(options)
};

/**
 * Extension definition.
 */
const extension: IRenderMime.IExtension = {
  id: 'stenciljs-in-jupyterlab:plugin',
  rendererFactory,
  rank: 0,
  dataType: 'json',
  fileTypes: [
    {
      name: 'json',
      mimeTypes: [MIME_TYPE],
      extensions: ['.json']
    }
  ],
  documentWidgetFactoryOptions: {
    name: 'Json Viewer',
    primaryFileType: 'json',
    fileTypes: ['json'],
    defaultFor: ['json']
  }
};

export default extension;
