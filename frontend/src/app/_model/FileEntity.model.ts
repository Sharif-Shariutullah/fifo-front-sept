export interface FileEntity {


    id: number;
    name: string;
    type: string;
    imageData?: string; // Optional property for Base64-encoded image  

    newsTitle: string;
    newsSubtitle: string;
    newsDescription: string;
    postDate: Date; 

     // newly added--------------

// id!: number;
// name!: string;
// type!: string;
// data!: string;
// newsTitle!: string;
// newsSubtitle!: string;
// postDate!: Date; // Make sure this field is added
// newsDescription!: string;
// imageData!: string; // Use this field for base64 image data if you're transforming it from the backend
}