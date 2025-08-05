import { navlinks } from "../consts/navlinks"

function Navbar() {
  return (
    <nav>
        <div>
            <a href="#home" className="flex items-center gap-2">
                <p> Peach Velvet </p>
            </a>

            <ul>
                {navlinks.map(link=>(
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
