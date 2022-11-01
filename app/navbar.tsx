import Link from "next/link"

const Navbar = () => {

    return (
        <div className="text-white font-bold w-full h-20 bg-gradient-to-r from-cyan-500 via-blue-900 to-blue-500 flex items-center justify-center">
            <Link href="/" className="mx-5 cursor-pointer hover:underline decoration-2 decoration-purple-500 underline-offset-4">
                A PROPOS DE MOI
            </Link>
            <Link href="/projects" className="mx-5 cursor-pointer hover:underline decoration-2 decoration-purple-500 underline-offset-4">
                MES PROJETS
            </Link>
            <Link href="/cv" className="mx-5 cursor-pointer hover:underline decoration-2 decoration-purple-500 underline-offset-4">
                MON CV
            </Link>
            <Link href="contact" className="mx-5 cursor-pointer hover:underline decoration-2 decoration-purple-500 underline-offset-4">
                ME CONTACTER
            </Link>
        </div>
    )
}

export default Navbar