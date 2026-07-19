import Link from "next/link";

export default function F1() {
    return (
        <>
        <h1>F1 PAGE</h1>
        <Link className="underline text-blue-400" href="/f1/f2">F2 PAGE</Link>
        <Link className="underline text-blue-400" href="/f3">F3 PAGE</Link>

        </>

    )
}