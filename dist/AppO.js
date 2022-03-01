import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Transition from "./components/Transition";
import Button from "./components/Button/button";
import Input from "./components/Input";
library.add(fas);
function App() {
    var _a = useState(false), show = _a[0], setShow = _a[1];
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Menu, { defaultIndex: '0', onSelect: function (index) { alert(index); }, defaultOpenSubMenus: ['2'] },
                React.createElement(MenuItem, null, "cool link"),
                React.createElement(MenuItem, { disabled: true }, "cool link 1"),
                React.createElement(SubMenu, { title: 'dropdown' },
                    React.createElement(MenuItem, null, "dropdown 1"),
                    React.createElement(MenuItem, null, "dropdown 2")),
                React.createElement(MenuItem, null, "cool link 2")),
            React.createElement(Button, { size: 'lg', onClick: function () { return setShow(!show); } }, " Toggle "),
            React.createElement(Transition, { in: show, timeout: 300, animation: 'zoom-in-left' },
                React.createElement("div", null,
                    React.createElement("p", null,
                        "EDIT ",
                        React.createElement("code", null, "src/APP.tsx"),
                        " and save to reload."),
                    React.createElement("p", null,
                        "EDIT ",
                        React.createElement("code", null, "src/APP.tsx"),
                        " and save to reload."),
                    React.createElement("p", null,
                        "EDIT ",
                        React.createElement("code", null, "src/APP.tsx"),
                        " and save to reload."),
                    React.createElement("p", null,
                        "EDIT ",
                        React.createElement("code", null, "src/APP.tsx"),
                        " and save to reload."),
                    React.createElement("p", null,
                        "EDIT ",
                        React.createElement("code", null, "src/APP.tsx"),
                        " and save to reload."))),
            React.createElement(Transition, { in: show, timeout: 300, animation: 'zoom-in-top', wrapper: true },
                React.createElement(Button, { size: 'lg', btnType: 'primary' }, " Toggle "))),
        React.createElement(Input, { size: 'lg', append: 'Ss' })));
}
export default App;
