import { randomUUID } from "node:crypto"

export class Post {
  public id: string
  public title: string
  public content: string
  public isPublic: boolean
  public date: Date

  constructor(
    id: string,
    title: string,
    content: string,
    isPublic: boolean,
    date: Date
  ) {
    this.id = id ?? randomUUID()
    this.title = title
    this.content = content
    this.isPublic = isPublic
    this.date = date
  }
}