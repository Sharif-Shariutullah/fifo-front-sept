import { FileHandle } from "./file_handle.model";

export interface newsPostModel{

    title : string,
    content: string,
    author: string,
    publishedAt: string,
    imageUrl: string,
    videoUrl: string,
    newsImages: FileHandle[],
} 
// title, content, imageUrl, videoUrl, author, published
