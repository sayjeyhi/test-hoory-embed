import { useState } from 'react';
import './index.css';

function App() {
  const [code, setCode] = useState('!function (h,oo,r,y){h[r]=h[r]||{},h[r].workspace=y;const f=oo.getElementsByTagName(\'script\')[0],j=oo.createElement(\'script\');j.async=!0,j.src=\'https://api-dev.hb-web.hoory.com/embed.js?w=\'+y,f.parentNode.insertBefore(j, f),j.onload=function(){h[r].open()}}(window,document,\'hoory\',\'ADD_WORKSPACE_SLUG\');');

  const handleCodeChange = (e) => {
    setCode(e.target.value.replace('<script>', '').replace('</script>').replace('<!-- Hoory -->', ''));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const devFunc = new Function(code)

    devFunc();
  }

  return (
    <div className="ChangeEmbed">
      <form onSubmit={handleSubmit} id="changeConfigForm">
        <div className="input">
          <h4>Embed code</h4>
          <textarea
            style={{ width: '100%', border: 'none' }}
            rows={12}
            id="embed"
            onChange={handleCodeChange}
            onInput={handleCodeChange}
            onBlur={handleCodeChange}
            defaultValue={code}
          />
          <input style={{ marginTop: 20 }} type="submit" value="Refresh embed code"/>
        </div>
      </form>
    </div>
  );
}

export default App;
