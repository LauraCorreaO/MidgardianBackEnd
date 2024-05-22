import { Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GenericRepositoryInterface } from "src/domain/ports/infrastructure/repositories/generic-repository";
import { Repository, EntityTarget } from "typeorm";

@Injectable()
export class TypeORMGenericRepository<T> implements GenericRepositoryInterface<T>{
   logger: Logger = new Logger(TypeORMGenericRepository.name);
   constructor(
   public readonly repository: Repository<T>) {
    
   }
   async obtenerTodos(): Promise<T[]> {
      try {
         return await this.repository.find();
      } catch (error) {
         this.logger.error(`Error al obtener información de la base de datos`, '');
         this.logger.log(error);
         throw new InternalServerErrorException('Error al obtener información de la base de datos, por favor vuelva a intentarlo');
      }
   }

async obtenerPorId(id: string): Promise<T> {
  return 
}

   async agregar(entity: T): Promise<T> {
      try {
         return await this.repository.save(entity);
      } catch (error) {
         this.logger.error(`Error al guardar en la base de datos`, '');
         this.logger.log(error);
         throw new InternalServerErrorException('Error al guardar en la base de datos, por favor vuelva a intentarlo');
      }
   }

   async actualizar(id: string, entity: T): Promise<T> {
      return
   }

   async eliminar(id: string): Promise<void> {
      try {
         await this.repository.delete(id);
      } catch(error) {
         this.logger.error(`Error al eliminar el documento en base de datos`, '');
         this.logger.log(error);
         throw new InternalServerErrorException('Error al eliminar el documento en base de datos, por favor vuelva a intentarlo');
      }
   }

}
