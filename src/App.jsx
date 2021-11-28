import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { WeatherApp } from './pages/WeatherApp';
import { WeatherDetails } from './pages/WeatherDetails';

export function App() {

  return (
    <Router>
      <AppHeader />
      <main className="container">
        <Switch>
          <Route path="/weather/:id" component={WeatherDetails} />
          <Route path="/" component={WeatherApp} />
        </Switch>
      </main>
    </Router>
  );
}


