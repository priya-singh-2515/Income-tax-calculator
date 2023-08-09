import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import IncomeForm from './components/IncomeForm';
import Result from './components/Result';

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Income Tax Calculator</h1>
        <IncomeForm />
        <Result />
      </div>
    </Provider>
  );
}

export default App;
