import React from 'react';

import SideBar from './side_bar';
import PostBox from './post_box';
import Feed from '../containers/feed';


const App = (props) => {
  return (
    <div>
      <SideBar />
      <PostBox />
      <Feed />
    </div>
  )
}

export default App;