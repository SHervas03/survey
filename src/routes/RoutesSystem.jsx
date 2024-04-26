import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from '../pages/Index'
import Form from '../pages/Form'

function RoutesSystem() {
    return (
        <BrowserRouter>
            <Routes>                
                <Route index element={<Index />} />          
                <Route path="/form/:username" element={<Form />} />   
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesSystem
