 
import path from 'path';
import fs from 'fs/promises'
// const __filename =  fileURLToPath(import.meta.url);

 

import todos from './db/todos.json' assert {type:"json"}
 
export const handler = async function (event, context) {
 
      const filePath = path.join(__dirname, '/db/user.json')
      console.log(filePath)
    //   const temper = await fs.readFile(filePath, 'utf-8')
    //   console.log(temper)
    return{
        statusCode:200,
        body: JSON.stringify({path:filePath})
    }
};

 