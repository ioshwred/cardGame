import { Document } from "mongoose"

export interface IModule extends Document {
  name: string
  description: string
  identifier: string
  status: boolean
}