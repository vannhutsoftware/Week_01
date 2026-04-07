import { useEffect, useMemo, useState } from "react";
import "./App.css";

const DINH_DANG = new Intl.NumberFormat("vi-VN");

const DANH_SACH_SAN_PHAM = Array.from({ length: 1000 }, (_, index) => {
  const gia = 10000 + ((index * 9973) % 2000000);

  return {
    id: index + 1,
    ten: `Sản phẩm ${index + 1}`,
    gia,
  };
});

function locVaSapXep(ds, tuKhoa, giaMin, giaMax) {
  const batDau = performance.now();
  const key = tuKhoa.trim().toLowerCase();

  const ketQua = ds
    .filter((sp) => {
      const dungTen = key === "" || sp.ten.toLowerCase().includes(key);
      const dungGiaMin = giaMin === "" || sp.gia >= Number(giaMin);
      const dungGiaMax = giaMax === "" || sp.gia <= Number(giaMax);
      return dungTen && dungGiaMin && dungGiaMax;
    })
    .sort((a, b) => a.gia - b.gia);

  return {
    danhSach: ketQua,
    thoiGian: performance.now() - batDau,
  };
}

function tinhTong(ds) {
  const batDau = performance.now();
  const tong = ds.reduce((sum, sp) => sum + sp.gia, 0);

  return {
    tong,
    thoiGian: performance.now() - batDau,
  };
}

function App() {
  const [tuKhoa, setTuKhoa] = useState("");
  const [giaMin, setGiaMin] = useState("");
  const [giaMax, setGiaMax] = useState("");
  const ketQuaThuong = locVaSapXep(DANH_SACH_SAN_PHAM, tuKhoa, giaMin, giaMax);
  const tongThuong = tinhTong(ketQuaThuong.danhSach);

  const ketQuaMemo = useMemo(
    () => locVaSapXep(DANH_SACH_SAN_PHAM, tuKhoa, giaMin, giaMax),
    [tuKhoa, giaMin, giaMax],
  );

  const tongMemo = useMemo(
    () => tinhTong(ketQuaMemo.danhSach),
    [ketQuaMemo.danhSach],
  );

  useEffect(() => {
    console.log(
      `[So sanh] Thuong -> loc/sap xep: ${ketQuaThuong.thoiGian.toFixed(2)} ms, tong: ${tongThuong.thoiGian.toFixed(2)} ms | useMemo -> loc/sap xep: ${ketQuaMemo.thoiGian.toFixed(2)} ms, tong: ${tongMemo.thoiGian.toFixed(2)} ms`,
    );
  }, [
    ketQuaThuong.thoiGian,
    tongThuong.thoiGian,
    ketQuaMemo.thoiGian,
    tongMemo.thoiGian,
  ]);

  const danhSachHienThi = ketQuaMemo.danhSach.slice(0, 20);

  return (
    <div className="container">
      <h1>Bài tập 03: Product Filter + Tổng tiền</h1>

      <div className="bo-loc">
        <input
          type="text"
          placeholder="Tìm theo tên"
          value={tuKhoa}
          onChange={(event) => setTuKhoa(event.target.value)}
        />

        <input
          type="number"
          placeholder="Giá min"
          value={giaMin}
          onChange={(event) => setGiaMin(event.target.value)}
        />

        <input
          type="number"
          placeholder="Giá max"
          value={giaMax}
          onChange={(event) => setGiaMax(event.target.value)}
        />
      </div>

      <div className="thong-tin">
        <p>Số sản phẩm gốc: {DANH_SACH_SAN_PHAM.length}</p>
        <p>Sau lọc/sắp xếp: {ketQuaMemo.danhSach.length}</p>
        <p>Tổng tiền: {DINH_DANG.format(tongMemo.tong)} VND</p>
        <p className="nho">Đã sort theo giá tăng dần.</p>
        <p className="nho">Mở Console để xem log thời gian trước/sau tối ưu.</p>
      </div>

      <div className="danh-sach">
        {danhSachHienThi.map((sanPham) => (
          <div className="item" key={sanPham.id}>
            <span>{sanPham.ten}</span>
            <strong>{DINH_DANG.format(sanPham.gia)} VND</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
