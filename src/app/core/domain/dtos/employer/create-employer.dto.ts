import {SecteurEmployerEnum} from "../../enums/secteur-employer.enum";
import {TypeContratEmployerEnum} from "../../enums/type-contrat-employer.enum";

/**
 * Format de donnée pour une Entité, ou format d'objet à manipuler
 */
export interface CreateEmployerDto {
  nom: string;
  prenoms: string;
  age: number;
  statut: string;
  secteur: SecteurEmployerEnum;
  anneeWork: number;
  typeContrat: TypeContratEmployerEnum;
}
