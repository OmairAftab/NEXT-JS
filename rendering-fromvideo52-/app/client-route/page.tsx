"use client";

// import {Serversidefunction} from "../utils/server-utils"


import { useTheme } from "../components/theme-provider";



export default function clientRoute() {

    const theme = useTheme();

    // const result=Serversidefunction();


    return <h1 style={{color: theme.colors.primary}}>Client route</h1>
}