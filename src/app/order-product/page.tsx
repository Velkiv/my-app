'use client';

import { useRouter } from 'next/navigation';

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log('Placing your order!')
        router.push('/')
    }
    
    return <div>
        <h1>Just order the product.</h1>
        <button onClick={handleClick}>Place an Order</button>
    </div>
}