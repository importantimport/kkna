import type { Reactions } from '@kkna/core'

import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('kkna-reactions')
export class KKnaReactions extends LitElement {
  static styles = css`/* @unocss-placeholder */`

  @property({ type: Object })
  reactions?: Reactions

  render() {
    return html`<div class="flex flex-wrap gap-2">
      ${this.reactions?.emojis && Object.entries(this.reactions.emojis)
        .map(([emoji, count]) => html`
        <button>${emoji} ${count}</button>
      `)}
    </div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kkna-reactions': KKnaReactions
  }
}
