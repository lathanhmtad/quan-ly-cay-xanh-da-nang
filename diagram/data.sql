
INSERT INTO thong_tin_nguoi_dan_phan_anh (ma_thong_tin_phan_anh, ho_va_ten, email, sdt, so_luong_cay, ly_do_phan_anh) VALUES
(1, 'Nguyễn Văn Anh', 'nguyenvananh@example.com', '0987654321', 3, 'Cây bị héo úa'),
(2, 'Trần Thị Bích', 'tranthibich@example.com', '0976543210', 1, 'Cây bị sâu đục'),
(3, 'Lê Hoàng Cường', 'lehoangcuong@example.com', '0965432109', 2, 'Cây gãy đổ'),
(4, 'Phạm Thị Diệu Linh', 'phamthidieulinh@example.com', '0954321098', 1, 'Cây bị nứt thân'),
(5, 'Hoàng Văn Hưng', 'hoangvanhung@example.com', '0943210987', 2, 'Cây chết khô'),
(6, 'Nguyễn Thị Phương Anh', 'nguyenthiphuonganh@example.com', '0932109876', 3, 'Cây bị hư hỏng'),
(7, 'Đinh Văn Giang', 'dinhvangiang@example.com', '0921098765', 1, 'Cây bị chết rễ'),
(8, 'Trần Văn Hải', 'tranvanhai@example.com', '0910987654', 2, 'Cây bị mất lá'),
(9, 'Lê Thị Minh Ngọc', 'lethiminhngoc@example.com', '0909876543', 1, 'Cây bị sâu bệnh'),
(10, 'Phạm Văn Khánh', 'phamvankhanh@example.com', '0998765432', 3, 'Tán cây qua rộng');

INSERT INTO toa_do_cay_phan_anh (toa_do_cay, ma_thong_tin_phan_anh) VALUES
('16.047051, 108.206230', 1),
('16.045254, 108.218721', 2),
('16.057928, 108.218154', 3),
('16.052321, 108.208946', 4),
('16.045892, 108.231416', 5),
('16.055723, 108.221797', 6),
('16.048672, 108.227302', 7),
('16.047009, 108.219191', 8),
('16.047240, 108.213117', 9),
('16.049122, 108.211798', 10);

INSERT INTO loai_cay (ten_loai) VALUES
('Cây Cảnh Quan Đô Thị'),
('Cây Xanh Giao Thông'),
('Cây Xanh Công Nghiệp và Cây Rừng Đô Thị');

INSERT INTO trang_thai_cay (tinh_trang_cay) VALUES
('Tốt'),
('Bình thường'),
('Kém');

INSERT INTO trang_thai_nhiem_vu (ten_trang_thai) VALUES
('Chưa xử lý'),
('Đang xử lý'),
('Đã xử lý');

INSERT INTO doi_ngu (ten_doi_ngu) VALUES
('Đội mèo'),
('Đội hổ'),
('Đội sói xám'),
('Đội tuần lộc'),
('Đội ngựa vằn'),
('Đội báo đốm');

INSERT INTO quan_huyen (ten_quan, tong_so_cay) VALUES
('Quận Sơn Trà', 100),
('Quận Hải Châu', 200),
('Quận Thanh Khê', 150),
('Quận Liên Chiểu', 180),
('Quận Ngũ Hành Sơn', 120),
('Quận Cẩm Lệ', 90),
('Quận Hòa Vang', 80);

