import {useState} from 'react'
import "./styles.css"


const Livecode = ({codeId}) => {
  const [sandboxOutputVisible, setSandboxOutputVisible] = useState(false);

  const toggleExecution = () => {
    const codeElement = document.getElementById('code-' + codeId);
    const sandboxOutput = document.getElementById('sandbox-output-' + codeId);

    if (sandboxOutput.style.display === 'block') {
      sandboxOutput.style.display = 'none';
    } else {
      const code = codeElement.innerText;

      const sandboxIframe = document.createElement('iframe');
      sandboxIframe.style.width = '70%';
      sandboxIframe.style.height = '150px';
      sandboxIframe.style.border = '1px solid #ccc';

      sandboxOutput.innerHTML = '';
      sandboxOutput.appendChild(sandboxIframe);

      const sandboxDocument = sandboxIframe.contentDocument || sandboxIframe.contentWindow.document;
      sandboxDocument.open();
      sandboxDocument.write(code);
      sandboxDocument.close();

      sandboxOutput.style.display = 'block';
    }

    setSandboxOutputVisible(!sandboxOutputVisible);
  };
  
  
  return (
    <div>
      <nav className="navigation">
    <ul>
      <li><a href="#basic-html">Basic HTML</a></li>
      <li><a href="#forms-input">Forms and Input</a></li>
      <li><a href="#frames">Frames and iframes</a></li>
      <li><a href="#images">Images</a></li>
      <li><a href="#audio-video">Audio / Video</a></li>
      <li><a href="#links">Links</a></li>
      <li><a href="#lists">Lists</a></li>
      <li><a href="#tables">Tables</a></li>
      <li><a href="#styles-semantics">Styles and Semantics</a></li>
      <li><a href="#meta">Meta Info</a></li>
      <li><a href="#programming">Programming</a></li>
      <li><a href="#formatting">Formatting</a></li>
    </ul>
  </nav>
  <main className='container'>
    <h1>HTML Tags and Functions</h1>
      <h1 class="headline" id="basic-html">Basic HTML</h1>
      <h2>DOCTYPE Declaration (&lt;!DOCTYPE&gt;)</h2>
      <p>The <code>&lt;!DOCTYPE&gt;</code> declaration is used at the beginning of an HTML document to specify the document type. It helps the browser understand the version of HTML being used.</p>

    <div class="code-example">
      <p><strong>Example:</strong></p>
      <code id="code-1">
        &lt;!DOCTYPE html&gt;
      </code>
      <button class="sandbox-button" onclick={toggleExecution}>Try It</button>
      <div id="sandbox-output-1" class="sandbox-output"></div>
    </div>
    <h2>HTML Element (&lt;html&gt;)</h2>
    <p>The <code>&lt;html&gt;</code> element is the root element of an HTML document. It contains all the other elements on the page.</p>
    
    <div className='code-example'>
    <p><strong>Example:</strong></p>
    <code id="code-2">
    &lt;html&gt;<br />  
    &nbsp;&nbsp;&lt;head&gt;<br />
    &nbsp;&nbsp;&lt;/head&gt;<br />
    &nbsp;&nbsp;&lt;body&gt;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello,World!&lt;/h1&gt;<br />
    &nbsp;&nbsp;&lt;/body&gt;<br />
    &lt;/html&gt;<br />
        </code>
    </div>
  </main>
  
    </div>
    
  )
}

export default Livecode