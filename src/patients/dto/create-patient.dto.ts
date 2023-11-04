export class CreatePatientDto {
  name: string;
  gender: string;
  dateOfBirth: number;
  disease: string;
  bodyParts: string[];
  notes?: string;
}
