import { NavLink, useHistory, useParams } from "react-router-dom";

export const AppHeader = (props) => {
  const history = useHistory()
  const params = useParams()


  const onGoBack = () => {
    history.goBack()
  }

  return (
    <div className="app-header">
     <NavLink activeClassName="active-nav" exact to="/" > <h1>M-Weather</h1></NavLink>

      {/* <nav>
        <NavLink activeClassName="active-nav" exact to="/" >Weekly forecast</NavLink>
        <NavLink activeClassName="active-nav" to="/about" >Daily forecast</NavLink>
      </nav> */}
      <div>
      
      </div>
    </div>
  )
}


