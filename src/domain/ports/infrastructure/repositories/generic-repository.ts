
export abstract class GenericRepositoryInterface<T> {
    abstract obtenerTodos(): Promise<T[]>;
    abstract obtenerPorId(id: string): Promise<T>;
    abstract agregar(entity: T): Promise<T>;
    abstract actualizar(id: string, entity: T): Promise<T>;
    abstract eliminar(id: string): void;
 } 