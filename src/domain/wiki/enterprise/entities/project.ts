import { randomUUID } from 'node:crypto'

export class Project {
  public id: string
  public name: string
  public description: string
  public isPublic: boolean
  public date: Date

  constructor(
    id: string,
    name: string,
    description: string,
    isPublic: boolean,
    date: Date,
  ) {
    this.id = id ?? randomUUID()
    this.name = name
    this.description = description
    this.isPublic = isPublic
    this.date = date
  }
}
