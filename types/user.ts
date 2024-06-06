import { Post } from "./post";

export interface User {
    id: number,
    name: string,
    posts: Post[],
    picture: string,
}
