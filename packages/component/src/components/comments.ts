import type { Comment } from '@kkna/core'

import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

@customElement('kkna-comments')
export class KKnaComments extends LitElement {
  static styles = css`/* @unocss-placeholder */`

  @property({ type: Array })
  comments?: Comment[]

  render() {
    return html`<div class="prose max-w-none flex flex-col gap-6 mt-6">
      ${this.comments?.map(comment => html`
        <div class="bg-zinc-200 rounded flex flex-col p-6">
          <div class="flex gap-4">
            ${comment.author.avatar && html`<img class="w-12 h-12 rounded-full" src=${comment.author.avatar} />`}
            <p class="m-0">
              <span>${comment.author.name}</span>
              ${comment.author.acct && html`<br /><span class="color-zinc-500">${comment.author.acct}</span>`}
            </p>
            <p class="my-0 ml-auto">test</p>
          </div>
          <div>
            ${unsafeHTML(comment.content)}
          </div>
        </div>
      `)}
    </div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kkna-comments': KKnaComments
  }
}
