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
  const [code, setCode] = useState(` // Paste your javascript code here`);

  const [review, setReview] = useState("");

  useEffect(() => {
    prism.highlightAll();
  });

  async function reviewCode() {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/ai/get-review`, { code })
      .then((response) => {
        setReview(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            color: "black",
          }}
          
        >
          <img
            src="/bugcut.svg"
            style={{ width: "65px", padding: "4px" }}
            alt="Bugcut logo"
          />
          <h1 style={{ margin: 0 }}>BuggedOut</h1>
        </div>
        <h4 style={{ fontSize: "1.5rem", marginTop: "6px", color: "#581845" }}>
          Get a code review from AI
        </h4>
      </div>

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
                border: "5px solid rgb(102, 186, 214)",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div className="review" onClick={reviewCode}>
            Review
          </div>
        </div>
        <div className="right" style={{ border: "5px solid yellow" }}>
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
