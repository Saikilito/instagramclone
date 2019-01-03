import bcrypt from 'bcrypt';

export default {
    Query:{
        // HolaBebe: (parent, args, context, info) => "Beebeee!"
        allUsers: (parent, args, {models}) => models.User.find(),
        getUser: (parent, args, {models}) => models.User.findOne(args)
    },
    Mutation:{
        createUser: async (parent, args, {models}) => {
            try{
                const {password} = args
                const hashPassword = await bcrypt.hash(password, 8)
                console.log(hashPassword);
                const user = await models.User.create({...args, password: hashPassword})
                
                if(user && user.id) return true
            }
            catch(error){
                return false;
            }
        }
    }
}