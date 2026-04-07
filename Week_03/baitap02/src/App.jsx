import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [thoiGian, setThoiGian] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setThoiGian(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="dong-ho">
      <h1>Đồng hồ kỹ thuật số</h1>
      <p className="gio">{thoiGian.toLocaleTimeString("vi-VN")}</p>
      <p className="mo-ta">Cập nhật mỗi 1 giây bằng useEffect</p>
    </main>
  );
}

export default App;
