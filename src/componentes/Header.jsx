
const Header = ({suma, resta, division, multiplicacion, limpiar}) => {

 //s const [num, setNum] = useState('');
  const calculadora = (e) => {}

  const onNumChange = (e) => {
    setNum(e.target.value)
  }

  return (
    <div class="container mx-auto py-8">
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div class="mb-4">
      
      <input id="display" class="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none 
      focus:shadow-outline" 
      //value={num}
      //onChange={onNumChange}
      type="text" placeholder="0" readonly  />
    </div>
    <div class="grid grid-cols-4 gap-2">
    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 
      font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      onclick={(e) =>{} } >7</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 
        font-bold py-2 px-4 rounded focus:outline-none 
        focus:shadow-outline" onclick={(e) => {}}>8</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 
        font-bold py-2 px-4 rounded focus:outline-none 
        focus:shadow-outline" onclick={(e) => {}}>9</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 
        font-bold py-2 px-4 rounded focus:outline-none 
        focus:shadow-outline" onclick="appendToDisplay('/')" 
        onChange={() => {}}
        >/</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 
      font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      onclick={(e) => {}}>4</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 
        font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
        onclick={(e) => {}}>5</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 
        font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         onclick={(e) => {}}>6</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 
        px-4 rounded focus:outline-none focus:shadow-outline" 
        onclick={(e) => {}}>*</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 
        px-4 rounded focus:outline-none focus:shadow-outline" 
        onclick={(e) => {}}>1</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 
        px-4 rounded focus:outline-none focus:shadow-outline" 
        onclick={(e) => {}}>2</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 
        px-4 rounded focus:outline-none focus:shadow-outline" 
        onclick={(e) => {}}>3</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 
        px-4 rounded focus:outline-none focus:shadow-outline" 
        onclick={(e) => {}}>-</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 
        px-4 rounded focus:outline-none focus:shadow-outline" 
        onclick={(e) => {}}>0</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 
        px-4 rounded focus:outline-none focus:shadow-outline" 
        onclick={(e) => {}}>.</button>
      <button class="col-span-2 bg-gray-300 hover:bg-gray-400 text-gray-800 
        font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
        onclick={(e) => {}}>=</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold 
        py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
        onclick={(e) => {}}>+</button>
      <button class="col-span-2 bg-red-500 hover:bg-red-700 text-white font-bold 
        py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
        onclick={(e) => {}}>C</button>
    </div>
  </div>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h2 class="text-lg font-semibold mb-2">Historial</h2>
    <ul id="history" class="list-disc pl-5"></ul>
  </div>
</div>
  )
}

export default Header