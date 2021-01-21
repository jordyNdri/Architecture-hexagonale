import {Injectable} from "@angular/core";
import {EmployerRepository} from "../../../core/repositories/employer-repository";
import {HttpClient} from "@angular/common/http";
import {CreateEmployerDto} from "../../../core/domain/dtos/employer/create-employer.dto";
import {Observable} from "rxjs";
import {EmployerDto} from "../../../core/domain/dtos/employer/employer.dto";
import {UpdateEmployerDto} from "../../../core/domain/dtos/employer/update-employer.dto";

@Injectable({
  providedIn: 'root',
})
export class WebEmployerRepositoryAdaptateur extends EmployerRepository {

  private configs: any;

  constructor(
    private http: HttpClient,
  ) {
    super();

    this.configs = {};
    this.configs.baseUrl = 'http://localhost:8080';
  }

  createEmployer(employer: CreateEmployerDto): Observable<void> {
    return this.http.post<void>(`${this.configs.baseUrl}/employer`, employer);
  }

  deleteEmployer(idEmployer: any): Observable<void> {
    return this.http.delete<void>(`${this.configs.baseUrl}/employer/${idEmployer}`);
  }

  getAllEmployer(): Observable<EmployerDto[]> {
    return this.http.get<EmployerDto[]>(`${this.configs.baseUrl}/employer`);
  }

  getEmployerById(idEmployer: any): Observable<EmployerDto> {
    return this.http.get<EmployerDto>(`${this.configs.baseUrl}/employer/${idEmployer}`);
  }

  updateEmployer(employer: UpdateEmployerDto): Observable<void> {
    return this.http.put<void>(`${this.configs.baseUrl}/employer`, employer);
  }

}
