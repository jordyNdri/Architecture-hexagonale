import {Injectable} from "@angular/core";
import {EmployerRepository} from "../../../core/repositories/employer-repository";
import {EmployerDto} from "../../../core/domain/dtos/employer/employer.dto";
import {Observable} from "rxjs";
import {CreateEmployerDto} from "../../../core/domain/dtos/employer/create-employer.dto";
import {UpdateEmployerDto} from "../../../core/domain/dtos/employer/update-employer.dto";
import {SecteurEmployerEnum} from "../../../core/domain/enums/secteur-employer.enum";
import {TypeContratEmployerEnum} from "../../../core/domain/enums/type-contrat-employer.enum";

@Injectable({
  providedIn: 'root',
})
export class MockEmployerRepositoryAdaptateur extends EmployerRepository {

  listEmployer: EmployerDto[] = [
    {
      age: 28,
      anneeWork: 3,
      id: 'tefg-45sdsd-sd45-sd02468-25',
      nom: 'Nom test 1',
      prenoms: 'Prénom test 1',
      secteur: SecteurEmployerEnum.developpement,
      statut: '',
      typeContrat: TypeContratEmployerEnum.CDI,
    }
  ];

  constructor() {
    super();
  }

  createEmployer(employer: CreateEmployerDto): Observable<void> {
    return new Observable(obs => {
      this.listEmployer = [...this.listEmployer, {
        ...employer,
        id: 'fiho-45sdsd-sd45-sd02468',
      }];

      obs.next();
    });
  }

  deleteEmployer(idEmployer: any): Observable<void> {
    return new Observable<void>(obs => {
      this.listEmployer = this.listEmployer.filter(item => item.id !== idEmployer);

      obs.next();
    });
  }

  getAllEmployer(): Observable<EmployerDto[]> {
    return new Observable<EmployerDto[]>(obs => {
      obs.next(this.listEmployer);
    });
  }

  getEmployerById(idEmployer: any): Observable<EmployerDto> {
    return new Observable<EmployerDto>(obs => {
      const employer = this.listEmployer.find(item => item.id === idEmployer);

      obs.next(employer);
    });
  }

  updateEmployer(employer: UpdateEmployerDto): Observable<void> {
    return new Observable<void>(obs => {
      this.listEmployer.forEach(item => {
        if (item.id === employer.id) {
          item = employer;
        }
      });

      obs.next();
    });
  }

}
