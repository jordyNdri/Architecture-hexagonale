import {UseCase} from "../../base/use-case";
import {CreateEmployerDto} from "../../domain/dtos/employer/create-employer.dto";
import {EmployerRepository} from "../../repositories/employer-repository";
import {Observable} from "rxjs";

/**
 * Class illustrant un cas d'utilisation spécifique l'Entité: Employer. Implémente l'interface "UseCase" ./base/use-case.
 * Execusion de la fonction "createEmployer" du repository.
 * Action de création d'un employer, envoie de l'objet à créer.
 */
export class CreateEmployerUsecase implements UseCase<CreateEmployerDto, void> {
  constructor(private repository: EmployerRepository) {
  }

  execute(command: CreateEmployerDto): Observable<void> {
    return this.repository.createEmployer(command);
  }
}
