import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
// import "@fontsource/roboto/variable.css"
// import "@fontsource/inter/variable.css"
import "./index.css"
import AppRouter from "./router.tsx"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./store/index.ts"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </StrictMode>
)
