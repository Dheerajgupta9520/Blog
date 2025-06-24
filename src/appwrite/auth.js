import conf from '../conf/conf.js'
import { Client, Account,ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account= new Account(this.client);
    }

    async createAccount ({email,password,name}){
        try{
           const userAccount = await this.account.create(ID.unique(),email,password,name);
            
           if (userAccount) {
                return this.login({email,password})
           } else {
                return userAccount;
           }

        }
        catch(e){
            throw e
        }
    }

    async login ({email,password}){
        try{
            const userAccount = await this.account.createEmailPasswordSession(email,password);
            return userAccount
        }
        catch(e){
            throw e
        }
    }

    async getCurrentUser(){
        try{
            const userAccount = await this.account.get();
            return userAccount
        }
        catch(e){
            throw e
        }

        
    }

    async logout(){
        try{
            const userAccount = await this.account.deleteSessions();
            return userAccount
        }
        catch(e){
            throw e
        }
    }
}

const authService =new AuthService();

export default authService