<nav class="navbar navbar-expand-lg bg-light">

  <div class="container-fluid">

    <Link class="navbar-brand" to="/">Heroes App</Link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/marvel">Marvel</NavLink>
        </li>

        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/dc">DC</NavLink>
        </li>

        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/search">Search</NavLink>
        </li>

      </ul>

    </div>
  </div>

  <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
    <ul className="navbar-nav ml-auto">

      <span className='nav-item nav-link text-info'>
        Guido
      </span>

      <button
        className='nav-item nav-link btn'
        onClick={onLogOut}
      >
        LogOut
      </button>

    </ul>
  </div>


</nav>