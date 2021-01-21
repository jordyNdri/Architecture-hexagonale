import {Component, OnInit} from '@angular/core';
import {EmployerDto} from "../../../../core/domain/dtos/employer/employer.dto";
import {GetAllEmployerUsecase} from "../../../../core/use-cases/employer/get-all-employer.usecase";
import {MockEmployerRepositoryAdaptateur} from "../../../../infrastructure/mock/mock-employer-repository-adaptateur/mock-employer-repository-adaptateur";
import {CreateEmployerUsecase} from "../../../../core/use-cases/employer/create-employer.usecase";
import {SecteurEmployerEnum} from "../../../../core/domain/enums/secteur-employer.enum";
import {TypeContratEmployerEnum} from "../../../../core/domain/enums/type-contrat-employer.enum";
import {DeleteEmployerUsecase} from "../../../../core/use-cases/employer/delete-employer.usecase";

@Component({
  selector: 'app-employer-liste',
  templateUrl: './employer-liste.component.html',
  styleUrls: ['./employer-liste.component.scss']
})
export class EmployerListeComponent implements OnInit {

  listEmployer: EmployerDto[] = [];

  private getAllEpmloyer: GetAllEmployerUsecase;
  private createEpmloyer: CreateEmployerUsecase;
  private deleteEpmloyer: DeleteEmployerUsecase;

  constructor(private employerRepository: MockEmployerRepositoryAdaptateur) {
    this.getAllEpmloyer = new GetAllEmployerUsecase(this.employerRepository);
    this.createEpmloyer = new CreateEmployerUsecase(this.employerRepository);
    this.deleteEpmloyer = new DeleteEmployerUsecase(this.employerRepository);
  }

  ngOnInit(): void {
    this.recupererEmployer();
  }

  recupererEmployer() {
    this.getAllEpmloyer.execute().subscribe(listEmployer => {
      this.listEmployer = listEmployer;
    });
  }

  creerEmployer() {
    this.createEpmloyer.execute({
      age: 25,
      anneeWork: 1,
      nom: 'Nom test 2',
      prenoms: 'Prénom test 2',
      secteur: SecteurEmployerEnum.developpement,
      statut: '',
      typeContrat: TypeContratEmployerEnum.CDD,
    }).subscribe(listEmployer => {

      this.recupererEmployer();
    });
  }

  modifierEmployer(employer: EmployerDto) {
  }

  supprimerEmployer(id: any) {
    this.deleteEpmloyer.execute(id).subscribe(employer => {

      this.recupererEmployer();
    });
  }

}
