import { Post } from "./post";

export interface User {
  ID: number;
  name: string;
  posts: Post[];
  picture: string;
}
