import { Hono } from 'hono'
import { auth } from './middlewares/auth'
import { cache } from './middlewares/cache'
import { headers } from './middlewares/headers'
import { event, script } from './routes/analytics'
import { contact } from './routes/contact'
import { site } from './routes/site'

export type Environment = {
    Bindings: {
        ENVIRONMENT: 'production' | 'staging'
        AUTH_USERNAME: string
        AUTH_PASSWORD: string
    }
}

const app = new Hono<Environment>()

// middlewares
app.use('*', auth())
app.use('*', cache())
app.get('*', headers())

// routes
app.post('/api/contact', contact())
app.post('/api/event', event())
app.get('/insights.js', script())
app.get('*', site())

export default app
