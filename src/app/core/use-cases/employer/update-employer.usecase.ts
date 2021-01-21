import {UseCase} from "../../base/use-case";
import {UpdateEmployerDto} from "../../domain/dtos/employer/update-employer.dto";
import {EmployerRepository} from "../../repositories/employer-repository";
import {Observable} from "rxjs";

/**
 * Class illustrant un cas d'utilisation spécifique l'Entité: Employer. Implémente l'interface "UseCase" ./base/use-case.
 * Execusion de la fonction "updateEmployer" du repository.
 * Action de modification d'un employer, envoie de l'objet à modifier.
 */
export class UpdateEmployerUsecase implements UseCase<UpdateEmployerDto, void> {
  constructor(private repository: EmployerRepository) {
  }

  execute(command: UpdateEmployerDto): Observable<void> {
    return this.repository.updateEmployer(command);
  }
}
