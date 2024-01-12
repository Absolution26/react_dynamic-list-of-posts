import { Post } from '../types/Post';
import { client } from '../utils/fetchClient';

export const getPosts = (url: string) => {
  return client.get<Post[]>(url);
};