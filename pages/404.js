import Link from "next/link"
import {useEffect} from 'react';
import {useRouter} from 'next/router';
const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    },[])
    return (
        <div className="not-found">
            <h1>oooooops.....</h1>
            <h2>The Page is not found</h2>
            <Link href="/"><a className="btn">Go to Home</a></Link>
        </div>
    )
}

export default NotFound