import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker,Button, Typography, Space  } from 'antd';

import 'antd/dist/antd.css';

const { Text, Link } = Typography;

const App = ()=>{
  return ( 
  <React.Fragment>
    <h1>Hello World ? What's up ?
    <Text type="danger">Ant Design (danger)</Text>
    <Button type="primary">Primary Button</Button>
</h1>

<DatePicker />

  </React.Fragment>
    );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


