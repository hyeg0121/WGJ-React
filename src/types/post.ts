import { CommonData } from './base'
import { RoomData } from './room'
import { UserData } from './user'

export interface PostData extends CommonData {
    author: UserData
    room: RoomData
    amount: number
    item: string
    content: string
}