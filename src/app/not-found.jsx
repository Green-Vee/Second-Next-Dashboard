import Link from 'next/link'

const NotFound = () => {
    return (
        <div>
            <h2>Page not found</h2>
            <p>Sorry, The page you're looking for doesn't not exit</p>
            <Link href='/'>Return Home</Link>
        </div>
    )
}

export default NotFound