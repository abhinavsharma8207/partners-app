import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PartnersModule } from './partners/partners.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://app_user:Dubai2019@cluster0.ub0qx.mongodb.net/partnerDatabase?retryWrites=true&w=majority',
    ),
    PartnersModule,
  ],
  providers: [],
})
export class AppModule {}
