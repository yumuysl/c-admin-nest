import { Controller, Get } from '@nestjs/common'
import { CompanyService } from './company.service'
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger'

@Controller('v1/company')
@ApiTags('公司部门模块')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: '获取公司列表' })
  @ApiOkResponse({
    description: '获取公司列表成功',
  })
  getList() {
    return this.companyService.getList()
  }
}
