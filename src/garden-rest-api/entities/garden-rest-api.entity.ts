// garden.entity.ts

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
  contact_person_name: string;

  @Column()
  contact_person_phone_number: string;

  @Column()
  gardner_name: string;

  @Column()
  gardner_phone: string;

  @Column({ type: 'int' })
  gardner_rating: number;

  @Column()
  gardner_image: string;

  @Column({ type: 'int' })
  park_size: number;

  @Column()
  vegetation: string;

  @Column()
  park_type: string;

  @Column({ type: 'boolean' })
  grass_trimming: boolean;

  @Column({ type: 'boolean' })
  tree_pruning: boolean;

  @Column({ type: 'boolean' })
  pest_control: boolean;

  @Column('double precision')
  coordinate_latitude: number;

  @Column('double precision')
  coordinate_longitude: number;

  @Column()
  address_street: string;

  @Column()
  address_city: string;

  @Column()
  garden_img_1: string;

  @Column()
  garden_img_2: string;

  @Column()
  garden_img_3: string;

  @Column()
  garden_img_4: string;

  @Column()
  garden_img_alt: string;


  @OneToOne(() => User, (user) => user.garden)
  @JoinColumn()
  user: User;
}
