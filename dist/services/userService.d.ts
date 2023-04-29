import { User } from 'src/types';
export declare class Users {
    resourceName: string;
    getPostById(id: number): Promise<User | void>;
    getPosts(): Promise<User[] | void>;
    createPost(newPost: User): Promise<User | void>;
}
