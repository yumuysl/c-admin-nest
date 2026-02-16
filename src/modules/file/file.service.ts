import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/modules/prisma/prisma.service'
import { CreateFileDto } from './dto/create-file-dto'

@Injectable()
export class FileService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.file.findMany()
  }

  create(CreateFileDto: CreateFileDto) {
    //TODO:调用阿里云接口上传文件，获取返回结果后保存

    console.log('调用了create', CreateFileDto)
    // return this.prisma.file.create({
    //   data: CreateFileDto,
    // })
  }

  delete(id: number) {
    return this.prisma.menu.delete({
      where: { id },
    })
  }
}
