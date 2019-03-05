import React, { Component } from 'react';
import LeftMenu from '../../components/LeftMenu'
import TopMenu from '../../components/TopMenu'
import styles from './index.module.css';

class Home extends Component {
  render() {
    return (
      <div >
        <LeftMenu/>
        <div className={styles.subnav}>
          <TopMenu/>
          1111
        </div>
      </div>
    );
  }
}

export default Home;
