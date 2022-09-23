import { UserEntity } from "../../entities/user";

export class CreateUserUseCase {
  constructor(userRepository) {
    this.repository = userRepository;
  }

  async execute(user) {
    const newUser = new UserEntity(user);
    newUser.validate();
    return await this.repository.create(newUser.getUser());
  }
}
