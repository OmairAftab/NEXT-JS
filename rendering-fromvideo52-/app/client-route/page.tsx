"use client";

import { useTheme } from "../components/theme-provider";
import { ClientSideFunction } from "../utils/client-utils";



export default function clientRoute() {

    const theme = useTheme();

    const result=ClientSideFunction();




    return (

        <>
        <h1 style={{color: theme.colors.primary}}>Client route</h1>

        <p>{result}</p>
        
        </>
    ) 
}