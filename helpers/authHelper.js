import bcrypt from 'bcrypt'  // using bcrypt for changing normal password to hashed password for securety purpos

export const hashPassword = async (password) => {
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds)
    } catch (error){
        console.log(error);
    }
}

export const comparePassword = async(password,hashedPassword)=>{
    return bcrypt.compare(password, hashedPassword);
}