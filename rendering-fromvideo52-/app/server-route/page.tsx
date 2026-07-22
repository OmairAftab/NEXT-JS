

import {Serversidefunction} from "../utils/server-utils"

import { ClientSideFunction } from "../utils/client-utils";



export default function serverRoute() {
        const result=Serversidefunction();

        // const testClient=ClientSideFunction(); // this will throw error because we are trying to access client side function in server side which is not allowed because client side function is not available in server side and hence it will throw error

        return <h1>Server route... {result}</h1>
}