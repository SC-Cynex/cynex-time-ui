import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ConfigProvider } from "antd";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      components: {
        Layout: {
          bodyBg: "white",
          headerBg: "white",
        },
        Form:{
          verticalLabelPadding: 0,
          labelRequiredMarkColor: "transparent"
        },
        Collapse: {
          headerBg: "#1F497D",
          contentBg: "#1F497D",
          colorText: "white",
          colorTextHeading: "white",
          fontSize: "20px"
        }
      },
    }}
  >
    <App />
  </ConfigProvider>
);
