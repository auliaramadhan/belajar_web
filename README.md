# belajar_web
node-sass my-sass-folder/ -o my-css-folder/ 

https://stackoverflow.com/questions/31448114/how-to-compile-or-convert-sass-scss-to-css-with-node-sass-no-ruby

cara launch make chrome debugger

```javascript
{
    "type": "chrome",
    "request": "launch",
    "name": "Launch Chrome",
    "url": "http://localhost:8080",
    "file": "${workspaceFolder}/indexjs.html"
}
```
cara debug pake nodemon
```javascript
"scripts": {
    "start": "node ./{folder}",
    "debug": "nodemon --inspect ./{folder}"
}
 {
    "type": "node",
    "request": "attach",
    "name": "Node: Nodemon",
    "processId": "${command:PickProcess}",
    "restart": true,
    "protocol": "inspector",
},
```

