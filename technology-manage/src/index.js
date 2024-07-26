import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider, theme } from "antd";

const { getDesignToken, useToken } = theme;

const config = {
  algorithm: theme.defaultAlgorithm, // 默认算法
  // algorithm: theme.darkAlgorithm, // 暗色算法
  // algorithm: theme.compactAlgorithm, // 紧凑算法
  // components: { // 给组件设定主题样式
  //   Button: {
  //     colorPrimary: '#00b96b',
  //     algorithm: true, // 启用算法
  //   },
  //   Input: {
  //     colorPrimary: '#eb2f96',
  //     algorithm: true, // 启用算法
  //   }
  // },  
  token: {
    // colorPrimary: '#1890ff',
  },
};

// 通过静态方法获取
const globalToken = getDesignToken(config);

// 通过 hook 获取
// const App = () => {
//   const { token } = useToken();
//   return null;
// };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider theme={config}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
