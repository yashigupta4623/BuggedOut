import { useEffect, useState } from "react";
import "./App.css";
import Editor from "react-simple-code-editor";
import "prismjs/themes/prism-tomorrow.css";
import axios from "axios";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function App() {
  const [code, setCode] = useState(
    `function sum() {
      return 1+1 ;
    }`
  );

  const [review, setReview] = useState("");

  useEffect(() => {
    prism.highlightAll();
  });

async function reviewCode() {
    axios
      .post("http://localhost:3000/ai/get-review", { code })
      .then((response) => {
        setReview(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
              <Editor
                value={code}
                onValueChange={(code) => setCode(code)}
                highlight={(code) => prism.highlight(code, prism.languages.js)}
                padding={10}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 16,
                  border: "1px solid #ffffff",
                  borderRadius: "5px",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          <div className="review" onClick={reviewCode}>Review</div>
        </div>
        <div className="right">
          <Markdown
          rehypePlugins={[rehypeHighlight]}
          >{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
