import {Observable} from 'rxjs';

/**
 * Interface de cas d'utilisation global qui sera implémenté à chaque Class de cas d'utilisation spécifique à une entité
 */
export interface UseCase<C, T> {
  execute(command: C): Observable<T>;
}
