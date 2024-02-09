import { makeFetchUsersUseCase } from "@/use-cases/factories/make-fetch-users-use-case";
import { makeRegisterUseCase } from "@/use-cases/factories/make-register-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function register(req: FastifyRequest, reply: FastifyReply) {
  const names = ['Jhonata', 'Wesley']
  // let users: User[] = []
  try {
    const registerUseCase = makeRegisterUseCase()

    for (const name of names) {
      await registerUseCase.execute({ name })
    }
  } catch (err) {
    throw err
  }

  const fetchUsersUseCase = makeFetchUsersUseCase()
  const { users } = await fetchUsersUseCase.execute()

  let userListHtml = '<ul>';
  users.forEach(user => {
    userListHtml += `<li>${user.name}</li>`;
  });
  userListHtml += '</ul>';

  return reply.status(201).header('Content-Type', 'text/html').send('<h1>Full Cycle Rocks!!</h1>' + userListHtml);
}