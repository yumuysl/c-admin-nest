import { Module } from '@nestjs/common'
import { SysconfigController } from './sysconfig.controller'
import { SysconfigService } from './sysconfig.service'

@Module({
  controllers: [SysconfigController],
  providers: [SysconfigService],
  exports: [SysconfigService],
})
export class SysconfigModule {}
