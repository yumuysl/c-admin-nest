import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsNumber, IsString } from 'class-validator'
import { i18nValidationMessage } from 'nestjs-i18n'

export class UpdateSysconfigDto {
  @ApiProperty()
  @IsNumber()
  fileUploadMax?: number

  @ApiProperty()
  @IsOptional()
  @IsString()
  ossBucket?: string
}
