import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger'
import { SysconfigService } from './sysconfig.service'
import { CreateSysconfigDto } from './dto/create-sysconfig.dto'
import { UpdateSysconfigDto } from './dto/update-sysconfig.dto'

@Controller('v1/sysconfig')
@ApiTags('系统配置管理模块')
export class SysconfigController {
  constructor(private readonly sysconfigService: SysconfigService) {}

  @Get('info')
  @ApiBearerAuth()
  @ApiOperation({ summary: '获取系统配置' })
  @ApiOkResponse({ description: '获取系统配置成功' })
  async findInfo() {
    return this.sysconfigService.getSysconfigInfo()
  }

  // @Post()
  // @ApiBearerAuth()
  // async create(@Body() createSysconfigData: CreateSysconfigDto) {
  //   return this.sysconfigService.createSysconfigData(createSysconfigData)
  // }

  @Put(':id')
  @ApiOperation({ summary: '修改系统配置' })
  @ApiOkResponse({ description: '修改系统配置成功' })
  @ApiBearerAuth()
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSysconfigData: UpdateSysconfigDto
  ) {
    return this.sysconfigService.updateSysconfigData(id, updateSysconfigData)
  }
}
