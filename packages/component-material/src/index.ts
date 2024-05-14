import { context } from '@kkna/context'
import { type ProcessOptions, process } from '@kkna/core'
import { consume } from '@lit/context'
import { Task } from '@lit/task'
import '@material/web/labs/card/filled-card.js'
import '@material/web/labs/card/outlined-card.js'
import '@material/web/progress/circular-progress.js'
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js'
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import './components/comment'
import './components/reactions'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('kkna-material')
export class KKnaMaterial extends LitElement {
  static styles = [typescaleStyles, css`
    .content {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: space-between;
      padding: 16px;
      gap: 16px;
    }

    .pending {
      margin: 32px auto;
    }
  `]

  private _process = new Task(this, {
    args: () => [this.processOptions],
    task: async ([processOptions]) => await process(processOptions),
  })

  @consume({ context, subscribe: true })
  public processOptions?: ProcessOptions

  render() {
    return html`<md-filled-card>
      ${this._process.render({
      complete: result => html`<div class="content">
        ${result.reactions && html`<kkna-material-reactions .reactions=${result.reactions}></kkna-material-reactions>`}
        ${result.comments?.map(comment => html`<kkna-material-comment .comment=${comment}></kkna-material-comment>`)}
        <h3>KKna processOptions</h3>
        <pre style="overflow-x: scroll"><code>${JSON.stringify(this.processOptions, null, 2)}</code></pre>
        <h3>KKna result</h3>
        <pre style="overflow-x: scroll"><code>${JSON.stringify(result, null, 2)}</code></pre>
      </div>`,
      error: err => html`<p>Error: ${err}</p>`,
      pending: () => html`<md-circular-progress class="pending" indeterminate></md-circular-progress>`,
    })}
    </md-filled-card>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kkna-material': KKnaMaterial
  }
}
