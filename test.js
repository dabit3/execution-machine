import fs from 'fs'
import { TestFunction, createWrite, FunctionType } from "@execution-machine/sdk"
import { state } from './state.js'
import { v4 as uuid } from 'uuid'
import { expect } from 'chai'

const id = uuid()
const functionSource = fs.readFileSync('./handler.js')

const createPost = {
  type: 'createPost',
  post: {
    id,
    title: "Hello world",
    content: "My first post",
    author: "Nader Dabit"
  }
}

const updatePost = {
  type: 'updatePost',
  post: {
    id,
    title: "Hello world V2",
    content: "My updated post!",
    author: "Nader Dabit"
  }
}

const deletePost = {
  type: 'deletePost',
  postId: id
}

describe("Testing EXM", function () {
  it("Should create a post", async function () {
    const testAttempt = await TestFunction({
      functionSource,
      functionType: FunctionType.JAVASCRIPT,
      functionInitState: state,
      writes: [createWrite(createPost)]
    })
    const value = testAttempt.state.posts[id]

    expect(value.id).to.equal(id)
    expect(value.title).to.equal("Hello world")
  })

  it("Should update a post", async function () {
    const testAttempt = await TestFunction({
      functionSource,
      functionType: FunctionType.JAVASCRIPT,
      functionInitState: state,
      writes: [createWrite(createPost), createWrite(updatePost)]
    })
    const value = testAttempt.state.posts[id]
    expect(value.title).to.equal("Hello world V2")
  })

  it("Should delete a post", async function () {
    const testAttempt = await TestFunction({
      functionSource,
      functionType: FunctionType.JAVASCRIPT,
      functionInitState: state,
      writes: [createWrite(createPost), createWrite(deletePost)]
    })
    const value = testAttempt.state.posts
    const length = Object.keys(value).length
    expect(length).to.equal(0)
  })
})
