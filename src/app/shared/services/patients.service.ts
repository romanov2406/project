import { Injectable } from '@angular/core';
import { IPatient, VisitStatus } from '../interfaces/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patients: IPatient[] = [
    {
      name: 'Ivanov',
      lastname: 'Osidchuk',
      nextVisit: 'Consultation',
      abliment: '05.03.2020',
      visitStatus: VisitStatus.InTreatment
    },
    {
      name: 'Vitaliy',
      lastname: 'Stepanenko',
      nextVisit: 'Consultation',
      abliment: '05.03.2020',
      visitStatus: VisitStatus.TreatmentFinished
    },
    {
      name: 'Roman',
      lastname: 'Petruk',
      nextVisit: 'Consultation',
      abliment: '05.03.2020',
      visitStatus: VisitStatus.InTreatment
    },
    {
      name: 'Bogdan',
      lastname: 'Piddub',
      nextVisit: 'Consultation',
      abliment: '05.03.2020',
      visitStatus: VisitStatus.InTreatment
    },
    {
      name: 'Ivan',
      lastname: 'Apetik',
      nextVisit: 'Consultation',
      abliment: '05.03.2020',
      visitStatus: VisitStatus.TreatmentPlanCreated
    },
    {
      name: 'Valentin',
      lastname: 'Lishchek',
      nextVisit: 'Consultation',
      abliment: '05.03.2020',
      visitStatus: VisitStatus.Declined
    },
    {
      name: 'John',
      lastname: 'Travolta',
      nextVisit: 'Consultation',
      abliment: '05.03.2020',
      visitStatus: VisitStatus.TreatmentPlanCreated
    },
    {
      name: 'McCafy',
      lastname: 'Pundik',
      nextVisit: 'Consultation',
      abliment: '05.03.2020',
      visitStatus: VisitStatus.InTreatment
    },
    {
      name: 'Stepan',
      lastname: 'Stetchem',
      nextVisit: 'Consultation',
      abliment: '05.03.2020',
      visitStatus: VisitStatus.InTreatment
    },
    {
      name: 'Oleg',
      lastname: 'Zamoyskiy',
      nextVisit: 'Consultation',
      abliment: '05.03.2020',
      visitStatus: VisitStatus.InTreatment
    },
    {
      name: 'Taras',
      lastname: 'Kunduk',
      nextVisit: 'Consultation',
      abliment: '05.03.2020',
      visitStatus: VisitStatus.TreatmentPlanCreated
    },
    {
      name: 'Vasyl',
      lastname: 'Zadoroznij',
      nextVisit: 'Consultation',
      abliment: '05.03.2020',
      visitStatus: VisitStatus.TreatmentFinished
    },
    {
      name: 'Alina',
      lastname: 'zagoretska',
      nextVisit: 'Consultation',
      abliment: '05.03.2020',
      visitStatus: VisitStatus.Declined
    },
    {
      name: 'Viktorii',
      lastname: 'Karpich',
      nextVisit: 'Consultation',
      abliment: '05.03.2020',
      visitStatus: VisitStatus.TreatmentFinished
    },
    {
      name: 'Marina',
      lastname: 'Sheptivska',
      nextVisit: 'Consultation',
      abliment: '05.03.2020',
      visitStatus: VisitStatus.Declined
    },
    {
      name: 'Anna',
      lastname: 'Podolska',
      nextVisit: 'Consultation',
      abliment: '05.03.2020',
      visitStatus: VisitStatus.TreatmentPlanCreated
    }
  ];
  constructor() { }

}
