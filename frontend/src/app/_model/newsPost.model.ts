import { FileHandle } from './file_handle.model';

export interface newsPostModel {
//   id: number;
  title: string;
  subtitle: string;
  description: string[];
  img: any;
  processedImg?: string; 
  
  createDate: string;
  createTime: string;  
  lastUpdated: string; 
  // img: FileHandle[],
}




// export interface newsPostModel {

//     title: string;
//     subtitle: string;
//     description: string[];
//     img: any;
//     processedImg?: string; 
  

//   }
  