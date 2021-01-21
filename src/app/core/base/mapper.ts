/**
 * Class abstraite permettant de faire des transformation d'un élt A ver un élt B, en ayant en paramètre ces deux élts.
 * Elle implément deux fonctions abstraites
 * => mapFrom: de l'entré ver la sortie (A => B)
 * => mapTo: de la sortie ver l'entré (B => A)
 */
export abstract class Mapper<I, O> {
  abstract mapFrom(param: I): O;
  abstract mapTo(param: O): I;
}
