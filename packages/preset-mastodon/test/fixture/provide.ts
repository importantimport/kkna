import { provider } from '@kkna/context'
import { mastodon } from '@kkna/preset-mastodon'

const provide = provider(document.body, {
  initialValue: {
    presets: [
      /** @see {@link https://mastodon.social/@Mastodon/112343541328038890} */
      mastodon({
        id: '112343541328038890',
        instance: 'https://mastodon.social',
      }),
    ],
  },
})

provide.hostConnected()
