import {UseCase} from "../../base/use-case";
import {EmployerRepository} from "../../repositories/employer-repository";
import {Observable} from "rxjs";

/**
 * Class illustrant un cas d'utilisation spécifique l'Entité: Employer. Implémente l'interface "UseCase" ./base/use-case.
 * Execusion de la fonction "deleteEmployer" du repository.
 * Action de suppression d'un employer depuis son ID.
 */
export class DeleteEmployerUsecase implements UseCase<any, void> {
  constructor(private repository: EmployerRepository) {
  }

  execute(command: number): Observable<void> {
    return this.repository.deleteEmployer(command);
  }
}
