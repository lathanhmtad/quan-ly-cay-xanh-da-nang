import { useQuery } from 'react-query';
import FetchUtils, { ErrorMessage } from '../utils/FetchUtils';
import NotifyUtils from '../utils/NotifyUtils';
import { UseQueryOptions } from 'react-query/types/react/types';

function useGetByIdApi<O>(
    resourceUrl: string,
    resourceKey: string,
    entityId: number,
    successCallback?: (data: O) => void,
    options?: UseQueryOptions<O, ErrorMessage>
) {
    return useQuery<O, ErrorMessage>(
        [resourceKey, 'getById', entityId],
        () => FetchUtils.getById<O>(resourceUrl, entityId),
        {
            staleTime: 0, // Data is considered stale immediately
            cacheTime: 5 * 60 * 1000, // Cache the data for 5 minutes
            refetchOnWindowFocus: false, // Disable refetching on window focus
            refetchOnMount: true, // Enable refetching on mount
            refetchOnReconnect: true, // Enable refetching on reconnect
            onSuccess: successCallback,
            onError: () => NotifyUtils.simpleFailed('Lấy dữ liệu không thành công'),
            ...options,
        },
    );
}

export default useGetByIdApi;
