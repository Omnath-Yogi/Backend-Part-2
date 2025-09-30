import { v2 as cloudinary} from "cloudinary";
 import fs from "fs" 

 cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
 })



 const uploadCloudinary = async (localFilePath) =>{
  
    try {
        if(!localFilePath) return null
        // upload the file on cloudinary
       const response =  await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // file has been uploaded successfully
        console.log("file is uploaded on cloudinary",response.url);
        return response
    } catch (error) {

        fs.unlinkSync(localFilePath) // reome the locally saved  temporary file as the upload operation got failed 
        return null;
        
    }
}



export {uploadCloudinary}





















//  cloudinary.v2.uploader.upload("https://www.google.com/imgres?q=indian%20flag&imgurl=https%3A%2F%2Fdeshpee.com%2Fwp-content%2Fuploads%2F2022%2F04%2Fblog_img_2021-05-03_10-20-42_SqzeANX78UfZhd4E.jpg&imgrefurl=https%3A%2F%2Fdeshpee.com%2Findian-national-flag-tiranga-design-meaning-history-facts-and-more%2F&docid=5B30ylmPRo8O1M&tbnid=UTB5bdICsyRIeM&vet=12ahUKEwi9kdfep_6PAxVRT2wGHZKwIT4QM3oECBoQAA..i&w=850&h=479&hcb=2&ved=2ahUKEwi9kdfep_6PAxVRT2wGHZKwIT4QM3oECBoQAA" ,
//     {public_id:"Indian_Flag"},
//     function(error,result) {console.log(result);});  
//this is how to upload file in cloud




 