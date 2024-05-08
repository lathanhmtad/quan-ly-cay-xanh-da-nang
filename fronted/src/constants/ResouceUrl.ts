import ApplicationConstants from './ApplicationConstants';

const apiPath: string = ApplicationConstants.API_PATH;

class ResourceUrl {
    // admin
    static NGUOI_DUNG = apiPath + '/nguoi-dung';
    static TREE = apiPath + '/cay-xanh'
    static KE_HOACH = apiPath + '/ke-hoach'
    static DON_THU = apiPath + '/don-thu'
    static DIA_DIEM_QUAN_HUYEN = apiPath + '/dia-diem-theo-quan'
    static DIA_DIEM_PHUONG_XA = apiPath + '/dia-diem-theo-phuong-xa'
    static DIA_DIEM_TUYEN_DUONG = apiPath + '/dia-diem-theo-tuyen-duong'
    static DIA_DIEM_CONG_VIEN = apiPath + '/dia-diem-theo-cong-vien'

    // client

    // auth
    static LOGIN = apiPath + '/auth/login';
}

export default ResourceUrl;