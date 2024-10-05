import { FileHandle } from './file_handle.model';

export interface newsPostModel {
//   id: number;
  title: string;
  subtitle: string;
  description: string[];
  img: any;
  processedImg?: string; // Add this line to store the base64 image
  
  createDate: string;  // Date in string format or Date object
  createTime: string;  // Time in string format or Date object
  lastUpdated: string; // Optional, to store the last update datetime
  // img: FileHandle[],
}




// export interface newsPostModel {

//     title: string;
//     subtitle: string;
//     description: string[];
//     img: any;
//     processedImg?: string; 
  

//   }
  