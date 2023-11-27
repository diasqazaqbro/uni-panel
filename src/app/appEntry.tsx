import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./providers/appRouter";
import { store } from "./store/appStore";
import { ConfigProvider } from "antd";
import { configTheme } from "../shared/config/theme";
import '../shared/styles/base.scss'
const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ConfigProvider theme={configTheme}>
        <RouterProvider router={appRouter()} />
      </ConfigProvider>
    </ReduxProvider>
  </React.StrictMode>
);
