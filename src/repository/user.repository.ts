import db from '../config/database';
import userModel from '../models/user.model';

class UserRepository{
    async createUser(name:string,email:string,password:string){
        const query=`INSERT INTO ${userModel.tableName}
        (name,email,password)
        VALUES($1,$2,$3)
        RETURNING *
        `;

        const values  =[name,email,password];
        const result=await db.query(query,values)
        return result.rows[0];
    }

    async getAllUser(){
        const query=`SELECT * FROM ${userModel.tableName}`;
        return (await db.query(query)).rows;
    }
    async getUserById(id:string){
        const query=`SELECT * FROM ${userModel.tableName}
        WHERE id =$1
        `;
        const values=[id]
        const result=await db.query(query,values)
        return result.rows[0]
    }

    async deleteUser(filter:string){
        const query=`DELETE FROM ${userModel.tableName}
        WHERE id::text=$1
        OR email=$1
        RETURNING *;
        `;
        const values=[filter]
        const result=await db.query(query,values);
        return result.rows[0];
    }
}
export default new UserRepository();