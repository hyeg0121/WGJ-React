import { CommonData } from './base'

export interface RoomData extends CommonData{
    name: string
    description: string
    capacity: number
}