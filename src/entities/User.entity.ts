import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Role } from "@role/Role.enum";


@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false, length: 500 })
    password: string;

    @Column({ type: "enum", enum: Role, default: Role.User })
    role: Role;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date
}