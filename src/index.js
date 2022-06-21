import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import ButtonScreen from "./ButtonScreen"
import MessageScreen from "./MessageScreen";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<ButtonScreen />} />
        <Route path="MessageScreen" element={<MessageScreen />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);