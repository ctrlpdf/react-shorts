import useInputs from "./useInputs";

function App() {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>name: {name}</div>
        <div>nickname: {nickname}</div>
      </div>
    </div>
  );
}

export default App;
