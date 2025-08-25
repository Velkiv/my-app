import { redirect } from "next/navigation";

function generateNumber(count: number) {
    return Math.floor(Math.random() * count);
}

export default async function ProductReview( { 
    params, 
}: { 
    params: Promise<{ productId: string, reviewId: string}>;
}) {
    const randomNumber = generateNumber(2);
    if(randomNumber===1) {
        throw new Error('Error loading occured');
    }
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