import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center bg-teal-500 rounded-md px-4 py-6 mt-[5rem]">
      <div className="px-3 font-bold text-2xl">Next13 test</div>
      <ul className="flex font-mono justify-start items-center">
        <li className="px-3">
          <Link href={'/'}>Home</Link>
        </li>
        <li className="px-3">
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
