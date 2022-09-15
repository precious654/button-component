import React from 'react';
import Button from './Button';
import cart from "./images/shoppingcart.svg";

function App() {

  return (
    <div className="app container">
      <Button name='Default' class='default' />
      <div className="button-bottom">
        <Button name='Default' class='default' />
        <Button name="Default" class="primary" />
        <Button name="Secondary" class="secondary" />
        <Button name="Danger" class="danger" />
      </div>

    </div>
  )

}

export default App;
