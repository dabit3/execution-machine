import { exmInstance } from './exm.js';
import { functionId } from './functionId.js';


const id = crypto.randomUUID();

/* the inputs array defines the data that will be available in the handler function as action.input */
const inputs = [{
  type: 'createPost',
  post: {
    id,
    title: "Hello world",
    content: "My first post",
    author: "Nader Dabit"
  }
}]

const data = await exmInstance.functions.write(functionId, inputs);
console.log({ data })

