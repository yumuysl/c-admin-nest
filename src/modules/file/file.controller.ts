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
import { Permissions } from '@/decorators'
import { FILE } from '@/constants/permissions'
import { CacheInvalidate, CacheKey, CacheTTL } from '@/decorators'
import { CacheInterceptor } from '@/interceptors'
import { Request } from 'express'
import { DeleteManyDto } from '@/common/dto'
import { FileType } from 'prisma/generated/prisma'
import { FileService } from './file.service'
import { CreateFileDto } from './dto/create-file-dto'

@Controller('v1/files')
@ApiTags('文件管理模板')
export class FileController {
  private static readonly CACHE_TTL = 60 * 60 * 1

  constructor(private readonly fileService: FileService) {}

  @Get()
  @Permissions(FILE.READ)
  @CacheKey('file:all')
  @CacheTTL(FileController.CACHE_TTL)
  @UseInterceptors(CacheInterceptor)
  @ApiBearerAuth()
  @ApiOperation({ summary: '获取文件列表' })
  @ApiOkResponse({
    description: '文件列表获取成功',
  })
  findMenuTree() {
    return this.fileService.findAll()
  }

  @Post('upload')
  @Permissions(FILE.CREATE)
  @CacheInvalidate(['file:all'])
  @UseInterceptors(CacheInterceptor)
  @ApiBearerAuth()
  @ApiOperation({ summary: '上传文件' })
  @ApiOkResponse({
    description: '文件上传成功',
  })
  create(@Body() createFileDto: CreateFileDto) {
    console.log(createFileDto)
    return this.fileService.create(createFileDto)
  }
}
