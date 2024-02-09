import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { FetchUsersUseCase } from '../fetch-users'

export function makeFetchUsersUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const fetchUsersUseCase = new FetchUsersUseCase(prismaUsersRepository)

  return fetchUsersUseCase
}