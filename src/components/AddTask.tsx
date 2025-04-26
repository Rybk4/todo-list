function AddTask(props: {add: () => void}) {
  return (
    <div className="bg-gray-300 rounded-lg  p-3 flex flex-row justify-between items-center m-2">
      <form id="addtask" onSubmit={props.add} className="w-xl">
        <div className="flex flex-col gap-2 ">
          <input
            id="title"
            form="addtask"
            type="text"
            placeholder="Task title"
            className="text-2xl m-1 border-0 outline-0 border-b-2"
          />
          <textarea
            id="description"
            form="addtask"
            placeholder="Description"
            className="text-xl m-1 outline-0 resize-none h-32 "
          />
        </div>

        <button
          type="submit"
          form="addtask"
          className="border-1 bg-green-300 w-14 p-1 rounded-md text-3xl text-center items-center"
        >
          +
        </button>
      </form>
    </div>
  );
}

export default AddTask;
