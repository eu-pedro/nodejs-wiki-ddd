import { Entity } from '../../core/entities/entity'
import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'

interface Props {
  email: string
  username: string
  password: string
  createdAt: Date
  updatedAt?: Date
}

export class User extends Entity<Props> {
  get email() {
    return this.props.email
  }

  get username() {
    return this.props.username
  }

  get password() {
    return this.props.password
  }

  set username(username: string) {
    this.props.username = username
    this.touch()
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  static create(props: Optional<Props, 'createdAt'>, id?: UniqueEntityID) {
    const user = new User(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return user
  }
}
