import lemonade from "lemonadejs";
import Router from '@lemonadejs/router';
import BurgersSearch from "../src/ubereats/burguers/Search";

function App() {
    let self = {};

    let template = `<>
          <Router animation="true" @ref="self.router">
              <Route path="/burgers/search" url="/views/ubereats/burgers/search.html" controller="BurgersSearch" />
          </Router>
      </>`;

    return lemonade.element(template, self, {
        Router,
        BurgersSearch
    });
}


export default App;