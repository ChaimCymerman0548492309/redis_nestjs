import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class GardenRestApi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  contactPersonName: string;

  @Column()
  contactPersonPhoneNumber: string;

  @Column()
  gardenerName: string;

  @Column()
  gardenerPhone: string;

  @Column({ type: 'int' })
  gardenerRating: number;

  @Column()
  gardenerImage: string;

  @Column({ type: 'int' })
  parkSize: number;

  @Column()
  vegetation: string;

  @Column()
  type: string;

  @Column({ type: 'boolean' })
  treatmentGrassTrimming: boolean;

  @Column({ type: 'boolean' })
  treatmentTreePruning: boolean;

  @Column({ type: 'boolean' })
  treatmentPestControl: boolean;

  @Column('double precision')
  coordinatesLatitude: number;

  @Column('double precision')
  coordinatesLongitude: number;

  @Column()
  addressStreet: string;

  @Column()
  addressCity: string;

  @Column()
  gardenImg1: string;

  @Column()
  gardenImg2: string;

  @Column()
  gardenImg3: string;

  @Column()
  gardenImg4: string;

  @Column()
  gardenImgAlt: string;

  @OneToOne(() => User, (user) => user.garden)
  @JoinColumn()
  user: User;
}
