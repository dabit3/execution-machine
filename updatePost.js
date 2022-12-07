import { exmInstance } from './exm.js'
import { functionId } from './functionId.js'

//not tested
const inputs = [{
  type: 'updatePost',
  post: {
    id: Deno.args[0],
    title: "Hello world V2",
    content: "My updated post!",
    author: "Nader Dabit"
  }
}]

const data = await exmInstance.functions.write(functionId, inputs)

console.log({ data })
