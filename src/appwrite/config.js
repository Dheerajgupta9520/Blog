import confi from "./confi.js";
import { Client, Databases,  ID, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(confi.appwriteUrl)
            .setProject(confi.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument( confi.appwriteDatabaseId,
            confi.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId
            })
        } catch (error) {
            console.log("Appwrite service :: createPost :: error",error)
        }
    }
    async updatepost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(  confi.appwriteDatabaseId,
            confi.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
        )
        } catch (error) {
            console.log("Appwrite service :: updatepost :: error",error)
        }
    }

    async deletePost(slug){
        try {
                await this.databases.deleteDocument(
                confi.appwriteDatabaseId,
                confi.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error",error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                confi.appwriteDatabaseId,
                confi.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error",error)
            return false
        }
    }

    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                confi.appwriteDatabaseId,
                confi.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error",error)
            return false
        }
    }

    //file upload

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                confi.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error",error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                confi.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error",error)
            return false
        }
    }

    async filePreview(fileId){
        try {
            return await this.bucket.getFileView(
                confi.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: filePreview :: error",error)
            return false
        }
    }
    
}



const service = new Service()

export default service