import './App.css'
import CreateRoutes from './routing/routeCreate';
import AppReducerProvider from './stateAndAction/appContextProviders';
import { Toaster } from 'sonner';

function App() {

  return (
    <>
      <Toaster position='bottom-center' richColors/>
      <AppReducerProvider>
        <CreateRoutes/>
      </AppReducerProvider>
    </>
  )
}

export default App
