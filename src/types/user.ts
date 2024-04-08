import { CommonData } from './base'

export interface UserData extends CommonData{
    name: string
    email: string
    bio: string
    spentAmount: number
}

export interface SignInUserData {
    email: string
    password: string
}