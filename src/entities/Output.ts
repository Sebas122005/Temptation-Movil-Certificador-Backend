import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
 class Output extends BaseEntity {
  @PrimaryGeneratedColumn()
  idout: number;

  @Column()
  idproduc: number;

  @Column()
  quantity: number;

  @Column()
  dateout: String;

  @Column()
  destino:string;
  
  @Column()
  state:number;

 }
 export default Output;