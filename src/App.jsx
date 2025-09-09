import React from 'react';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section title="What is react?">
          <p>
            React is a free and open-source front-end JavaScript library for building
            user interfaces based on components. It is maintained by Meta (formerly Facebook)
            and a community of individual developers and companies. React can be used as a
            base in the development of single-page, mobile, or server-rendered applications.
          </p>
        </Section>
        <Section title="Benefits of react">
          <ul>
            <li>Component-Based Architecture: Encourages reusable and modular code, making applications easier to manage and scale.</li>
            <li>Virtual DOM: Improves application performance by minimizing direct manipulations of the DOM, leading to faster UI updates.</li>
            <li>Declarative Syntax: Makes code more readable and predictable by describing what the UI should look like for a given state.</li>
            <li>Large Ecosystem: Supported by a vast community, offering a rich collection of libraries, tools, and resources like Redux and React Router.</li>
            <li>Cross-Platform Development: Using React Native, developers can build native mobile applications for iOS and Android with the same principles.</li>
          </ul>
        </Section>
      </main>
    </div>
  );
}

export default App;
