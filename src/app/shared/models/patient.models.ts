import {
  IPatient, VisitStatus
} from '../interfaces/patient.interface';

export class Patient implements IPatient {
  constructor(
    public name: string,
    public lastname: string,
    public nextVisit: string,
    public abliment: string,
    public visitStatus: VisitStatus
  ) {}
}
