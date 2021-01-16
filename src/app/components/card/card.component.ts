import { Component, Input, OnInit } from '@angular/core';
import { PatientsService } from './../../shared/services/patients.service';
import { IPatient, VisitStatus } from '../../shared/interfaces/patient.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private patientService: PatientsService) { }
  patients: IPatient[] = []
  @Input() search: string;
  p: number = 1;
  collection: any[] = this.patients;
  status = VisitStatus;

  ngOnInit(): void {
    this.getStaticPatients();
  }

  getStaticPatients(): void {
    this.patients = this.patientService.patients;
  }

}
