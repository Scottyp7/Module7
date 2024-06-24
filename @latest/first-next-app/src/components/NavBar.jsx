'use client' // client component, not server rendered import Link from "next/link"
import Link from 'next/link';
import { usePathname } from 'next/navigation'

// copied from previous NavBar.jsx component, modified for Next.js
// save as src/components/NavBar.jsx

function NavBar() {
    const path = usePathname(); // hook to check current path
    return (
        <nav className="NavBar"
            style={{  backgroundColor: '#09193b', color: '#14bbe5' }}>

            <ul className="menu">

                {/* Next.js Link components use href instead of to prop */} 
                <li><Link href="/">Home</Link></li>

                <li><Link href="/Dashboard" className={path.startsWith('/Dashboard') ?
                    'active' : null}>Dashboard</Link></li>

                <li><Link href="/Posts" className={path.startsWith('/Posts') ?
                    'active' : null}>Posts</Link></li>
                <li><Link href="/Bitcoin" className={path.startsWith('/Bitcoin') ?
                    'active' : null}>Bitcoin</Link></li>
            </ul>
        </nav>)
}

export default NavBar