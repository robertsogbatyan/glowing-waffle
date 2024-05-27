import React, {useEffect} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import './App.css';
import {ThemeProvider, useSetTheme, useTheme} from './context';
import {SortOrder, Theme} from './data-structures';
import logo from './logo.svg';
import {
  AppDispatch,
  getUsers,
  selectUsers,
  setUsersPage,
  setUsersSearchTerm,
  setUsersSortBy,
  setUsersSortOrder,
  store,
} from './store';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <ThemeSwitcher />
            <Users />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Provider>
    </ThemeProvider>
  );
};

const ThemeSwitcher: React.FC = () => {
  const theme = useTheme();
  const setTheme = useSetTheme();

  const onLightThemeClick = () => {
    setTheme(Theme.LIGHT);
  };

  const onDarkThemeClick = () => {
    setTheme(Theme.DARK);
  };

  return (
    <div>
      <div>Theme: {theme}</div>
      <div>
        <button onClick={onLightThemeClick}>Switch to light theme</button>
        <button onClick={onDarkThemeClick}>Switch to dark theme</button>
      </div>
    </div>
  );
};

const Users: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const users = useSelector(selectUsers);

  const userNames: string[] = users?.map((u) => u.name) || [];

  useEffect(() => {
    dispatch(setUsersPage(1));
    dispatch(setUsersSearchTerm('ad'));
    dispatch(setUsersSortBy('name'));
    dispatch(setUsersSortOrder(SortOrder.ASC));
    dispatch(getUsers());
  }, []);

  return <pre>{userNames.join('\n')}</pre>;
};

export default App;
