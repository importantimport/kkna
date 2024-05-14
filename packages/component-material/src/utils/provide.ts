import { provider } from '@kkna/context'
import { hatsu } from '@kkna/preset-hatsu'
import { mastodon } from '@kkna/preset-mastodon'
import { ContextRoot } from '@lit/context'

const root = new ContextRoot()

root.attach(document.body)

const provide = provider(document.body, {
  initialValue: {
    overrides: {
      url: new URL('https://kwaa-blog-next.deno.dev/articles/test/'),
    },
    presets: [
      mastodon({
        id: '110810445656343599',
        instance: 'https://mastodon.gal',
      }),
      hatsu({
        instance: 'https://hatsu-nightly-debug.hyp3r.link',
      }),
    ],
  },
})

provide.hostConnected()
