import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Components/header.tsx'
import ProfileView from './Pages/profile.tsx'
import Home from './Pages/home.tsx'
import Detail from './Pages/detail.tsx'

function App () {
  return (
        <div>
            <Header />
                <Switch>
                    <Route path="/detail/:detailId" component={Detail}>
                    </Route>
                    <Route path="/profile">
                        <ProfileView />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
        </div>
  )
}
export default App
