import React from 'react';

import Console from '../containers/console';
import SideBar from './side_bar';

const App = (props) => {
  return (
    <div>
      <SideBar />
      <Console />
    </div>
  )
}

export default App;