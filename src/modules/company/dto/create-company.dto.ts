import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
import { i18nValidationMessage } from 'nestjs-i18n'

export class CreateCompanyDto {
  @ApiProperty()
  @IsNotEmpty({
    message: i18nValidationMessage('validation.notEmpty', {
      field: 'name',
    }),
  })
  name: string

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  parentId?: number
}
