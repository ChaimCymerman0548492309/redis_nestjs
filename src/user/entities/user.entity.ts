import { GardenRestApi } from 'src/garden-rest-api/entities/garden-rest-api.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
/**
 * this decorator will help to auto generate id for the table.
 */
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 30 })
    name: string;

    @Column({ type: 'boolean', nullable: true, default: null })
    isAdmin: boolean;

    @Column({ type: 'varchar', length: 40 })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    userType: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    address: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    city: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    paymentMethod: string;

    @Column({ type: 'varchar', length: 19, nullable: true })
    creditCardNumber: string;


    @Column({ type: 'varchar', length: 7, nullable: true })
    expirationDate: string;

    @Column({ type: 'varchar', length: 3, nullable: true })
    cvv: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    bankAccountNumber: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    bankName: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    accountHolderName: string;

    @Column({ type: 'varchar', length: 15, nullable: true })
    contactPhoneNumber: string;

    @OneToOne(() => GardenRestApi, (garden) => garden.user)
    garden: GardenRestApi;
}




