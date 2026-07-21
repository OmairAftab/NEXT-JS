

import {Serversidefunction} from "../utils/server-utils"


export default function serverRoute() {
        const result=Serversidefunction();

        return <h1>Server route... {result}</h1>
}