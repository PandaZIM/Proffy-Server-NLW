import { Request, Response, response } from 'express'
import db from '../database/connection'
import Knex from 'knex'

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

    // Criação de um user

    async create(request: Request, response: Response) {
        const { 
            name, 
            lastName, 
            email, 
            passWord 
        } = request.body

        /* const user = await db('users_account')
            .whereExists(function() {
                this.select('users_account.*')
                .from('users_account')
                .whereRaw('`users_account` = `user_account`.`id`')
                .whereRaw('`users_account`.`email` = ??', [email])
            })

            console.log(user) */
        
        try {
        await db('users_account').insert({
            name, 
            lastName, 
            email, 
            passWord 
        }) 

        return response.status(201).json({
            message: 'Cadastro concluído'
        }) } catch (err){
            return response.status(401).json({
                error: "falta coisa"
            })
        }
    }
}