INSERT INTO nguoi_dung (ho_va_ten, ngay_sinh, email, sdt, dia_chi, ten_dang_nhap, mat_khau, vai_tro, ma_doi_ngu) VALUES
('Admin', '1995-03-12', 'admin@gmail.com', '0911291488', '02 Thanh Sơn Hải Châu Đà Nẵng','admin', '123', 'Admin', 1),
('Nguyễn Văn Anh', '1988-09-07', 'anhnguyen@gmail.com', '0987654321', '10 Nguyễn Văn Linh, Hải Châu, Đà Nẵng', 'anhnguyen', '123', 'Nhân viên chăm sóc', 2),
('Trần Thị Bích', '1995-03-12', 'tranthibich@gmail.com', '0909123456', '25 Lê Duẩn, Hải Châu, Đà Nẵng', 'tranthibich', '123', 'Nhân viên chăm sóc', 2),
('Lê Minh Cường', '1988-09-07', 'leminhcuong@gmail.com', '0918234567', '48 Phan Châu Trinh, Thanh Khê, Đà Nẵng', 'leminhcuong', '123', 'Nhân viên chăm sóc', 2),
('Phạm Thị Dung', '1973-06-25', 'phamthidung@gmail.com', '0976543210', '17 Lê Lợi, Hải Châu, Đà Nẵng', 'phamthidung', '123', 'Nhân viên chăm sóc', 2),
('Hoàng Văn Thành', '2001-11-19', 'hoangvanthanh@gmail.com', '0945678901', '36 Trần Phú, Hải Châu, Đà Nẵng', 'hoangvanthanh', '123', 'Nhân viên chăm sóc', 2),
('Đặng Thị Hương', '1990-04-30', 'dangthihuong@gmail.com', '0967890123', '82 Nguyễn Tri Phương, Hải Châu, Đà Nẵng', 'dangthihuong', '123', 'Nhân viên chăm sóc', 3),
('Trần Văn Nam', '1985-08-15', 'tranvannam@gmail.com', '0932109876', '5 Đống Đa, Hải Châu, Đà Nẵng', 'tranvannam', '123', 'Nhân viên chăm sóc', 3),
('Lê Thị Thu', '1978-10-22', 'lethithu@gmail.com', '0921345678', '63 Hoàng Diệu, Thanh Khê, Đà Nẵng', 'lethithu', '123', 'Nhân viên chăm sóc', 3),
('Phan Đình Tuấn', '1967-12-05', 'phamdinhtuan@gmail.com', '0956789012', '39 Phạm Như Xương, Cẩm Lệ, Đà Nẵng', 'phamdinhtuan', '123', 'Nhân viên chăm sóc', 3),
('Đỗ Thị Hà', '2000-02-18', 'dothiha@gmail.com', '0998765432', '21 Nguyễn Văn Thoại, Sơn Trà, Đà Nẵng', 'dothiha', '123', 'Nhân viên chăm sóc', 4),
('Nguyễn Anh Tuấn', '1992-07-10', 'nguyenanhtuan@gmail.com', '0912345678', '12 Nguyễn Chí Thanh, Hải Châu, Đà Nẵng', 'nguyenanhtuan', '123', 'Nhân viên chăm sóc', 4),
('Hoàng Thị Thúy', '1983-05-29', 'hoangthithuy@gmail.com', '0987654321', '8 Phan Đăng Lưu, Hải Châu, Đà Nẵng', 'hoangthithuy', '123', 'Nhân viên chăm sóc', 4),
('Vũ Văn Hải', '1975-09-03', 'vuvanhai@gmail.com', '0909123456', '56 Lê Hồng Phong, Thanh Khê, Đà Nẵng', 'vuvanhai', '123', 'Nhân viên chăm sóc', 4),
('Trần Thị Mai', '1969-01-14', 'tranthimai@gmail.com', '0976543210', '30 Đống Đa, Hải Châu, Đà Nẵng', 'tranthimai', '123', 'Nhân viên chăm sóc', 5),
('Lê Đức Anh', '1980-08-20', 'leducanh@gmail.com', '0918234567', '72 Hùng Vương, Hải Châu, Đà Nẵng', 'leducanh', '123', 'Nhân viên chăm sóc', 5),
('Phạm Thị Hạnh', '1998-11-09', 'phamthihanh@gmail.com', '0945678901', '43 Hàm Nghi, Hải Châu, Đà Nẵng', 'phamthihanh', '123', 'Nhân viên chăm sóc', 5),
('Nguyễn Hoàng Long', '1971-06-28', 'nguyenhoanglong@gmail.com', '0967890123', '9 Lê Thánh Tôn, Hải Châu, Đà Nẵng', 'nguyenhoanglong', '123', 'Nhân viên chăm sóc', 5),
('Bùi Thị Lan', '1963-04-02', 'buithilan@gmail.com', '0921345678', '27 Đống Đa, Hải Châu, Đà Nẵng', 'buithilan', '123', 'Nhân viên hỗ trợ', 6),
('Trần Văn Hùng', '1987-10-11', 'tranvanhung@gmail.com', '0932109876', '14 Phạm Văn Đồng, Sơn Trà, Đà Nẵng', 'tranvanhung', '123', 'Nhân viên hỗ trợ', 6),
('Hoàng Thị Thuận', '1976-12-23', 'hoangthithuan@gmail.com', '0956789012', '68 Hải Phòng, Thanh Khê, Đà Nẵng', 'hoangthithuan', '123', 'Nhân viên hỗ trợ', 6);

