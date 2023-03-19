import { Hono } from 'hono'
import { auth } from './middlewares/auth'
import { headers } from './middlewares/headers'
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

// routes
app.post('/api/contact', contact())
app.get('*', headers(), site())

export default app
