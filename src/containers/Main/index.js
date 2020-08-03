import React, { Component, Fragment } from 'react';

export class Main extends Component {
  render() {
    return (
      <Fragment>
        <main>
          <div>
            <button type="button">New reminder</button>
            <div id="month">Month</div>
          </div>
          <div id="day">Day</div>
        </main>
      </Fragment>
    );
  }
}

export default Main;