INSERT INTO phuong_xa (ten_phuong, ma_quan) VALUES
('Thạch Thang', 2),
('Thuận Phước', 2),
('Hòa Thuận Đông', 2),
('Hòa Thuận Tây', 2),
('Nam Dương', 2),
('Bình Hiên', 2),
('Bình Thuận', 2),
('Hòa Cường Bắc', 2),
('Hòa Cường Nam', 2),
('Hòa Minh', 2),
('Thống Nhất', 4),
('Hòa Hiệp Bắc', 4),
('Hòa Hiệp Nam', 4),
('Hòa Khánh Bắc',4),
('Hòa Khánh Nam', 4),
('Hòa Minh', 4),
('Hòa Phát', 4),
('Hòa An', 4),
('Hòa Khánh Đông', 4),
('Hòa Khánh Tây', 4);

INSERT INTO ke_hoach (ten_ke_hoach, han_hoan_thanh, so_luong, diadiem, noi_dung, ma_thong_tin_phan_anh) VALUES
('Kế hoạch trồng cây', '2024-05-01 10:00:00', 5, 'Đường Nguyễn văn Linh', 'Trồng cây mới', 1),
('Kế hoạch chăm sóc', '2024-05-02 11:00:00', 3, 'Đường Nguyễn văn Linh', 'Bổ sung chất dinh dưỡng', 2),
('Kế hoạch chăm sóc', '2024-05-03 12:00:00', 7, 'Đường Nguyễn văn Linh', 'Tưới nước và cắt tỉa cành', 3),
('Kế hoạch chăm sóc', '2024-05-04 13:00:00', 2, 'Đường Nguyễn văn Linh', 'Thay đổi phân bón', 4),
('Kế hoạch trị bệnh', '2024-05-05 14:00:00', 4, 'Đường Nguyễn văn Linh', 'Xử lý sâu bệnh', 5),
('Kế hoạch trồng cây', '2024-05-06 15:00:00', 6, 'Đường Nguyễn văn Linh', 'Trồng cây mới', 6),
('Kế hoạch chăm sóc', '2024-05-07 16:00:00', 3, 'Đường Nguyễn văn Linh', 'Tưới nước và cắt tỉa cành', 7);

INSERT INTO nhiem_vu (ma_ke_hoach, ma_trang_thai_nv, ten_nhiem_vu, mo_ta, ma_doi_ngu) VALUES
(1, 1, 'Nhiệm vụ trồng cây', 'Thực hiện trồng cây mới', 1),
(2, 2, 'Nhiệm vụ trị bệnh', 'Kiểm tra và xử lý sâu bệnh', 2),
(3, 3, 'Nhiệm vụ chăm sóc', 'Tưới nước và cắt tỉa cành cho cây', 3),
(4, 1, 'Nhiệm vụ chăm sóc', 'Bổ sung chất dinh dưỡng', 1),
(5, 2, 'Nhiệm vụ quản lí phân bón', 'Kiểm tra và thay đổi phân bón', 2),
(6, 3, 'Nhiệm vụ trồng cây', 'Thực hiện trồng cây mới', 3),
(7, 1, 'Nhiệm vụ trị bệnh', 'Kiểm tra và xử lý sâu bệnh', 1);

