import ApplicationConstants from './ApplicationConstants';

const apiPath: string = ApplicationConstants.API_PATH;

class ResourceUrl {
    // admin
    static NGUOI_DUNG = apiPath + '/nguoi-dung';
    static TREE = apiPath + '/cay-xanh'
    static KE_HOACH = apiPath + '/ke-hoach'
    static DON_THU = apiPath + '/don-thu'

    // client

    // auth
    static LOGIN = apiPath + '/auth/login';
}

export default ResourceUrl;