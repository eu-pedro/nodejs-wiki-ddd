import { randomUUID } from 'node:crypto'

export class User {
  public id: string
  public email: string
  public username: string
  public password: string

  constructor(id: string, email: string, username: string, password: string) {
    this.id = id ?? randomUUID()
    this.email = email
    this.username = username
    this.password = password
  }
}
