import type { Comment } from '@kkna/core'

import '@material/web/chips/chip-set.js'
import '@material/web/chips/filter-chip.js'
import '@material/web/divider/divider.js'
import '@material/web/labs/card/outlined-card.js'
import '@material/web/list/list.js'
import '@material/web/list/list-item.js'
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js'
import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

import { processEmojis } from '../utils/process-emojis'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('kkna-material-comment')
export class KKnaMaterialComment extends LitElement {
  static styles = [typescaleStyles, css`
    :host {
      --md-divider-thickness: 0.05rem;
    }

    .chip {
      --md-filter-chip-trailing-space: 12px;
    }

    .chip-emoji {
      line-height: 1;
    }

    .headline {
      display: flex;
    }

    .headline .flex-1 {
      flex: 1;
    }

    .headline .source {
      opacity: 38%;
    }

    .headline .source:focus-visible,
    .headline .source:hover {
      opacity: 50%;
    }

    a {
      color: var(--md-sys-color-primary, #6750A4);
      text-decoration: none;
    }

    a:focus-visible, a:hover {
      text-decoration: underline;
    }
  `]

  @property({ type: Object })
  comment: Comment = {
    author: { name: 'empty' },
    content: 'empty',
    id: 'empty',
    published: new Date(),
    replies: [],
  }

  render() {
    return this.comment.id !== 'empty' && html`<md-outlined-card>
      <md-list style="background: transparent; padding: 0">
        <md-list-item>
          ${this.comment.author.avatar && html`<img slot="start" width="36" height="36" style="border-radius: 100%" src=${this.comment.author.avatar} />`}
          <div slot="headline" class="headline">
            ${unsafeHTML(processEmojis(this.comment.author.name, this.comment.author.emojis))}
            <span class="flex-1"></span>
            <!-- TODO: read this.comment.source -->
            <img class="source" height="24" width="18" src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/activitypub.svg" />
          </div>
          <div slot="supporting-text">
            ${this.comment.author.acct && `${this.comment.author.acct} ·`}
            ${this.comment.published.toLocaleDateString()}
          </div>
        </md-list-item>
        <md-divider></md-divider>
        <md-list-item class="md-typescale-body-medium">
          ${unsafeHTML(processEmojis(this.comment.content, this.comment.emojis))}
          ${this.comment.replies.map(comment => html`<kkna-material-comment .comment=${comment}></kkna-material-comment>`)}
        </md-list-item>
      </md-list>
    </md-outlined-card>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kkna-material-comment': KKnaMaterialComment
  }
}
