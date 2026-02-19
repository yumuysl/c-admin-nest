import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateSysconfigDto } from './dto/create-sysconfig.dto'
import { UpdateSysconfigDto } from './dto/update-sysconfig.dto'

@Injectable()
export class SysconfigService {
  constructor(private readonly prisma: PrismaService) {}

  async getSysconfigInfo() {
    return this.prisma.sysconfig.findMany()
  }

  async createSysconfigData(data: CreateSysconfigDto) {
    return this.prisma.sysconfig.create({ data })
  }

  async updateSysconfigData(id: number, data: UpdateSysconfigDto) {
    return this.prisma.sysconfig.update({
      where: { id },
      data: data,
    })
  }
}
