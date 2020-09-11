import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('cdt_perfil')
export class RolesDetails extends BaseEntity {
    
  @PrimaryColumn({ name: 'id'})
  id: number;

  @Column({ name: 'nombre'})
  name: string;
}