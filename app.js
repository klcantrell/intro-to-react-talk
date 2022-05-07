let countState = 0;

const root = document.getElementById('root');

const app = document.createElement('main');
app.className = 'app';

const countDisplay = document.createElement('p');
countDisplay.textContent = `${countState}`;
countDisplay.className = 'count_display';

const countIncrementer = document.createElement('button');
countIncrementer.textContent = '+';
countIncrementer.className = 'count_incrementer';
countIncrementer.addEventListener('click', () => {
  countState += 1
  countDisplay.textContent = `${countState}`;
  document.title = `The count is ${countState}`;
});


// app.appendChild(countDisplay);
// app.appendChild(countIncrementer);

// root.append(app)


function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <main className="app">
      <p className="count_display">{count}</p>
      <button
        className="count_incrementer"
        onClick={() => setCount((prev) => prev + 1)}>
      +
      </button>
    </main>
  );
}

ReactDOM.render(
  <App />,
  root,
)
