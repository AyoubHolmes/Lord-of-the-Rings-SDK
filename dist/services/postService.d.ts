import { NewPost, Post } from 'src/types';
export declare class Posts {
    resourceName: string;
    getPostById(id: number): Promise<Post | void>;
    getPosts(): Promise<Post[] | void>;
    createPost(newPost: NewPost): Promise<Post | void>;
}
