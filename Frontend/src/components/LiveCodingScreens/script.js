function toggleCodeExecution(codeId) {
    var codeElement = document.getElementById('code-' + codeId);
    var sandboxOutput = document.getElementById('sandbox-output-' + codeId);
  
    if (sandboxOutput.style.display === 'block') {
      sandboxOutput.style.display = 'none';
    } else {
      var code = codeElement.innerText;
  
      var sandboxIframe = document.createElement('iframe');
      sandboxIframe.style.width = '70%';
      sandboxIframe.style.height = '150px';
      sandboxIframe.style.border = '1px solid #ccc';
  
      sandboxOutput.innerHTML = '';
      sandboxOutput.appendChild(sandboxIframe);
  
      var sandboxDocument = sandboxIframe.contentDocument || sandboxIframe.contentWindow.document;
      sandboxDocument.open();
      sandboxDocument.write(code);
      sandboxDocument.close();
  
      sandboxOutput.style.display = 'block';
    }
  }