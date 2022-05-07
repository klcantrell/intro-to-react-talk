let countState = 0;

const root = document.getElementById('root');

const app = document.createElement('main');
app.className = 'main';

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

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledParagraph = styled.p`
  font-size: 2rem;
  text-align: center;
`;

const StyledButton = styled.button`
  font-size: 3rem;
`;

function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <StyledMain>
      <StyledParagraph>{count}</StyledParagraph>
      <StyledButton
        onClick={() => setCount((prev) => prev + 1)}>
      +
      </StyledButton>
    </StyledMain>
  );
}

ReactDOM.render(
  <App />,
  root,
)
