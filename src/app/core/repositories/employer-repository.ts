import {Observable} from "rxjs";
import {EmployerDto} from "../domain/dtos/employer/employer.dto";
import {CreateEmployerDto} from "../domain/dtos/employer/create-employer.dto";
import {UpdateEmployerDto} from "../domain/dtos/employer/update-employer.dto";

/**
 * Class abstraite permettant de lister les actions à effectuer sur une Entité
 * ces fonctions sont aussi abstraites
 */
export abstract class EmployerRepository {
  abstract getAllEmployer(): Observable<EmployerDto[]>;
  abstract getEmployerById(idEmployer: any): Observable<EmployerDto>;
  abstract createEmployer(employer: CreateEmployerDto): Observable<void>;
  abstract updateEmployer(employer: UpdateEmployerDto): Observable<void>;
  abstract deleteEmployer(idEmployer: any): Observable<void>;
}
