import { context } from '@kkna/context'
import { process, type ProcessOptions } from '@kkna/core'
import { consume } from '@lit/context'
import { Task } from '@lit/task'
import '@material/web/labs/card/filled-card.js'
import '@material/web/labs/card/outlined-card.js'
import '@material/web/progress/circular-progress.js'
import { css, html, LitElement } from 'lit'
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
  static styles = css`
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
  `

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
