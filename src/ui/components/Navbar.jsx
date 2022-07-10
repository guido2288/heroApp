import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';



export const Navbar = () => {

  const { user, logout } = useContext(AuthContext);


  const [collapse, setCollapse] = useState('');

  const onToggleCollapse = () => {
    if (collapse === '') {
      return setCollapse('collapse')
    }
    return setCollapse('')
  }

  const navigate = useNavigate();

  const onLogOut = () => {

    logout()

    navigate('/login', {
      replace: true
    });
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark">

      <div className="container-fluid">

        <Link className="navbar-brand text-primary" to="/">Heroes App</Link>

        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" onClick={onToggleCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${collapse} navbar-collapse`}>
          <ul className="navbar-nav gap-2">

            <li className="nav-item">
              <NavLink className="link-light" aria-current="page" to="/marvel">Marvel</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="link-light" aria-current="page" to="/dc">DC</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="link-light" aria-current="page" to="/search">Search</NavLink>
            </li>

          </ul>

        </div>

      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">

          <span className='nav-item nav-link text-info'>
            {user?.name}
          </span>

          <button
            className='nav-item nav-link btn text-white'
            onClick={onLogOut}
          >
            LogOut
          </button>

        </ul>
      </div>


    </nav>
  )
}