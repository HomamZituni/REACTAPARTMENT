import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav style={{ 
      background: '#333', 
      padding: '1rem',
      marginBottom: '2rem'
    }}>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        gap: '2rem',
        margin: 0,
        padding: 0
      }}>
<li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/amenities" style={{ color: 'white', textDecoration: 'none' }}>
            Amenities
          </Link>
        </li>
        <li>
          <Link to="/floor-plans" style={{ color: 'white', textDecoration: 'none' }}>
            Floor Plans
          </Link>
        </li>
        <li>
          <Link to="/nearby" style={{ color: 'white', textDecoration: 'none' }}>
            Nearby
          </Link>
        </li>
      </ul>
    </nav>
  )
}

