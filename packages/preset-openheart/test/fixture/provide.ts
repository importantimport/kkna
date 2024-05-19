import { provider } from '@kkna/context'
import { openheart } from '@kkna/preset-openheart'

const provide = provider(document.body, {
  initialValue: {
    presets: [
      openheart({ endpoint: 'https://api.openheart.fyi' }),
    ],
  },
})

provide.hostConnected()
