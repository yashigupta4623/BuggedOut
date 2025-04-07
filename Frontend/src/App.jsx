import { useEffect } from "react";
import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    prism.highlightAll();
  });

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <pre>
              <code className="language-javascript">
                {` function sum() {
                    return 1+1 ;`
                    }
              </code>
            </pre>
          </div>

          <div className="review">Review</div>
        </div>
        <div className="right"></div>
      </main>
    </>
  );
}

export default App;
