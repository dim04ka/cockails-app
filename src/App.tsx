import { COCKTAIL_CODE } from './const'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom'

import Category from './components/Category'
import Menu from './components/Menu'
import NotFound from './components/NotFound'
import './app.scss'

function App() {
    const defaultItem = COCKTAIL_CODE[0]

    return (
        <Router>
            <div className="main">
                <div className="menu">
                    <Menu items={COCKTAIL_CODE} />
                </div>
                <div className="content">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Navigate to={`/${defaultItem.code}`} replace />
                            }
                        />
                        <Route path="/:category" element={<Category />} />
                        <Route path="/404" element={<NotFound />} />
                        <Route
                            path="*"
                            element={<Navigate to="/404" replace />}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App
