import Counter from './counter'

export const metadata={
    title: {     
        absolute: "Counter Page",  //if we write title as absolute in the individual page then it will override the title in the layout.tsx file
}
}

export default function CounterPage() {

    return <Counter />
}