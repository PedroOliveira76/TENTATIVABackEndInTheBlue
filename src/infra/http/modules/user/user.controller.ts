import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserUseCase } from "src/modules/user/useCases/createUserUsecases/createUserUseCase";
import { CreateUserBody } from "./dtos/userBody";

@Controller('user')
export class UserController{
    
    constructor(private createuserUseCase:CreateUserUseCase){}
    
    @Post()
    async createPost(@Body() body:CreateUserBody){
        const {email,name,password} = body
        const user = await this.createuserUseCase.execute({
            email,
            name,
            password
        })
        return user
    }
}