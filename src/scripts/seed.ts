// src/scripts/seed.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { DiseasesSeedService } from '../patients/seeds/diseases.seed';
import { BodyPartsSeedService } from '../patients/seeds/bodyparts.seed';
import { PatientsSeedService } from '../patients/seeds/partients.seed';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);

  // Seed diseases
  const diseasesSeeder = app.get(DiseasesSeedService);
  await diseasesSeeder.populateDiseases();

  // Seed patients
  const patientsSeeder = app.get(PatientsSeedService);
  await patientsSeeder.populatePatients();

  // Seed body parts
  const bodyPartsSeeder = app.get(BodyPartsSeedService);
  await bodyPartsSeeder.populateBodyParts();

  await app.close();
}

seed()
  .then(() => console.log('Seeding complete!'))
  .catch((error) => {
    console.error('Seeding failed!', error);
    process.exit(1);
  });
