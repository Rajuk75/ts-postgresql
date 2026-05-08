import userRepository from "../repository/user.repository";

class UserService {
    async createUser(name: string, email: string, password: string) {
        try {

            if (email && !this.isValidEmail(email)) {
                throw new Error("Invalid email format");
            }

            const result = await userRepository.createUser(name, email, password);
            return result;
        } catch (error) {
            throw error;
        }
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async getAllUser(){
        return await userRepository.getAllUser();
    }
    
    async getUserById(userId:string){
        return await userRepository.getUserById(userId);
    }
    async deleteUser(filter:string){
        return await userRepository.deleteUser(filter)
    }
}

export default new UserService();