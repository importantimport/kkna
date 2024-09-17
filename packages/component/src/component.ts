import { context } from '@kkna/context'
import { process, type ProcessOptions } from '@kkna/core'
import { consume } from '@lit/context'
import { Task } from '@lit/task'
import '@unocss/reset/tailwind.css'
import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import './components/comments'
import './components/reactions'

@customElement('kkna-component')
export class KKnaComponent extends LitElement {
  static styles = css`/* @unocss-placeholder */`

  private _process = new Task(this, {
    args: () => [this.processOptions],
    task: async ([processOptions]) => await process(processOptions),
  })

  @consume({ context, subscribe: true })
  public processOptions?: ProcessOptions

  render() {
    return html`
      <div class="prose prose-zinc bg-zinc-50 max-w-none m-6 p-6 rounded">
        ${this._process.render({
            complete: result => html`
              <kkna-reactions .reactions=${result.reactions}></kkna-reactions>
              <kkna-comments .comments=${result.comments}></kkna-comments>
              <h3>KKna processOptions</h3>
              <pre class="bg-zinc-100"><code>${JSON.stringify(this.processOptions, null, 2)}</code></pre>
              <h3>KKna result</h3>
              <pre class="bg-zinc-100"><code>${JSON.stringify(result, null, 2)}</code></pre>
            `,
            error: err => html`<p>Error: ${err}</p>`,
            pending: () => html`<p>少女祈祷中…</p>`,
          })}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kkna-component': KKnaComponent
  }
}
