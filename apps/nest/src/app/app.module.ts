import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { envValidationSchema } from '../common/app/env-validation-schema.const';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot({
    validationSchema: envValidationSchema,
    validationOptions: {
      allowUnknown: false,
    },
    expandVariables: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
