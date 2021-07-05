import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

// styles
import './global.scss';

// React components
import { Home } from './pages/Home';
import { Docs } from './pages/Docs';

const App = () => {
    return (
        <div className='app'>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Redirect exact from='/docs' to='/docs/getting-started' />
                    <Route exact path='/docs/:subdoc' component={Docs} />
                </Switch>
            </Router>
            <footer
                className='flex justify-center text-white py-8'
                style={{ backgroundColor: '#181818' }}>
                Built by
                <a
                    className='text-primary ml-1'
                    href='http://github.com/imrhlrvndrn'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Rahul Ravindran
                </a>
            </footer>
        </div>
    );
};

export default App;
