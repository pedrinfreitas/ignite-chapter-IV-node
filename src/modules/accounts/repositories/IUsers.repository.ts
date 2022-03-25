import { ICreateUserDTO } from "../dtos/ICreateUser.dto";
import { User } from "../entities/Users.entity";

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
}

export { IUsersRepository };
