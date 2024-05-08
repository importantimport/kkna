import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('kkna-material')
export class KKnaMaterial extends LitElement {
  render() {
    return html``
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kkna-material': KKnaMaterial
  }
}
