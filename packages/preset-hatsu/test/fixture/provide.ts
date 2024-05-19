import { provider } from '@kkna/context'
import { hatsu } from '@kkna/preset-hatsu'

const provide = provider(document.body, {
  initialValue: {
    presets: [
      hatsu({ instance: 'https://hatsu.local' }),
    ],
  },
})

provide.hostConnected()
