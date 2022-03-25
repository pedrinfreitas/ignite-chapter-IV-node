import { Request, Response } from "express";
import { container } from "tsyringe";

import { AvatarUserUseCase } from "./AvatarUserUseCase";

class AvatarUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;

        const avatar_file = request.file.filename;

        const avatarUserUseCase = container.resolve(AvatarUserUseCase);
        await avatarUserUseCase.execute({ user_id: id, avatar_file });

        return response.status(204).send();
    }
}

export { AvatarUserController };
