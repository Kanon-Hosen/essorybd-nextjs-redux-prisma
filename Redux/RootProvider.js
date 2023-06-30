"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const RootProvider = () => {
  return <Provider store={store}></Provider>;
};

export default RootProvider;
