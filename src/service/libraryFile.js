import fs from "fs";
import path from "path";

export const readLibrary = () => {
    try{
        let fileData = fs.readFileSync(path.resolve("library.json"),"utf-8");
        return JSON.parse(fileData) || [];
    }catch(e){
        throw new Error("Unable to read library")
    }
};

export const writeLibrary = (fileData) => {
    try{
        fs.writeFileSync(path.resolve("library.json"),data);
        return true;
    }catch(e){
        throw new Error("Unable to write library")
    }
};

