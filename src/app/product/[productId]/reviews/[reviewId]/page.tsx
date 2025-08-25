import { notFound, redirect } from "next/navigation";

export default async function ProductReview( { 
    params, 
}: { 
    params: Promise<{ productId: String, reviewId: string}>;
}) {
    const { productId, reviewId} = await params;
    if(parseInt(reviewId) > 1000) {
        // notFound();
        redirect('/product')
    }
    return <>
        <h1>Review ID {reviewId}</h1>
        <h1>Product ID {productId}</h1>
    </>
}