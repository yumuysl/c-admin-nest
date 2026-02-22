import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsNumber, IsString } from 'class-validator'
import { i18nValidationMessage } from 'nestjs-i18n'

export class UpdateSysconfigDto {
  @ApiProperty()
  @IsNumber(
    {},
    {
      message: i18nValidationMessage('validation.errorType', {
        field: 'fileUploadMax',
        type: 'number',
      }),
    }
  )
  fileUploadMax?: number

  @ApiProperty()
  @IsOptional()
  @IsString()
  ossBucket?: string
}
