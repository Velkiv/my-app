"use client";

import { usePathname } from 'next/navigation';

export default function NotFound() {
    const pathName = usePathname();
    const productId = pathName.split("/")[2];
    const reviewId = pathName.split("/")[4];
    return <>
        <h1>Review {reviewId} not found in product {productId}</h1>
        <p>Could not find requested resource</p>
    </>
}