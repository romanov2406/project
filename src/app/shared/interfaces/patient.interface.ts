export interface IPatient {
  name: string,
    lastname: string,
    nextVisit: string,
    abliment: string,
    visitStatus: VisitStatus
}

export enum VisitStatus{
    InTreatment = 'In treatment',
    TreatmentFinished = 'Treatment finished',  
    TreatmentPlanCreated = 'Treatment plan created',  
    Declined = 'Declined'  
}
