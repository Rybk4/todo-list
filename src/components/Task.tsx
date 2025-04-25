function Task(props: { title: string; description: string ; next: () => void}) {
    
  return (
    <div className="bg-gray-300 rounded-lg  p-3 flex flex-row justify-between items-center m-2">
      <div className="text-start">
        <h1 className="text-2xl">{props.title}</h1>
        <p className="text-xl">{props.description}</p>
      </div>
      <button onClick={props.next}>+</button>
    </div>
  );
}

export default Task;
