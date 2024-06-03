drop database do_an_phan_mem_cay_xanh;
CREATE DATABASE IF NOT EXISTS do_an_phan_mem_cay_xanh;

USE do_an_phan_mem_cay_xanh;

CREATE TABLE IF NOT EXISTS toa_do_cay_phan_anh (
ma_toa_do_cay BIGINT AUTO_INCREMENT PRIMARY KEY,
toa_do_cay VARCHAR(255),
ma_thong_tin_phan_anh BIGINT 
);

CREATE TABLE IF NOT EXISTS hinh_anh (
ma_hinh_anh BIGINT AUTO_INCREMENT PRIMARY KEY,
hinh_anh VARCHAR(255),
ma_thong_tin_phan_anh BIGINT,
ma_cay BIGINT null
);

CREATE TABLE IF NOT EXISTS thong_tin_nguoi_dan_phan_anh (
ma_thong_tin_phan_anh BIGINT PRIMARY KEY,
ho_va_ten VARCHAR(255),
email VARCHAR(255),
sdt VARCHAR(255),
so_luong_cay INT,
ngay_gui datetime,
ly_do_phan_anh VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS xu_ly_don_thu (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
ma_thong_tin_phan_anh BIGINT ,
han_hoan_thanh DATETIME,
trang_thai bit(1)
);

CREATE TABLE IF NOT EXISTS ke_hoach (
ma_ke_hoach BIGINT AUTO_INCREMENT PRIMARY KEY,
ten_ke_hoach varchar(255) ,
han_hoan_thanh DATETIME,
so_luong int,
dia_diem varchar(255),
noi_dung varchar(255),
ma_thong_tin_phan_anh BIGINT null
);

CREATE TABLE IF NOT EXISTS cay (
ma_cay BIGINT AUTO_INCREMENT PRIMARY KEY,
ten_cay varchar(255) ,
ma_loai BIGINT ,
ngay_trong DATETIME,
tan_cay_che_phu varchar(255) ,
chieu_cao varchar(255) ,
duong_kinh varchar(255) ,
toa_do varchar(255) ,
ma_dia_chi BIGINT ,
ma_trang_thai_cay BIGINT 
);

CREATE TABLE IF NOT EXISTS chi_tiet_dia_chi (
ma_dia_chi BIGINT AUTO_INCREMENT PRIMARY KEY,
ma_thong_tin_phan_anh BIGINT null,
ma_tuyen_duong BIGINT ,
mo_ta_dia_chi VARCHAR(255),
ma_nhiem_vu BIGINT
);

CREATE TABLE IF NOT EXISTS trang_thai_nhiem_vu (
ma_trang_thai_nv BIGINT AUTO_INCREMENT PRIMARY KEY,
ten_trang_thai VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS nhiem_vu (
ma_nhiem_vu BIGINT AUTO_INCREMENT PRIMARY KEY,
ma_ke_hoach BIGINT ,
ma_trang_thai_nv BIGINT ,
ten_nhiem_vu VARCHAR(255),
mo_ta VARCHAR(255),
ma_doi_ngu BIGINT
);

CREATE TABLE IF NOT EXISTS doi_ngu (
ma_doi_ngu BIGINT AUTO_INCREMENT PRIMARY KEY,
ten_doi_ngu VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS loai_cay (
ma_loai BIGINT AUTO_INCREMENT PRIMARY KEY,
ten_loai VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS phuong_xa (
ma_phuong BIGINT AUTO_INCREMENT PRIMARY KEY,
ten_phuong VARCHAR(255),
ma_quan BIGINT 
);

CREATE TABLE IF NOT EXISTS quan_huyen (
ma_quan BIGINT AUTO_INCREMENT PRIMARY KEY,
ten_quan VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS trang_thai_cay (
ma_trang_thai_cay BIGINT AUTO_INCREMENT PRIMARY KEY,
tinh_trang_cay VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS nguoi_dung (
ma_nguoi_dung BIGINT AUTO_INCREMENT PRIMARY KEY,
ho_va_ten VARCHAR(255),
ngay_sinh datetime,
email VARCHAR(255),
sdt VARCHAR(255),
ten_dang_nhap VARCHAR(255),
mat_khau VARCHAR(255),
vai_tro VARCHAR(255),
dia_chi VARCHAR(255),
ma_doi_ngu bigint
);

CREATE TABLE IF NOT EXISTS tuyen_duong (
ma_tuyen_duong BIGINT AUTO_INCREMENT PRIMARY KEY,
ten_tuyen_duong VARCHAR(255),
ma_phuong BIGINT 
);

CREATE TABLE IF NOT EXISTS cong_vien (
ma_cong_vien BIGINT AUTO_INCREMENT PRIMARY KEY,
ten_cong_vien VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS tuyen_duong_cong_vien (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
ma_cong_vien BIGINT ,
ma_tuyen_duong BIGINT 
);
ALTER TABLE toa_do_cay_phan_anh
ADD CONSTRAINT FOREIGN KEY (ma_thong_tin_phan_anh) REFERENCES thong_tin_nguoi_dan_phan_anh(ma_thong_tin_phan_anh);
ALTER TABLE hinh_anh
ADD CONSTRAINT FOREIGN KEY (ma_thong_tin_phan_anh) REFERENCES thong_tin_nguoi_dan_phan_anh(ma_thong_tin_phan_anh),
ADD CONSTRAINT FOREIGN KEY (ma_cay) REFERENCES cay(ma_cay);
ALTER TABLE xu_ly_don_thu
ADD CONSTRAINT FOREIGN KEY (ma_thong_tin_phan_anh) REFERENCES thong_tin_nguoi_dan_phan_anh(ma_thong_tin_phan_anh);
ALTER TABLE ke_hoach
ADD CONSTRAINT FOREIGN KEY (ma_thong_tin_phan_anh) REFERENCES thong_tin_nguoi_dan_phan_anh(ma_thong_tin_phan_anh);
ALTER TABLE cay
ADD CONSTRAINT FOREIGN KEY (ma_loai) REFERENCES loai_cay(ma_loai),
ADD CONSTRAINT FOREIGN KEY (ma_dia_chi) REFERENCES chi_tiet_dia_chi(ma_dia_chi),
ADD CONSTRAINT FOREIGN KEY (ma_trang_thai_cay) REFERENCES trang_thai_cay(ma_trang_thai_cay);
ALTER TABLE chi_tiet_dia_chi
ADD CONSTRAINT FOREIGN KEY (ma_thong_tin_phan_anh) REFERENCES thong_tin_nguoi_dan_phan_anh(ma_thong_tin_phan_anh),
ADD CONSTRAINT FOREIGN KEY (ma_nhiem_vu) REFERENCES nhiem_vu(ma_nhiem_vu),
ADD CONSTRAINT FOREIGN KEY (ma_tuyen_duong) REFERENCES tuyen_duong(ma_tuyen_duong);
ALTER TABLE nhiem_vu
ADD CONSTRAINT FOREIGN KEY (ma_ke_hoach) REFERENCES ke_hoach(ma_ke_hoach),
ADD CONSTRAINT FOREIGN KEY (ma_doi_ngu) REFERENCES doi_ngu(ma_doi_ngu),
ADD CONSTRAINT FOREIGN KEY (ma_trang_thai_nv) REFERENCES trang_thai_nhiem_vu(ma_trang_thai_nv);
ALTER TABLE phuong_xa
ADD CONSTRAINT FOREIGN KEY (ma_quan) REFERENCES quan_huyen(ma_quan);
ALTER TABLE tuyen_duong
ADD CONSTRAINT FOREIGN KEY (ma_phuong) REFERENCES phuong_xa(ma_phuong);
ALTER TABLE tuyen_duong_cong_vien
ADD CONSTRAINT FOREIGN KEY (ma_tuyen_duong) REFERENCES tuyen_duong(ma_tuyen_duong),
ADD CONSTRAINT FOREIGN KEY (ma_cong_vien) REFERENCES cong_vien(ma_cong_vien);
ALTER TABLE nguoi_dung
ADD CONSTRAINT FOREIGN KEY (ma_doi_ngu) REFERENCES doi_ngu(ma_doi_ngu);

INSERT INTO thong_tin_nguoi_dan_phan_anh (ma_thong_tin_phan_anh, ho_va_ten, email, sdt, so_luong_cay,ngay_gui, ly_do_phan_anh) VALUES
(1, 'Nguyễn Văn Anh', 'nguyenvananh@example.com', '0987654321', 3,'2024-03-07', 'Cây bị héo úa'),
(2, 'Trần Thị Bích', 'tranthibich@example.com', '0976543210', 1, '2024-03-11', 'Cây bị sâu đục'),
(3, 'Lê Hoàng Cường', 'lehoangcuong@example.com', '0965432109', 2, '2024-04-09', 'Cây gãy đổ'),
(4, 'Phạm Thị Diệu Linh', 'phamthidieulinh@example.com', '0954321098', 1, '2024-02-21', 'Cây bị nứt thân'),
(5, 'Hoàng Văn Hưng', 'hoangvanhung@example.com', '0943210987', 2, '2024-04-17', 'Cây chết khô'),
(6, 'Nguyễn Thị Phương Anh', 'nguyenthiphuonganh@example.com', '0932109876', 3, '2024-03-21', 'Cây bị hư hỏng'),
(7, 'Đinh Văn Giang', 'dinhvangiang@example.com', '0921098765', 1, '2024-4-11', 'Cây bị chết rễ'),
(8, 'Trần Văn Hải', 'tranvanhai@example.com', '0910987654', 2, '2024-01-10', 'Cây bị mất lá'),
(9, 'Lê Thị Minh Ngọc', 'lethiminhngoc@example.com', '0909876543', 1, '2024-03-29', 'Cây bị sâu bệnh'),
(10, 'Phạm Văn Khánh', 'phamvankhanh@example.com', '0998765432', 3, '2024-04-02', 'Tán cây qua rộng');

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

INSERT INTO quan_huyen (ten_quan) VALUES
('Quận Sơn Trà'),
('Quận Hải Châu'),
('Quận Thanh Khê'),
('Quận Liên Chiểu'),
('Quận Ngũ Hành Sơn'),
('Quận Cẩm Lệ'),
('Quận Hòa Vang');

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
('Thọ Quang', 1),
('An Hải Bắc', 1),
('An Hải Đông', 1),
('An Hải Tây', 1),
('Mân Thái', 1),
('Nại Hiên Đông', 1),
('Phước Mỹ', 1),
('Sơn Trà', 1),
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
('Thạc Gián', 3),
('An Khê', 3),
('Chính Gián', 3),
('Tam Thuận', 3),
('Thanh Khê Đông', 3),
('Thanh Khê Tây', 3),
('Vĩnh Trung', 3),
('Xuân Hà', 3),
('Tân Chính', 3),
('Tân Lợi', 3),
('Thống Nhất', 4),
('Hòa Hiệp Bắc', 4),
('Hòa Hiệp Nam', 4),
('Hòa Khánh Bắc',4),
('Hòa Khánh Nam', 4),
('Hòa Minh', 4),
('Hòa Phát', 4),
('Hòa An', 4),
('Hòa Khánh Đông', 4),
('Hòa Khánh Tây', 4),
('Hòa Hải', 5),
('Khuê Mỹ', 5),
('Mỹ An', 5),
('Mỹ Đông', 5),
('Mỹ Hòa', 5),
('Mỹ Khê', 5),
('Mỹ Lợi', 5),
('Mỹ Thọ', 5),
('Phước Mỹ', 5),
('Thanh Khê', 5),
('Hòa Hải', 6),
('Khuê Mỹ', 6),
('Mỹ An', 6),
('Mỹ Đông', 6),
('Mỹ Hòa', 6),
('Mỹ Khê', 6),
('Mỹ Lợi', 6),
('Mỹ Thọ', 6),
('Phước Mỹ', 6),
('Thanh Khê', 6),
('Hòa Hải', 7),
('Khuê Mỹ', 7),
('Mỹ An', 7),
('Mỹ Đông', 7),
('Mỹ Hòa', 7),
('Mỹ Khê', 7),
('Mỹ Lợi', 7),
('Mỹ Thọ', 7),
('Phước Mỹ', 7),
('Thanh Khê', 7);

INSERT INTO ke_hoach (ten_ke_hoach, han_hoan_thanh, so_luong, dia_diem, noi_dung, ma_thong_tin_phan_anh) VALUES
('Kế hoạch trồng cây', '2024-05-01 10:00:00', 5, 'Đường Nguyễn Văn Linh', 'Trồng cây mới', 1),
('Kế hoạch chăm sóc', '2024-05-02 11:00:00', 3, 'Đường Hải Phòng', 'Bổ sung chất dinh dưỡng', 2),
('Kế hoạch chăm sóc', '2024-05-03 12:00:00', 7, 'Đường Thanh Sơn', 'Tưới nước và cắt tỉa cành', 3),
('Kế hoạch chăm sóc', '2024-05-04 13:00:00', 2, 'Đường Cao Thắng', 'Thay đổi phân bón', 4),
('Kế hoạch trị bệnh', '2024-05-05 14:00:00', 4, 'Đường Võ Nguyên Giáp', 'Xử lý sâu bệnh', 5),
('Kế hoạch trồng cây', '2024-05-06 15:00:00', 6, 'Đường Lý Tự Trọng', 'Trồng cây mới', 6),
('Kế hoạch chăm sóc', '2024-05-07 16:00:00', 3, 'Đường Hải Hồ', 'Tưới nước và cắt tỉa cành', 7);

INSERT INTO nhiem_vu (ma_ke_hoach, ma_trang_thai_nv, ten_nhiem_vu, mo_ta, ma_doi_ngu) VALUES
(1, 1, 'Nhiệm vụ trồng cây', 'Thực hiện trồng cây mới', 1),
(2, 2, 'Nhiệm vụ trị bệnh', 'Kiểm tra và xử lý sâu bệnh', 2),
(3, 3, 'Nhiệm vụ chăm sóc', 'Tưới nước và cắt tỉa cành cho cây', 3),
(4, 1, 'Nhiệm vụ chăm sóc', 'Bổ sung chất dinh dưỡng', 4),
(5, 2, 'Nhiệm vụ quản lí phân bón', 'Kiểm tra và thay đổi phân bón', 5),
(6, 3, 'Nhiệm vụ trồng cây', 'Thực hiện trồng cây mới', 6),
(7, 1, 'Nhiệm vụ trị bệnh', 'Kiểm tra và xử lý sâu bệnh', 6);

INSERT INTO tuyen_duong (ten_tuyen_duong, ma_phuong) VALUES
('Nguyễn Văn Thoại', 1),
('An Hải Tây', 1),
('An Hải Bắc', 1),
('An Thượng 1', 1),
('Lê Quang Đạo', 1),
('Trần Quang Diệu', 1),
('Đường Trần Hưng Đạo', 2),
('Đường Trần Quốc Toản', 2),
('Đường Trần Hưng Đạo (Phía Bắc)', 2),
('Đường Lê Thánh Tông', 2),
('Đường Ngô Quyền', 2),
('Đường Hùng Vương', 3),
('Đường Trần Hưng Đạo', 3),
('Đường Hoàng Sa', 3),
('Đường Ngô Quyền', 3),
('Đường Lê Hồng Phong', 3),
('Đường Trần Hưng Đạo', 4),
('Đường Hoàng Sa', 4),
('Đường Ngô Quyền', 4),
('Đường Lê Hồng Phong', 4),
('Đường Phạm Văn Đồng', 4),
('Đường Mân Thái', 5),
('Đường Văn Tiến Dũng', 5),
('Đường Võ Chí Công', 5),
('Đường Nguyễn Lương Bằng', 5),
('Đường Nguyễn Duy Trinh', 5),
('Đường Trần Đại Nghĩa', 5),
('Đường Trần Đại Nghĩa', 6),
('Đường Võ Nguyên Giáp', 6),
('Đường Lê Văn Duyệt', 6),
('Đường Hoàng Sa', 6),
('Đường Trường Sa', 6),
('Đường Hoàng Sa', 7),
('Đường Lê Văn Duyệt', 7),
('Đường Võ Nguyên Giáp', 7),
('Đường Trần Thị Lý', 7),
('Đường Bạch Đằng', 7),
('Đường Trần Hữu Tước', 8),
('Đường Lê Văn Duyệt', 8),
('Đường Phạm Văn Đồng', 8),
('Đường Trần Quốc Toản', 8),
('Đường Trần Đại Nghĩa', 8);

INSERT INTO chi_tiet_dia_chi (ma_thong_tin_phan_anh, ma_tuyen_duong, mo_ta_dia_chi, ma_nhiem_vu) VALUES
(1, 1, 'Số 10', 1),
(Null, 1, 'Số 27', 1),
(Null, 1, 'Số 53', 1),
(Null, 1, 'Số 14', 1),
(Null, 1, 'Số 68', 1),
(Null, 1, 'Số 36', 1),
(Null, 1, 'Số 92', 1),
(Null, 1, 'Số 45', 1),
(Null, 1, 'Số 79', 1),
(Null, 1, 'Số 20', 1),
(2, 2, 'Số 71', 1),
(Null, 2, 'Số 57', 1),
(Null, 2, 'Số 84', 1),
(Null, 2, 'Số 39', 1),
(Null, 2, 'Số 63', 1),
(Null, 2, 'Số 18', 1),
(Null, 2, 'Số 72', 1),
(Null, 2, 'Số 41', 1),
(Null, 2, 'Số 96', 1),
(Null, 2, 'Số 25', 1),
(Null, 3, 'Số 31', 1),
(Null, 3, 'Số 47', 1),
(Null, 3, 'Số 55', 1),
(Null, 3, 'Số 62', 1),
(Null, 3, 'Số 78', 1),
(Null, 3, 'Số 83', 1),
(Null, 3, 'Số 95', 1),
(Null, 3, 'Số 88', 1),
(Null, 3, 'Số 73', 1),
(3, 3, 'Số 112', 3),
(Null, 4, 'Số 31', 1),
(Null, 4, 'Số 47', 1),
(Null, 4, 'Số 55', 1),
(Null, 4, 'Số 62', 1),
(Null, 4, 'Số 78', 1),
(Null, 4, 'Số 83', 1),
(Null, 4, 'Số 95', 1),
(Null, 4, 'Số 88', 1),
(Null, 4, 'Số 73', 1),
(4, 4, 'Số 170', 4),
(Null, 5, 'Số 31', 1),
(Null, 5, 'Số 47', 1),
(Null, 5, 'Số 55', 1),
(Null, 5, 'Số 62', 1),
(Null, 5, 'Số 78', 1),
(Null, 5, 'Số 83', 1),
(Null, 5, 'Số 95', 1),
(Null, 5, 'Số 88', 1),
(Null, 5, 'Số 73', 1),
(5, 5, 'Số 162', 5),
(Null, 6, 'Số 31', 1),
(Null, 6, 'Số 47', 1),
(Null, 6, 'Số 55', 1),
(Null, 6, 'Số 62', 1),
(Null, 6, 'Số 78', 1),
(Null, 6, 'Số 83', 1),
(Null, 6, 'Số 95', 1),
(Null, 6, 'Số 88', 1),
(Null, 6, 'Số 73', 1),
(6, 6, 'Số 291', 6),
(7, 7, 'Số 233', 7),
(Null, 7, 'Số 31', 1),
(Null, 7, 'Số 47', 1),
(Null, 7, 'Số 55', 1),
(Null, 7, 'Số 62', 1),
(Null, 7, 'Số 78', 1),
(Null, 7, 'Số 83', 1),
(Null, 7, 'Số 95', 1),
(Null, 7, 'Số 88', 1),
(Null, 7, 'Số 73', 1),
(8, 8, 'Số 23', 7),
(Null, 8, 'Số 31', 2),
(Null, 8, 'Số 47', 2),
(Null, 8, 'Số 55', 2),
(Null, 8, 'Số 62', 2),
(Null, 8, 'Số 78', 2),
(Null, 8, 'Số 83', 2),
(Null, 8, 'Số 95', 2),
(Null, 8, 'Số 88', 2),
(Null, 8, 'Số 73', 2),
(9, 9, 'Số 11', 7),
(Null, 9, 'Số 31', 2),
(Null, 9, 'Số 47', 2),
(Null, 9, 'Số 55', 2),
(Null, 9, 'Số 62', 2),
(Null, 9, 'Số 78', 2),
(Null, 9, 'Số 83', 2),
(Null, 9, 'Số 95', 2),
(Null, 9, 'Số 88', 2),
(Null, 9, 'Số 73', 2),
(Null, 10, 'Số 31', 2),
(Null, 10, 'Số 47', 2),
(Null, 10, 'Số 55', 2),
(Null, 10, 'Số 62', 2),
(Null, 10, 'Số 78', 2),
(Null, 10, 'Số 83', 2),
(Null, 10, 'Số 95', 2),
(Null, 10, 'Số 88', 2),
(Null, 10, 'Số 73', 2),
(Null, 11, 'Số 31', 2),
(Null, 11, 'Số 47', 2),
(Null, 11, 'Số 55', 2),
(Null, 11, 'Số 62', 2),
(Null, 11, 'Số 78', 2),
(Null, 11, 'Số 83', 2),
(Null, 11, 'Số 95', 2),
(Null, 11, 'Số 88', 2),
(Null, 11, 'Số 73', 2),
(Null, 12, 'Số 31', 2),
(Null, 12, 'Số 47', 2),
(Null, 12, 'Số 55', 2),
(Null, 12, 'Số 62', 2),
(Null, 12, 'Số 78', 2),
(Null, 12, 'Số 83', 2),
(Null, 12, 'Số 95', 2),
(Null, 12, 'Số 88', 2),
(Null, 12, 'Số 73', 2),
(Null, 13, 'Số 31', 2),
(Null, 13, 'Số 47', 2),
(Null, 13, 'Số 55', 2),
(Null, 13, 'Số 62', 2),
(Null, 13, 'Số 78', 2),
(Null, 13, 'Số 83', 2),
(Null, 13, 'Số 95', 2),
(Null, 13, 'Số 88', 2),
(Null, 13, 'Số 73', 2),
(Null, 14, 'Số 31', 2),
(Null, 14, 'Số 47', 2),
(Null, 14, 'Số 55', 2),
(Null, 14, 'Số 62', 2),
(Null, 14, 'Số 78', 2),
(Null, 14, 'Số 83', 2),
(Null, 14, 'Số 95', 2),
(Null, 14, 'Số 88', 2),
(Null, 14, 'Số 73', 2),
(Null, 15, 'Số 31', 3),
(Null, 15, 'Số 47', 3),
(Null, 15, 'Số 55', 3),
(Null, 15, 'Số 62', 3),
(Null, 15, 'Số 78', 3),
(Null, 15, 'Số 83', 3),
(Null, 15, 'Số 95', 3),
(Null, 15, 'Số 88', 3),
(Null, 15, 'Số 73', 3),
(Null, 16, 'Số 31', 3),
(Null, 16, 'Số 47', 3),
(Null, 16, 'Số 55', 3),
(Null, 16, 'Số 62', 3),
(Null, 16, 'Số 78', 3),
(Null, 16, 'Số 83', 3),
(Null, 16, 'Số 95', 3),
(Null, 16, 'Số 88', 3),
(Null, 16, 'Số 73', 3),
(Null, 16, 'Số 31', 3),
(Null, 17, 'Số 47', 3),
(Null, 17, 'Số 55', 3),
(Null, 17, 'Số 62', 3),
(Null, 17, 'Số 78', 3),
(Null, 17, 'Số 83', 3),
(Null, 17, 'Số 95', 3),
(Null, 17, 'Số 88', 3),
(Null, 17, 'Số 73', 3),
(Null, 18, 'Số 31', 3),
(Null, 18, 'Số 47', 3),
(Null, 18, 'Số 55', 3),
(Null, 18, 'Số 62', 3),
(Null, 18, 'Số 78', 3),
(Null, 18, 'Số 83', 3),
(Null, 18, 'Số 95', 3),
(Null, 18, 'Số 88', 3),
(Null, 18, 'Số 73', 3),
(Null, 19, 'Số 31', 3),
(Null, 19, 'Số 47', 3),
(Null, 19, 'Số 55', 3),
(Null, 19, 'Số 62', 3),
(Null, 19, 'Số 78', 3),
(Null, 19, 'Số 83', 3),
(Null, 19, 'Số 95', 3),
(Null, 19, 'Số 88', 3),
(Null, 19, 'Số 73', 3),
(Null, 20, 'Số 31', 3),
(Null, 20, 'Số 47', 3),
(Null, 20, 'Số 55', 3),
(Null, 20, 'Số 62', 3),
(Null, 20, 'Số 78', 3),
(Null, 20, 'Số 83', 3),
(Null, 20, 'Số 95', 3),
(Null, 20, 'Số 88', 3),
(Null, 20, 'Số 73', 3),
(Null, 21, 'Số 31', 3),
(Null, 21, 'Số 47', 3),
(Null, 21, 'Số 55', 3),
(Null, 21, 'Số 62', 3),
(Null, 21, 'Số 78', 3),
(Null, 21, 'Số 83', 3),
(Null, 21, 'Số 95', 3),
(Null, 21, 'Số 88', 3),
(Null, 21, 'Số 73', 3),
(Null, 22, 'Số 31', 4),
(Null, 22, 'Số 47', 4),
(Null, 22, 'Số 55', 4),
(Null, 22, 'Số 62', 4),
(Null, 22, 'Số 78', 4),
(Null, 22, 'Số 83', 4),
(Null, 22, 'Số 95', 4),
(Null, 22, 'Số 88', 4),
(Null, 22, 'Số 73', 4),
(Null, 23, 'Số 31', 4),
(Null, 23, 'Số 47', 4),
(Null, 23, 'Số 55', 4),
(Null, 23, 'Số 62', 4),
(Null, 23, 'Số 78', 4),
(Null, 23, 'Số 83', 4),
(Null, 23, 'Số 95', 4),
(Null, 23, 'Số 88', 4),
(Null, 23, 'Số 73', 4),
(Null, 24, 'Số 31', 4),
(Null, 24, 'Số 47', 4),
(Null, 24, 'Số 55', 4),
(Null, 24, 'Số 62', 4),
(Null, 24, 'Số 78', 4),
(Null, 24, 'Số 83', 4),
(Null, 24, 'Số 95', 4),
(Null, 24, 'Số 88', 4),
(Null, 24, 'Số 73', 4),
(Null, 25, 'Số 31', 4),
(Null, 25, 'Số 47', 4),
(Null, 25, 'Số 55', 4),
(Null, 25, 'Số 62', 4),
(Null, 25, 'Số 78', 4),
(Null, 25, 'Số 83', 4),
(Null, 25, 'Số 95', 4),
(Null, 25, 'Số 88', 4),
(Null, 25, 'Số 73', 4),
(Null, 26, 'Số 31', 5),
(Null, 26, 'Số 47', 5),
(Null, 26, 'Số 55', 5),
(Null, 26, 'Số 62', 5),
(Null, 26, 'Số 78', 5),
(Null, 26, 'Số 83', 5),
(Null, 26, 'Số 95', 5),
(Null, 26, 'Số 88', 5),
(Null, 26, 'Số 73', 5),
(Null, 27, 'Số 31', 5),
(Null, 27, 'Số 47', 5),
(Null, 27, 'Số 55', 5),
(Null, 27, 'Số 62', 5),
(Null, 27, 'Số 78', 5),
(Null, 27, 'Số 83', 5),
(Null, 27, 'Số 95', 5),
(Null, 27, 'Số 88', 5),
(Null, 27, 'Số 73', 5),
(Null, 28, 'Số 31', 5),
(Null, 28, 'Số 47', 5),
(Null, 28, 'Số 55', 5),
(Null, 28, 'Số 62', 5),
(Null, 28, 'Số 78', 5),
(Null, 28, 'Số 83', 5),
(Null, 28, 'Số 95', 5),
(Null, 28, 'Số 88', 5),
(Null, 28, 'Số 73', 5),
(Null, 29, 'Số 31', 5),
(Null, 29, 'Số 47', 5),
(Null, 29, 'Số 55', 5),
(Null, 29, 'Số 62', 5),
(Null, 29, 'Số 78', 5),
(Null, 29, 'Số 83', 5),
(Null, 29, 'Số 95', 5),
(Null, 29, 'Số 88', 5),
(Null, 29, 'Số 73', 5),
(Null, 30, 'Số 31', 5),
(Null, 30, 'Số 47', 5),
(Null, 30, 'Số 55', 5),
(Null, 30, 'Số 62', 5),
(Null, 30, 'Số 78', 5),
(Null, 30, 'Số 83', 5),
(Null, 30, 'Số 95', 5),
(Null, 30, 'Số 88', 5),
(Null, 30, 'Số 73', 5),
(Null, 31, 'Số 31', 6),
(Null, 31, 'Số 47', 6),
(Null, 31, 'Số 55', 6),
(Null, 31, 'Số 62', 6),
(Null, 31, 'Số 78', 6),
(Null, 31, 'Số 83', 6),
(Null, 31, 'Số 95', 6),
(Null, 31, 'Số 88', 6),
(Null, 31, 'Số 73', 6),(Null, 32, 'Số 31', 6),
(Null, 32, 'Số 47', 6),
(Null, 32, 'Số 55', 6),
(Null, 32, 'Số 62', 6),
(Null, 32, 'Số 78', 6),
(Null, 32, 'Số 83', 6),
(Null, 32, 'Số 95', 6),
(Null, 32, 'Số 88', 6),
(Null, 32, 'Số 73', 6),
(Null, 33, 'Số 31', 6),
(Null, 33, 'Số 47', 6),
(Null, 33, 'Số 55', 6),
(Null, 33, 'Số 62', 6),
(Null, 33, 'Số 78', 6),
(Null, 33, 'Số 83', 6),
(Null, 33, 'Số 95', 6),
(Null, 33, 'Số 88', 6),
(Null, 33, 'Số 73', 6),
(Null, 34, 'Số 31', 6),
(Null, 34, 'Số 47', 6),
(Null, 34, 'Số 55', 6),
(Null, 34, 'Số 62', 6),
(Null, 34, 'Số 78', 6),
(Null, 34, 'Số 83', 6),
(Null, 34, 'Số 95', 6),
(Null, 34, 'Số 88', 6),
(Null, 34, 'Số 73', 6),
(Null, 35, 'Số 31', 6),
(Null, 35, 'Số 47', 6),
(Null, 35, 'Số 55', 6),
(Null, 35, 'Số 62', 6),
(Null, 35, 'Số 78', 6),
(Null, 35, 'Số 83', 6),
(Null, 35, 'Số 95', 6),
(Null, 35, 'Số 88', 6),
(Null, 35, 'Số 73', 6),
(Null, 36, 'Số 31', 6),
(Null, 36, 'Số 47', 6),
(Null, 36, 'Số 55', 6),
(Null, 36, 'Số 62', 6),
(Null, 36, 'Số 78', 6),
(Null, 36, 'Số 83', 6),
(Null, 36, 'Số 95', 6),
(Null, 36, 'Số 88', 6),
(Null, 36, 'Số 73', 6),
(Null, 37, 'Số 31', 7),
(Null, 37, 'Số 47', 7),
(Null, 37, 'Số 55', 7),
(Null, 37, 'Số 62', 7),
(Null, 37, 'Số 78', 7),
(Null, 37, 'Số 83', 7),
(Null, 37, 'Số 95', 7),
(Null, 37, 'Số 88', 7),
(Null, 37, 'Số 73', 7),
(Null, 38, 'Số 31', 7),
(Null, 38, 'Số 47', 7),
(Null, 38, 'Số 55', 7),
(Null, 38, 'Số 62', 7),
(Null, 38, 'Số 78', 7),
(Null, 38, 'Số 83', 7),
(Null, 38, 'Số 95', 7),
(Null, 38, 'Số 88', 7),
(Null, 38, 'Số 73', 7),
(Null, 39, 'Số 31', 7),
(Null, 39, 'Số 47', 7),
(Null, 39, 'Số 55', 7),
(Null, 39, 'Số 62', 7),
(Null, 39, 'Số 78', 7),
(Null, 39, 'Số 83', 7),
(Null, 39, 'Số 95', 7),
(Null, 39, 'Số 88', 7),
(Null, 39, 'Số 73', 7),
(Null, 40, 'Số 31', 7),
(Null, 40, 'Số 47', 7),
(Null, 40, 'Số 55', 7),
(Null, 40, 'Số 62', 7),
(Null, 40, 'Số 78', 7),
(Null, 40, 'Số 83', 7),
(Null, 40, 'Số 95', 7),
(Null, 40, 'Số 88', 7),
(Null, 40, 'Số 73', 7),
(Null, 41, 'Số 31', 7),
(Null, 41, 'Số 47', 7),
(Null, 41, 'Số 55', 7),
(Null, 41, 'Số 62', 7),
(Null, 41, 'Số 78', 7),
(Null, 41, 'Số 83', 7),
(Null, 41, 'Số 95', 7),
(Null, 41, 'Số 88', 7),
(Null, 41, 'Số 73', 7),
(Null, 42, 'Số 31', 7),
(Null, 42, 'Số 47', 7),
(Null, 42, 'Số 55', 7),
(Null, 42, 'Số 62', 7),
(Null, 42, 'Số 78', 7),
(Null, 42, 'Số 83', 7),
(Null, 42, 'Số 95', 7),
(Null, 42, 'Số 88', 7),
(Null, 42, 'Số 73', 7),
(10, 10, 'Số 20', 7);

INSERT INTO cay (ten_cay, ma_loai, ngay_trong, tan_cay_che_phu, chieu_cao, duong_kinh, toa_do, ma_dia_chi, ma_trang_thai_cay) VALUES
('Cây dương xỉ', 1, '2024-04-18', '1,5m', '2m', '0.5m', '16.047051, 108.206230', 1, 1),
('Cây dừa', 2, '2024-04-19', '2m', '3m', '0.6m', '16.045254, 108.218721', 2, 2),
('Cây hoa hồng', 1, '2024-04-20', '50cm', '1.5m', '0.4m', '16.057928, 108.218154', 3, 3),
('Cây bàng', 3, '2024-04-21', '3,5m', '4m', '0.7m', '16.052321, 108.208946', 4, 1),
('Cây dừa', 2, '2024-04-22', '1,5m', '3.5m', '0.8m', '16.045892, 108.231416', 5, 2),
('Cây dương xỉ', 1, '2024-04-23', '1m', '2.5m', '0.5m', '16.055723, 108.221797', 6, 3),
('Cây bàng', 3, '2024-04-24', '3m', '3.2m', '0.6m', '16.048672, 108.227302', 7, 1);

INSERT INTO cong_vien (ten_cong_vien) VALUES
('Công viên Biển Đông'),
('Công viên Sông Hàn'),
('Công viên Châu Á');

INSERT INTO tuyen_duong_cong_vien (ma_cong_vien, ma_tuyen_duong) VALUES
(1, 27),
(2, 17),
(2, 36),
(2, 37),
(3, 35);

INSERT INTO hinh_anh (hinh_anh, ma_thong_tin_phan_anh, ma_cay) VALUES
('https://monsteravietnam.com/wp-content/uploads/2023/03/cay-duong-xi-co-dai-lon-monsteravietnam.com-0.jpg', 1, 1),
('https://phunugioi.com/wp-content/uploads/2022/03/Anh-cay-Dua.jpg', 2, 2),
('https://hoasenviet.net/uploads/photos/1589186815_2992_a355658ba83f14c843bb886d5474ae18.jpg', 3, 3),
('https://th.bing.com/th/id/R.ae9b52a68d5cfaf8276d67f0caf8b2a7?rik=Sodn0l3WzJ2u%2bg&pid=ImgRaw&r=0', 4, 4),
('https://img5.thuthuatphanmem.vn/uploads/2021/07/16/anh-cay-xanh-the-dep_093247056.jpg', 5, 5),
('https://btnmt.1cdn.vn/2021/08/09/anh-1-4-.jpg', 6, 6),
('https://caybamien.vn/wp-content/uploads/2021/02/cay-bo-de-cong-trinh.jpg', 7, 7);

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