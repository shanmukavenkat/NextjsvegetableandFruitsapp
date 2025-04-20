import { PrismaClient } from '@prisma/client';
import { neonConfig } from '@neondatabase/serverless';
import ws from 'ws';
import { PrismaNeon } from '@prisma/adapter-neon';

// Set WebSocket constructor for Neon
neonConfig.webSocketConstructor = ws;

const createPrismaClient = () => {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error('DATABASE_URL is not set');

  // ✅ Compatible with Webpack: directly use neonConfig for configuration
  const neonQuery = { connectionString, ...neonConfig };
  const adapter = new PrismaNeon(neonQuery);
  const prisma = new PrismaClient({ adapter });

  return prisma;
};

const globalForPrisma = globalThis as typeof globalThis & {
  prismaGlobal?: ReturnType<typeof createPrismaClient>;
};

export const prisma = globalForPrisma.prismaGlobal ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prismaGlobal = prisma;
}

export default prisma;
