import { ApiProperty } from '@nestjs/swagger'
import { FileType } from '@/common/prisma/getPrisma'
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
import { i18nValidationMessage } from 'nestjs-i18n'

export class CreateFileDto {
  @ApiProperty()
  @IsNotEmpty({
    message: i18nValidationMessage('validation.notEmpty', {
      field: 'fileType',
    }),
  })
  fileType: FileType

  @ApiProperty()
  @IsNotEmpty({
    message: i18nValidationMessage('validation.notEmpty', {
      field: 'fileName',
    }),
  })
  fileName: string

  @ApiProperty({ required: true })
  @IsNotEmpty({
    message: i18nValidationMessage('validation.notEmpty', {
      field: 'adress',
    }),
  })
  adress: string

  @ApiProperty({ required: false })
  @IsOptional()
  size?: number

  @ApiProperty({ required: false })
  @IsNotEmpty({
    message: i18nValidationMessage('validation.notEmpty', {
      field: 'isShow',
    }),
  })
  @IsBoolean()
  isShow?: boolean = true
}
