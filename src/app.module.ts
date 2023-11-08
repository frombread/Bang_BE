import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PatientsModule,
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/humanscape'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
