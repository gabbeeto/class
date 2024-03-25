import Header from './Header'
import Main from './Main'
import ReactDOM from 'react-dom/client'
import './index.css'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(<>
<Header />
<Main />
</>
)
