import {UseCase} from "../../base/use-case";
import {EmployerDto} from "../../domain/dtos/employer/employer.dto";
import {EmployerRepository} from "../../repositories/employer-repository";
import {Observable} from "rxjs";

/**
 * Class illustrant un cas d'utilisation spécifique l'Entité: Employer. Implémente l'interface "UseCase" ./base/use-case.
 * Execusion de la fonction "getEmployerById" du repository.
 * Action de recupération d'un employer depuis son ID.
 */
export class GetEmployerByIdUsecase implements UseCase<any, EmployerDto> {
  constructor(private repository: EmployerRepository) {
  }

  execute(command: number): Observable<EmployerDto> {
    return this.repository.getEmployerById(command);
  }
}
