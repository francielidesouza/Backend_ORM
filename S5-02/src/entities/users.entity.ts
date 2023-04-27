import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity("users")
class Users {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 60, unique: true })
  email: string;

  @Column({ type: "varchar", length: 60 })
  password: string;

  @Column({ type: "date", nullable: true })
  birthDate?: string | Date | null | undefined;

  @CreateDateColumn()
  createdAt?: string | Date;

  @DeleteDateColumn({ nullable: true })
  deleteddAt?: string | Date | null | undefined;

  @Column()
  campoAmais: number;
}

export { Users };
