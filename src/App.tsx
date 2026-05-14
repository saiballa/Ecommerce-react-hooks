import './App.css'
import CreateRoutes from './routing/routeCreate';
import AppReducerProvider from './stateAndAction/appContextProviders';

function App() {

  return (
    <>
      <AppReducerProvider>
        <CreateRoutes/>
      </AppReducerProvider>
    </>
  )
}

export default App
