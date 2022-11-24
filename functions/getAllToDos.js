 
import path from 'path';
import fs from 'fs/promises'
// const __filename =  fileURLToPath(import.meta.url);

 

import todos from './db/todos.json' assert {type:"json"}
 
export const handler = async function (event, context) {
  
      const file =  await fs.readFile('./db/todos.json', 'utf-8')
      console.log(file)
   

    return{
        statusCode:200,
        body: file
    }
};

 