import './App.css';
import { Home } from './pages/Home.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import BaseView from './components/common/base-view/BaseView.tsx';

const queryClient = new QueryClient();

const App = () => (
  <BaseView>
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  </BaseView>
);

export default App;
