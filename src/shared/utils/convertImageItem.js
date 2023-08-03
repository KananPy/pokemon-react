import { imageUrl } from "../constant/imageURL"


export const convertItemImage = (id) => {

    const newID = id < 10 ? "00" + id : id < 100 ? "0" + id : id
  
  
    return imageUrl(newID)
  }