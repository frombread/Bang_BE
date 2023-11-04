export class UpdatePatientDto {
  readonly name?: string;
  readonly gender?: string;
  readonly birthday?: number;
  readonly conditions?: string;
  readonly painAreas?: string[];
  readonly etc?: string | null;
}
