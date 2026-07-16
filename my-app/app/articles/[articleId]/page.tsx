"use client";

import Link from "next/link";
import {use} from "react";
export default  function NewsArticle({
    params,
    searchParams,
}: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang: string }>;
}) {

    const { articleId } = use (params);
    const { lang } = use (searchParams);

    return (
        <>
            <p>Current language: {lang}</p>
            <p>Current article id is : {articleId}</p>

            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            </div>
        </>
    );
}


/*
DESCRIPTION:
- params      -> dynamic segments from the URL PATH, defined by folder names like [articleId]. Always present if route matches.
- searchParams-> everything after "?" in the URL (query string). Key names in code must exactly match key names in the URL, or value will be undefined.
- Both are Promises in the App Router -> must unwrap with "use()" (client component) or "await" (server component/async function).
- Common bug: query key in Link href doesn't match the key destructured from searchParams (e.g. "lang" vs "language") -> value silently comes back undefined.
*/