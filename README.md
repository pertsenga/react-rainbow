[![CircleCI](https://circleci.com/gh/reiniergs/react-lightning-components/tree/master.svg?style=svg)](https://circleci.com/gh/reiniergs/react-lightning-components/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/reiniergs/react-lightning-components/badge.svg?branch=master)](https://coveralls.io/github/reiniergs/react-lightning-components?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</div>


## Installation

Lightning Design System is available as an [npm package](https://www.npmjs.com/package/react-slds).

```bash
$ yarn add react-rainbow
```
 ##### or
 
```bash
$ npm install react-rainbow --save
```
 

## Usage

Here is a quick example to get you started, **it's all you need**:
```
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-rainbow/components/button';

function App() {
    return (
        <Button 
            label="Hello World!" 
            variant="brand" 
            onClick={() => alert('Hello World!')} 
        />
    );    
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
```

Yes, it's really all you need to get started as you can see in this live and interactive demo:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/52wqonrr44?from-embed)

## Running locally
1. git clone https://github.com/reiniergs/react-lightning-components.git
2. cd react-lightning-components
3. npm install
4. npm start
5. navigate to http://localhost:6060/
