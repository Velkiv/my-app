import Link from 'next/link';

export default function Product() {
    const productId = 100;
    return (
        <>
            <h1>List of Products</h1>
            <ul>
                <li><Link href={`/product/1`}>product 1</Link></li>
                <li><Link href={`/product/2`} replace>product 2</Link></li>
                <li><Link href={`/product/${productId}`}>product {productId}</Link></li>
            </ul>
        </>
        
    )
    
    
    return 
}