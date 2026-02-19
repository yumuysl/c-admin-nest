import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'
import { i18nValidationMessage } from 'nestjs-i18n'

export class UpdateSysconfigDto {
  @ApiProperty()
  @IsOptional()
  fileUploadMax?: number

  @ApiProperty()
  @IsOptional()
  @IsString()
  ossBucket?: string
}
