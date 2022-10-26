
import { ContractType } from '@execution-machine/sdk'
import fs from 'fs'
import { exmInstance } from './exm.js'
import { state } from './state.js'

const contractSource = fs.readFileSync('handler.js')
const data = await exmInstance.functions.deploy(contractSource, state, ContractType.JS)

console.log({ data })

fs.writeFileSync('./functionId.js', `export const functionId = "${data.id}"`)