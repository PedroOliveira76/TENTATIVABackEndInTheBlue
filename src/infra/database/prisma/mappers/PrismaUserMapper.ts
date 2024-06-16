import { User as UserEntity } from "../../../../modules/user/entities/User"; // Renomeando o tipo para evitar conflito
import { User as PrismaUser } from '@prisma/client';

export class PrismaUserMapper {
    static toPrisma({ email, name, password, id }: UserEntity): PrismaUser {
        return {
            email,
            name,
            password,
            id,
        };
    }
}
