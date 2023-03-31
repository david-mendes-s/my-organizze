import { createContext, FormEvent, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../../service/api';


interface AccountProviderProps {
    children: ReactNode;
}

interface  IAccount{
    id: number,
    nameAccount: string,
    amountAccount: number,
    optionsBank: {
        id: number,
        name: string
    },
}

type AccountPropsInput = Omit<IAccount, 'id'>

interface AccountContextData {
    accounts: IAccount[];
    handleNewCreateAccount: (account:AccountPropsInput) => Promise<void>;
}

const AccountContext = createContext<AccountContextData>({} as AccountContextData);

export function AccountProvider({children}:AccountProviderProps){

    const [accounts, setAccounts] = useState<IAccount[]>([]);

    useEffect(()=> {
        api.get('account').then((response) => setAccounts(response.data.accounts))
        
    }, []);
    
    async function handleNewCreateAccount(accountInput:AccountPropsInput){
        
         const response = await api.post('account', {
            ...accountInput,
            date: new Date()
        })

        const { account } = response.data;

        setAccounts([
            ...accounts,
            account      
        ])
    }

    return(
        <AccountContext.Provider value={{accounts, handleNewCreateAccount}}>
            {children}
        </AccountContext.Provider>
    );
}

export function useAccount(){
    const context = useContext(AccountContext);
    return context;
}

