// Note: App component...!

import React from 'react';

// Note: Importing reuseable components...!
import HelloWorld from 'components/hello-world/hello-world';
import Home from 'components/dummy-components/home';
import About from 'components/dummy-components/about';
import Contact from 'components/dummy-components/contact';
import Timer from 'components/timer/timer';

const App = () => {
  return (
    <React.Fragment>
      <Timer />
    </React.Fragment>
  );
}

export default App;