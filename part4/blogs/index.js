
const {app} = require('./app')

const {PORT} = require('./utils/getEnv')


const thisPort = PORT ?? 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${thisPort} http://localhost:${thisPort}`)
})