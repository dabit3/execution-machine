import { exmInstance } from './exm.js'
import { functionId } from './functionId.js'

//not tested
const inputs = [{
  type: 'deletePost',
  postId: Deno.args[0]
}];

await exmInstance.functions.write(functionId, inputs)