INSERT INTO chi_tiet_dia_chi (ma_thong_tin_phan_anh, ma_phuong, mo_ta_dia_chi, ma_nhiem_vu) VALUES
(1, 1, 'Số 10, Đường Nguyễn văn Linh, Quận Hải Châu', 1),
(2, 2, 'Số 71, Đường Nguyễn văn Linh, Quận Thanh Khê', 2),
(3, 3, 'Số 112, Đường Nguyễn văn Linh, Quận liên Chiểu', 3),
(4, 4, 'Số 170, Đường Nguyễn văn Linh, Quận Thanh Khê', 4),
(5, 5, 'Số 162, Đường Nguyễn văn Linh, Quận Thanh Khê', 5),
(6, 6, 'Số 291, Đường Nguyễn văn Linh, Quận Hải Châu', 6),
(7, 7, 'Số 233, Đường Nguyễn văn Linh, Quận Thanh Khê', 7);

INSERT INTO cay (ten_cay, ma_loai, ngay_trong, tan_cay_che_phu, chieu_cao, duong_kinh, toa_do, ma_dia_chi, ma_trang_thai_cay) VALUES
('Cây 1', 1, '2024-04-18', 'Cây dương xỉ', '2m', '0.5m', '16.047051, 108.206230', 1, 1),
('Cây 2', 2, '2024-04-19', 'Cây dừa', '3m', '0.6m', '16.045254, 108.218721', 2, 2),
('Cây 3', 1, '2024-04-20', 'Cây hoa hồng', '1.5m', '0.4m', '16.057928, 108.218154', 3, 3),
('Cây 4', 3, '2024-04-21', 'Cây bàng', '4m', '0.7m', '16.052321, 108.208946', 4, 1),
('Cây 5', 2, '2024-04-22', 'Cây dừa', '3.5m', '0.8m', '16.045892, 108.231416', 5, 2),
('Cây 6', 1, '2024-04-23', 'Cây dương xỉ', '2.5m', '0.5m', '16.055723, 108.221797', 6, 3),
('Cây 7', 3, '2024-04-24', 'Cây bàng', '3.2m', '0.6m', '16.048672, 108.227302', 7, 1);

INSERT INTO tuyen_duong (ten_tuyen_duong, ma_phuong) VALUES
('Đường Nguyễn văn Linh', 1),
('Đường Hải Phòng', 2),
('Đường Trần Phú', 3),
('Đường Ngô Quyền', 4),
('Đường Lê Duẩn', 5),
('Đường 2/9', 6),
('Đường Trần Hưng Đạo', 7),
('Đường Hùng Vương', 8),
('Đường Võ Văn Kiệt', 9),
('Đường Bạch Đằng', 10);

INSERT INTO cong_vien (ten_cong_vien) VALUES
('Công viên A'),
('Công viên B'),
('Công viên C');

INSERT INTO tuyen_duong_cong_vien (ma_cong_vien, ma_tuyen_duong) VALUES
(1, 1),
(2, 2),
(3, 3);

INSERT INTO hinh_anh (hinh_anh, ma_thong_tin_phan_anh, ma_cay) VALUES
('cayduongxi.jpg', 1, 1),
('caydua.jpg', 2, 2),
('cayco.jpg', 3, 3),
('caybang.jpg', 4, 4),
('cayda.jpg', 5, 5),
('caylimxanh.jpg', 6, 6),
('caybode.jpg', 7, 7);

INSERT INTO xu_ly_don_thu (ma_thong_tin_phan_anh, han_hoan_thanh, trang_thai) VALUES
(1, '2024-04-20 10:00:00', 1),
(2, '2024-04-21 11:00:00', 0),
(3, '2024-04-22 12:00:00', 1),
(4, '2024-04-23 13:00:00', 1),
(5, '2024-04-24 14:00:00', 0),
(6, '2024-04-25 15:00:00', 1),
(7, '2024-04-26 16:00:00', 1),
(8, '2024-04-27 17:00:00', 0),
(9, '2024-04-28 18:00:00', 1),
(10, '2024-04-29 19:00:00', 0);
