import {useMutation} from "@tanstack/react-query";
import FetchUtils, {ErrorResponse} from "../utils/FetchUtils";
import {HinhAnhDto} from "../models/HinhAnh";

function useUploadMultipleImagesApi() {
    return useMutation<HinhAnhDto[], ErrorResponse, File[]>({
        mutationFn: (images) => FetchUtils.uploadMultipleImages(images),
        onSuccess: () => {
            console.log('upload success')
        },
        onError: () => {
            console.log('upload failed')
        }
    })
}