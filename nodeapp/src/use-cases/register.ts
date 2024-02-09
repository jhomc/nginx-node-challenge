import { UsersRepository } from "@/repositories/users-repository";

interface RegisterUseCaseRequest {
  name: string
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({ name }: RegisterUseCaseRequest) {
    const user = await this.usersRepository.create({
      name
    })

    return {
      user
    }
  }
}