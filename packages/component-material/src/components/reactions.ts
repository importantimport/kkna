import type { Reactions } from '@kkna/core'

import '@material/web/chips/chip-set.js'
import '@material/web/chips/filter-chip.js'
import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('kkna-material-reactions')
export class KKnaMaterialReactions extends LitElement {
  static styles = css`
    .chip {
      --md-filter-chip-trailing-space: 12px;
    }

    .chip-emoji {
      line-height: 1;
    }
  `

  @property({ type: Object })
  reactions?: Reactions

  render() {
    return html`<md-chip-set>
      ${this.reactions?.emojis && Object.entries(this.reactions.emojis)
        .map(([emoji, count]) => html`<md-filter-chip label=${count} class="chip">
          <span slot="icon" class="chip-emoji">${emoji}</span>
        </md-filter-chip>`)}
    </md-chip-set>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kkna-material-reactions': KKnaMaterialReactions
  }
}
