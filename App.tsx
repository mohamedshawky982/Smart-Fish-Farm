import React from "react";
import Route from "./src/navigation";
import { StatusBar } from "react-native"
import { themes } from "./src/utils/themes";
import { ErrorBoundary } from "./src/components";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={themes.primaryColor} />
      <ErrorBoundary>
        <Route />
        
      </ErrorBoundary> 
    </>

  )
}

export default App

