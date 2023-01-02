import { Module } from '@nestjs/common';
// import { ChatGPTAPIBrowser } from 'chatgpt'
import { UserModule } from './user/user.module.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module.js';
import { DataBaseConfig } from './database/DataBaseConfig.js';
// import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: [`${__dirname}/.env`],
      envFilePath: [`.env`],
    }),
    // ScheduleModule.forRoot(),

    TypeOrmModule.forRootAsync(DataBaseConfig),
    // UserModule,
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
