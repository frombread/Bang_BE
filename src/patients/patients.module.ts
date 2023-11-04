import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { Patient, PatientSchema } from './schemas/patient.schema';
import { Disease, DiseaseSchema } from './schemas/disease.schema';
import { BodyPart, BodyPartSchema } from './schemas/bodypart.schema';
import { DiseasesSeedService } from './seeds/diseases.seed';

import { BodyPartsSeedService } from './seeds/bodyparts.seed';
import { DiseasesController } from './diseases.controller';
import { BodyPartsController } from './bodyparts.controller';
import { DiseasesService } from './diseases.service';
import { BodyPartsService } from './bodyparts.service';
import { PatientsSeedService } from './seeds/partients.seed';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Disease.name, schema: DiseaseSchema },
      { name: Patient.name, schema: PatientSchema },
      { name: BodyPart.name, schema: BodyPartSchema },
    ]),
  ],
  controllers: [PatientsController, DiseasesController, BodyPartsController],
  providers: [
    PatientsService,
    DiseasesService,
    BodyPartsService,
    DiseasesSeedService,
    PatientsSeedService,
    BodyPartsSeedService,
  ],
})
export class PatientsModule {}
