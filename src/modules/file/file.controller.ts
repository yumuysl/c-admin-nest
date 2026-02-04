import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { AuthGuard } from '@nestjs/passport'
import {
  ApiBearerAuth,
  ApiBody,
  ApiQuery,
  ApiResponse,
  ApiOperation,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'
import { File } from '@/constants/permissions'
import { CacheInvalidate } from '@/decorators'
import { CacheInterceptor } from '@/interceptors'
import { Request } from 'express'
import { DeleteManyDto } from '@/common/dto'
import { FileType } from 'prisma/generated/prisma'
import { FileService } from './file.service'
import { CreateFileDto } from './dto/create-file-dto'

@Controller('file')
@ApiTags('文件管理模板')
export class FileController {
  private static readonly CACHE_TLL = 60 * 60 * 1

  constructor(private readonly fileService: FileService) {}

  @Post()
  @Permissions(File.CREATE)
  @CacheInvalidate(['menu:tree', 'menu:flat', 'menu:permission'])
  @UseInterceptors(CacheInterceptor)
  @ApiBearerAuth()
  @ApiOperation({ summary: '上传文件' })
  @ApiOkResponse({
    description: '创建菜单成功',
  })
  create(@Body() createFileDto: CreateFileDto) {
    return this.fileService.create(createFileDto)
  }
}
