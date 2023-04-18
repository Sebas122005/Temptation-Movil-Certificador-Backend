import{BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
class DetailIncome extends BaseEntity{

  @PrimaryGeneratedColumn()
  iddetincome: number;

  @Column()
  idincome: number;

  @Column()
  idproduc: number;

  @Column()
  price_buy: number;

  @Column()
  quantity: number;

  @Column()
  igv: number;

}

export default DetailIncome;