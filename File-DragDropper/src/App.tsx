import React, { useState } from 'react';
import './App.css';
import clsx from "clsx";
import FileDragDrop from "./Components/FileDragDrop/FileDragDrop"

function App() {

  //@ts-ignore
  const [state, setstate] = useState("")

  return (
    <div className="flex App h-screen w-screen bg-gray-50">
      <div className=" mx-auto my-auto w-md">
        <div
          className={clsx(
            "border-2 border-dotted hover items-center",
            "hover:bg-gray-50  p-2 h-36"
          )}
        >
          <FileDragDrop
            className="text-gray-600"
            accept="image/png"
            //  указать свой юрл
            api_url="https://localhost:"
            onSuccess={(token, response) => {
              setstate(token);
            }}
            //  выводим в случае получения исключения
            onError={(type, message, object) => {

              window.alert(`Тип: ${type}, Сообщение: ${type}, Объект: ${object}`)

              if (type === "Exception") {
                console.log(object);
              }

              setstate("");
            }}
            multiple={false}
          />
        </div>
        </div>
    </div>
  );
}

export default App;
