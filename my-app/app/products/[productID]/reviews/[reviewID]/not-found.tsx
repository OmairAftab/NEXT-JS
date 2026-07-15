"use client";

import {usePathname} from "next/navigation";

export default function Notfound() {
    const pathname = usePathname();
    const productId= pathname.split("/")[2];
    const reviewId= pathname.split("/")[4];

    return <h1>REVIEW {reviewId } NOT FOUND for product {productId}. This is custom made notfound page</h1>

}