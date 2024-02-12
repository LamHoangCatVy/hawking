import {NextAuthOptions} from 'next-auth'
import { prisma } from './db'

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    callbacks:{
        jwt: async({token}) => {
            const db_user = await prisma.user.findFirst({
                where:{
                    email: token.email
                }
            })
            if(db_user){
                token.id = db_user.id
                token.credits = db_user.credit
            }
        }
    }
    providers: []
}
