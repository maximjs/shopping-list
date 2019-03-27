import React, { Component } from 'react';
import styles from './App.module.sass';
import AddItems from '../../Containers/AddItems/AddItems';
import ListItems from '../../Containers/ListItems/ListItems';

class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <AddItems />
        <ListItems />
      </div>
    );
  }
}

export default App;
