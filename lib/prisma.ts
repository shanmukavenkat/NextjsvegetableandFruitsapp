import { PrismaClient } from '@prisma/client'
import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import ws from 'ws'

// Ensure DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set in environment variables')
}

// Setup Neon WebSocket
neonConfig.webSocketConstructor = ws

// Setup Neon Pool
const pool = new Pool({ connectionString: process.env.DATABASE_URL })

// Setup Prisma Neon Adapter
const adapter = new PrismaNeon(pool)

// Setup Prisma Client with Neon driver adapter
const prisma = new PrismaClient({
  adapter,
})

export default prisma