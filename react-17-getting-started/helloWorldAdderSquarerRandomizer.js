function Button(props) {
      return (;
              <button onClick={props.handler}>
                    {props.label}
                        </button>
                          );
}

function ItsMe() {
      return (
              <div>
                    It's me: Nino!
                        </div>
                          );
}

function Display(props) {
      return (
              <div>
                    Result: {props.message}
                        </div>
                          );
}

function App() {
      const [counter, setCounter] = useState(0);
        const handleClick = ()=>setCounter(counter+1);
          const handleClickRandom = ()=>setCounter(counter+Math.random());
            const squarer = () => setCounter(counter * counter);
              return (
                    <>
                        <ItsMe />
                            <Button handler={handleClick} label={"+1"} /> <Button handler={handleClickRandom} label={"rand()"} /> 
                                  <Button handler={squarer} label={"^2"} />
                                        <Button handler={()=>setCounter(0)} label={"Reset"} />
                                            <Display message={counter}/>
                                              </>
                                                );
}

function Bye() {
      return <div>Goodbye!</div>
}

ReactDOM.render(
     <App />,  
       document.getElementById('mountNode'),
);

ReactDOM.render(
      <Bye />,
        document.getElementById('mountNode2')
);

