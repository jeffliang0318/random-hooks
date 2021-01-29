import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import ReCaptchaRef from "./reCAPTCHA-ref"
import CatBack from './useCatBack'
import Reducer from './useReducer'
import CHooks from './custom-hooks'

export default function Ref () {
    let { path, url } = useRouteMatch();

    return (
      <div className='container-md'>
        <h2>UseRef, UseCallback</h2>
        <div className="d-flex navbar-light">
            <nav className="bg-light navbar-nav m-2 px-2">
                <Link className="nav-item nav-link" to={`${url}`}>UseCatback</Link>
                <Link className="nav-item nav-link" to={`${url}/recap`}>UseRef.current</Link>
                <Link className="nav-item nav-link" to={`${url}/reducer`}>UseReducer</Link>
                <Link className="nav-item nav-link" to={`${url}/customHooks`}>Custom Hooks</Link>
                {/* <Link className="nav-item nav-link" to={`${url}/props-v-state`}>Props v. State</Link> */}
            </nav>
            <Switch>
                <Route exact path={`${path}`}>
                    <CatBack />
                </Route>
                <Route path={`${path}/recap`}>
                    <ReCaptchaRef />
                </Route>
                <Route path={`${path}/reducer`}>
                    <Reducer />
                </Route>
                <Route path={`${path}/customHooks`}>
                    <CHooks />
                </Route>
            </Switch>
        </div>
  
      </div>
    );
}