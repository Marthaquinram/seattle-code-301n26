import React from 'react';
import Snack from './Snack';

class Main extends React.Component {
  render() {
    return (
      <>
        <Snack title={'Hot Cheetos'} bananas={'Hot but tasty!'} />
        <Snack title={'Grapes'} bananas={'they are sweet!'} />
        <Snack title={'Jalapeños Poppers'}  bananas={'Jalapeños deep friend wrapped in bacon'} />
        <Snack title={'Oranges'}  bananas={'juicy'} />
      </>
    )
  }
}

export default Main;
