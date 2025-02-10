import { useState, createContext } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/footerjsx'
import Body from './body';
import {  BrowserRouter as Router } from "react-router-dom"; 
export const Appcontex =createContext();
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'




function App() {
   const clint = new QueryClient({
      // defaultOptions:{
      //    queries: {
      //       refetchOnWindowFocus:false
      //    }
      // }

   });
   const [name, setname] = useState("");
  
  return (
    <>
       <Router> 
       <QueryClientProvider client={clint}>
         <Appcontex.Provider value={{name, setname}}>
          <Header  />
             <Body/>
          <Footer />
          </Appcontex.Provider>
          </QueryClientProvider>
       </Router>
    </>
  )
}

export default App
