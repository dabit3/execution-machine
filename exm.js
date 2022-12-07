import { Exm } from "npm:@execution-machine/sdk";
const APIKEY = Deno.env.get("EXM_PK");
export const exmInstance = new Exm({ token: APIKEY || "" });
