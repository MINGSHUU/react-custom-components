import React, {useState,useEffect} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Transition from "./components/Transition";
import Button from "./components/Button/button";
import Input from "./components/Input";
library.add(fas)
function App() {
    const [show, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Menu
            defaultIndex='0'
            onSelect={ index => { alert(index) }}
            defaultOpenSubMenus={['2']}
        >
            <MenuItem >
                cool link
            </MenuItem>
            <MenuItem disabled>
                cool link 1
            </MenuItem>
            <SubMenu title='dropdown'>
                <MenuItem>
                    dropdown 1
                </MenuItem>
                <MenuItem>
                    dropdown 2
                </MenuItem>
            </SubMenu>
            <MenuItem >
                cool link 2
            </MenuItem>
        </Menu>
        <Button size='lg' onClick={() => setShow(!show)}> Toggle </Button>
        <Transition
          in={show}
          timeout={300}
          animation='zoom-in-left'
        >
          <div>
              <p>EDIT <code>src/APP.tsx</code> and save to reload.</p>
              <p>EDIT <code>src/APP.tsx</code> and save to reload.</p>
              <p>EDIT <code>src/APP.tsx</code> and save to reload.</p>
              <p>EDIT <code>src/APP.tsx</code> and save to reload.</p>
              <p>EDIT <code>src/APP.tsx</code> and save to reload.</p>
          </div>
        </Transition>
          <Transition
              in={show}
              timeout={300}
              animation='zoom-in-top'
              wrapper
          >
              <Button size='lg' btnType='primary'> Toggle </Button>
          </Transition>
      </header>
      <Input size='lg' append='Ss'/>
    </div>
  );
}

export default App;
