Initial app:

```
  <Router>

        <div className="h-24 bg-amber-300">
          <h1 className="text-2xl">Enowiz</h1>
          <div >
            <ul className="flex space-x-5">
              <li>
                <Link to="/">Home</Link>
              </li>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </ul>

          </div>
        </div>
      
        <div className="flex flex-row">
          <div className="h-screen basis-1/4 bg-teal-300">01</div>
          <div className="basis-3/4">
            <Switch>
              <Route path ="/portfolio">
                <Portfolio />
              </Route>

            </Switch>

          </div>
        </div>
      </Router>
```