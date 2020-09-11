import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { RolesDetails } from './user.role.entity';


@Entity('cl_usuario')
export class User extends BaseEntity {

  @PrimaryColumn({name: 'id_usuario'})
  id: number;

  @Column({ name: 'login'})
  username: string;

  @Column()
  email: string;

  @Column()
  passwd: string;

  @OneToOne(type => RolesDetails, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'id_perfilcdt' })
  // @Column({name: 'perfil'})
  roles: RolesDetails;

  // @ManyToMany(type => RolesDetails, role => role.name, { eager: true })
  // @JoinTable({ name: 'cdt_perfil' })
  // roles: RolesDetails[];

  
  @Column()
  activo: string;

}
