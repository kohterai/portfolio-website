import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const funnyStyle = {
  marginRight: 150
}

const Menubar = () => (
    <div>
        <Link href="/about">
          <a style={linkStyle}>Design</a>
        </Link>
        <Link href="/">
          <a style={linkStyle}>Cinematography</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>Photography</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>Research</a>
        </Link>
    </div>
)

export default Menubar
