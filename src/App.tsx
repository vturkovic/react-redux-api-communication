import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { fetchPosts } from './redux/actions/postActions';
import rootReducer from './redux/reducers/rootReducer';
import DisplayComponent from './components/DisplayComponent';

const store = configureStore({
  reducer: rootReducer,
});

// Dummy credentials
const USERNAME = 'username';
const PASSWORD = 'password';

const App = () => {
  useEffect(() => {
    store.dispatch(fetchPosts(USERNAME+PASSWORD));
  }, []);

  return (
    <Provider store={store}>
      <DisplayComponent />
    </Provider>
  );
}

export default App;