// global.d.ts
declare global {
  namespace NodeJS {
    interface Global {
      prisma: object
    }
  }
}

// 确保这个文件被当作模块处理
export {}
