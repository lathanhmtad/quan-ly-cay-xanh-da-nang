import {notification} from 'antd';

const NotificationUtils = {
    simple: (description: React.ReactNode) => {
        notification.info({
            message: 'Thông báo',
            description,
        })
    },

    simpleSuccess: (description: React.ReactNode) => {
        notification.success({
            message: 'Thông báo',
            description,
        })
    },

    simpleFailed: (description: React.ReactNode) => {
        notification.error({
            message: 'Thông báo',
            description,
        })
    }

};

export default NotificationUtils;
