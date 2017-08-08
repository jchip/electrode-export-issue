/*
 * This is a demo component the Eletrode app generator included
 * to show using Skeleton CSS lib (named base.css) and Redux
 * store for display HTML elements and managing states.
 *
 * To start your own app, please replace or remove these files:
 *
 * - this file (home.jsx)
 * - demo-buttons.jsx
 * - demo-pure-states.jsx
 * - demo-states.jsx
 * - reducers/index.jsx
 * - styles/*.css
 *
 */

import React from "react";
import "../styles/normalize.css";
import electrodePng from "../images/electrode.png";

// import { foo, msg1, msg2 } from "../config";

const style = {
  padding: 50
};

const code1 = `
export * from './i18n';
`;
const code2 = `
import {msg1, msg2} from './i18n';
export {msg1, msg2};
`;

export default () =>
  <div style={style}>
    {/**/}

    <section>
      <h2>
        Hello from {" "}
        <a href="https://github.com/electrode-io">
          {"Electrode"} <img src={electrodePng} />
        </a>
      </h2>

      <h4>Uncomment line 21 of components/home.jsx to see a bug</h4>

      <p>&nbsp;</p>
      <p>There is a bug when you use a certain style of export like so...</p>
      <pre>
        {code1}
      </pre>
      <p>&nbsp;</p>
      <p>If you switch to this the bug goes away:</p>
      <pre>
        {code2}
      </pre>
    </section>
  </div>;

/*


      <p>
        foo: {foo()}
      </p>
      <p>
        msg1: {msg1}
      </p>
      <p>
        msg2: {msg2}
      </p>

*/
