import "./App.css";
import bcrypt from "bcryptjs";
import { React, useState, useRef } from "react";

function App() {
    const [inputText, setInputText] = useState("");
    const [isClipboardVisible, setIsClipboardVisible] = useState(false)
    const title = useRef(null);

    function handleHash() {
        const input = inputText;
        const result = hash(input);
        //title.current.innerText = result;
        navigator.clipboard.writeText(result)
        setIsClipboardVisible(true)
    }

    function hash(text) {
      const salt = "$2a$10$0000000000000000000000"
        const hashText = bcrypt.hashSync(text, salt);
        console.log(hashText)
        const hashWithoutSalt = hashText.substr(salt.length-1,hashText.length)//hashText.replace("$2a$10$0000000000000000000000", "")
        return hashWithoutSalt;
    }

    return (
        <div className="App">
            <h2 ref={title}>Password Hash</h2>
            <div className="form">
            <input
                type="text"
                id="ph-input"
                onChange={(e) => setInputText(e.target.value)}
                onClick={() => {
                  setIsClipboardVisible(false)
                }}
            />
            <button onClick={handleHash}>Hash</button>
        </div>
        <span class={`${'clipboard'} ${isClipboardVisible && 'clipboard-active'}`}>*Copied to clipboard</span>

        </div>
    );
}

export default App;
