import { exmInstance } from './exm.js'
import { functionId } from './functionId.js'
import { v4 as uuid } from 'uuid'

const id = uuid()

const inputs = [{
  type: 'createPost',
  post: {
    id,
    title: "Hello world",
    content: "My first post",
    author: "Nader Dabit"
  }
}]

const data = await exmInstance.functions.write(functionId, inputs)
console.log({ data })