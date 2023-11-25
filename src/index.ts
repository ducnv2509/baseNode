import { configs } from './configs'
import { connectMongo } from './databases'
import { router } from './routes'

import createApp from './utils/app'
import logger from './utils/logger'

function main(): void {
  const app = createApp(router, configs)
  const host = configs.app.host
  const port = configs.app.port

  const startApp = (): void => {
    app.listen(Number(port), host, () => {
      logger.info('Listening on: %s:%d', host, port)
    })
  }
  connectMongo(() => {
    startApp()
  })
}

main()
