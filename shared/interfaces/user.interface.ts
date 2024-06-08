import { Post } from "./post.interface";

export interface User {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    password: string;
    posts?: Post[];
    followers?: string[];
    following?: string[];
    created_at: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
