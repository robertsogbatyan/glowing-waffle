import React, {useEffect, useState} from 'react';
import './App.css';
import {UserClient} from './clients';
import {TUserDTO} from './data-structures';
import logo from './logo.svg';

const App: React.FC = () => {
  const [userNames, setUserNames] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      await UserClient.create({
        name: 'Foo',
        email: 'foo@bar.com',
        address: {
          city: 'Gwenborough',
          street: 'Kulas Light',
          suite: 'Apt. 556',
        },
      });
      const users: TUserDTO[] = await UserClient.getAll();
      const userNames = users.map((u) => u.name);

      setUserNames(userNames);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <pre>{userNames.join('\n')}</pre>
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
  );
};

export default App;
