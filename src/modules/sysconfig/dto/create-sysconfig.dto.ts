import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { i18nValidationMessage } from 'nestjs-i18n'

export class CreateSysconfigDto {
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
  @IsNotEmpty({
    message: i18nValidationMessage('validation.notEmpty', {
      field: 'fileUploadMax',
    }),
  })
  fileUploadMax: number

  @ApiProperty()
  @IsString()
  @IsNotEmpty({
    message: i18nValidationMessage('validation.notEmpty', {
      field: 'ossBucket',
    }),
  })
  ossBucket: string
}
