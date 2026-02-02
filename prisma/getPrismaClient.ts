import { PrismaClient } from './generated/prisma'
import { PrismaPg } from '@prisma/adapter-pg'
import '../src/types/global.d.ts'

// 声明全局变量类型
// declare global {
//   var prisma: PrismaClient | undefined
// }

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

// 防止开发环境下的重复实例化
const prisma =
  global.prisma ||
  new PrismaClient({
    log: [
      {
        emit: 'stdout',
        level: 'error',
      },
      {
        emit: 'stdout',
        level: 'warn',
      },
    ],
    adapter,
  })

// 开发环境下保存到全局变量
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma
