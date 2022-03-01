import React, { useState, useEffect } from 'react';
import axios from "axios";
var App = function () {
    var _a = useState(''), title = _a[0], setTitle = _a[1];
    useEffect(function () {
        axios.get('http://jsonplaceholder.typicode.com/posts/1', {
            responseType: 'json'
        }).then(function (res) {
            console.log(res);
            setTitle(res.data.title);
        });
    }, []);
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (files) {
            var uploadedFile = files[0];
            var formData = new FormData();
            formData.append(uploadedFile.name, uploadedFile);
            axios.post('http://jsonplaceholder.typicode.com/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (res) {
                console.log(res.data);
            });
        }
    };
    return (React.createElement("div", { className: "App", style: { marginTop: 100, marginLeft: 100 } },
        React.createElement("input", { type: "file", name: 'myFile', onChange: handleFileChange })));
};
export default App;
