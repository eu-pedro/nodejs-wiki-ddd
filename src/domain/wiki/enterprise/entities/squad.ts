import { randomUUID } from 'node:crypto'

export class Squad {
  public id: string
  public name: string
  public description: string
  public category: string
  public date: Date

  constructor(
    id: string,
    name: string,
    description: string,
    category: string,
    date: Date,
  ) {
    this.id = id ?? randomUUID()
    this.name = name
    this.description = description
    this.category = category
    this.date = date
  }
}
