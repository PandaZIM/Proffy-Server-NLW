import { Request, Response, response } from 'express'
import db from '../database/connection'

export default class UserController{
    async index(request: Request, Response: Response) {
        
        const filters = request.query

        const userName = filters.userName as string
        const passWord = filters.passWord as string
        const email = filters.email as string

        if(!filters.userName || !filters.passWord || !filters.email) {
            return response.status(401).json({
                error: 'falta coisa'
            })
        }

        const User = await db('users')
    } 
}