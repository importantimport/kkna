import { provider } from '@kkna/context'
import { mastodon } from '@kkna/preset-mastodon'
// import { openheart } from '@kkna/preset-openheart'
import { ContextRoot } from '@lit/context'

const root = new ContextRoot()

root.attach(document.body)

const provide = provider(document.body, {
  initialValue: {
    data: {
      mastodon: {
        id: '110810445656343599',
        instance: 'https://mastodon.gal',
      },
      // openheart: {
      //   endpoint: new URL('https://api.openheart.fyi'),
      // },
    },
    presets: [
      mastodon as any,
      // openheart as any,
    ],
  },
})

provide.hostConnected()
