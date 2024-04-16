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
diadiem varchar(255),
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
ma_phuong BIGINT ,
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
ten_quan VARCHAR(255),
tong_so_cay int
);

CREATE TABLE IF NOT EXISTS trang_thai_cay (
ma_trang_thai_cay BIGINT AUTO_INCREMENT PRIMARY KEY,
tinh_trang_cay VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS nguoi_dung (
ma_nguoi_dung BIGINT AUTO_INCREMENT PRIMARY KEY,
ho_va_ten VARCHAR(255),
ten_dang_nhap VARCHAR(255),
mat_khau VARCHAR(255),
vai_tro VARCHAR(255),
doi_ngu int
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
ADD CONSTRAINT FOREIGN KEY (ma_phuong) REFERENCES phuong_xa(ma_phuong);
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




