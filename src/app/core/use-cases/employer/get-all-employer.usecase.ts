import {UseCase} from "../../base/use-case";
import {EmployerDto} from "../../domain/dtos/employer/employer.dto";
import {EmployerRepository} from "../../repositories/employer-repository";
import {Observable} from "rxjs";

/**
 * Class illustrant un cas d'utilisation spécifique l'Entité: Employer. Implémente l'interface "UseCase" ./base/use-case.
 * Execusion de la fonction "getAllEmployer" du repository.
 * Action de recupération de tous les employers.
 */
export class GetAllEmployerUsecase implements UseCase<void, EmployerDto[]> {
  constructor(private repository: EmployerRepository) {
  }

  execute(command: void): Observable<EmployerDto[]> {
    return this.repository.getAllEmployer();
  }

}
