import { User as UserEntity } from "src/modules/user/entities/User";
import { UserRepository } from "src/modules/user/repositories/UserRepository";
import { PrismaService } from "../prisma.service";
import { PrismaUserMapper } from "../mappers/PrismaUserMapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUserRepository implements UserRepository {
    
    constructor(private prisma: PrismaService) {}

    async create(user: UserEntity): Promise<void> {
        const prismaUser = PrismaUserMapper.toPrisma(user);
        await this.prisma.user.create({
            data: prismaUser
        });
    }
}
