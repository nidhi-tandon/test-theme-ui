import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ColorMode, ThemeProvider, Theme} from 'theme-ui'
import CardComponent from "./CardComponentFold";

const colors: ColorMode = {
    background: '#f0ecf1',
    200: "",
    pink: {
        800: "#ee5a6c"
    },
    blue: {
        800: "#04093f"
    },
    color: {
        800: "#211b23",
        700: "#515978",
        200: "#ffffff"
    },
    primary: "#ffffff",
    text: "#000"
}

const fontSizes = [10, 12, 14, 16]

const theme: Theme = {
    colors,
    fontSizes,
    styles: {
        h1: {
            fontSize: 26,
            fontWeight: "bold",
            color: "primary",
            marginTop: "20px" // Only takes absolute values for defined spacing like 4,8,16. Something in between has to be given on px
        },
    },
}

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CardComponent/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
