"use client";
import React, { createContext, ReactNode } from "react";
import { appStore } from "./store";

export const StoreContext = createContext(appStore);

export const StoreWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={appStore}>{children}</StoreContext.Provider>
  );
};