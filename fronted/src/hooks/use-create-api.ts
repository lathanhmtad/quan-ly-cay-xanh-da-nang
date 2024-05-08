import {useMutation} from "@tanstack/react-query";
import FetchUtils from "../utils/FetchUtils";

function useCreateApi<I, O>(resourceUrl: string) {
    return useMutation({
        mutationFn: async (requestBody): Promise<O> => FetchUtils.post(resourceUrl, requestBody),
        onSuccess: () => {
            console.log('success')
        },
        onError: () => {
            console.log('error')
        }
    })
}

export default useCreateApi;
