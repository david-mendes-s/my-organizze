import { Dashboard } from "./components/Dashboard";
import { AccountProvider } from "./components/hooks/useAccount";
import { TransactionsProvider } from "./components/hooks/useTransactions";
import { GlobalStyle } from "./styles/global";


function App() {
  
  return (
    <TransactionsProvider>
        <AccountProvider>
        <Dashboard/>
        <GlobalStyle/>
        </AccountProvider>
    </TransactionsProvider>
    
   
  );
}

export default App;
