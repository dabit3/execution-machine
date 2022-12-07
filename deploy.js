import { ContractType } from 'npm:@execution-machine/sdk';
import { exmInstance } from './exm.js';
import { state } from './state.js';

const contractFile = Deno.readFileSync("handler.js");
const data = await exmInstance.functions.deploy(contractFile, state, ContractType.JS);

console.log({ data });

/* after the contract is deployed, write the function id to a local file */
await Deno.writeTextFile('./functionId.js', `export const functionId = "${data.id}"`);