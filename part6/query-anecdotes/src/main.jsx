import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MessageContextProvider } from './context/MessageContext'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <MessageContextProvider>
      <App />
    </MessageContextProvider>
  </QueryClientProvider>
)