import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { SysconfigService } from './sysconfig.service'
import { CreateSysconfigDto } from './dto/create-sysconfig.dto'
import { UpdateSysconfigDto } from './dto/update-sysconfig.dto'

@Controller('sysconfig')
@ApiTags('系统配置管理模块')
export class SysconfigController {
  constructor(private readonly sysconfigService: SysconfigService) {}

  @Get('info')
  @ApiBearerAuth()
  async findInfo() {
    return this.sysconfigService.getSysconfigInfo()
  }

  @Post()
  @ApiBearerAuth()
  async create(@Body() createSysconfigData: CreateSysconfigDto) {
    return this.sysconfigService.createSysconfigData(createSysconfigData)
  }

  @Put(':id')
  @ApiBearerAuth()
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSysconfigData: UpdateSysconfigDto
  ) {
    return this.sysconfigService.updateSysconfigData(id, updateSysconfigData)
  }
}
