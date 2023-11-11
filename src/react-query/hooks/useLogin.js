import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';

const apiClient=new APIClient('')
var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);

const useLogin=()=> {
    const router=useRouter()

    return useMutation({
        mutationFn: apiClient.post,
        onSuccess: (data) => {
          console.log(data)
          const token='ldkcnksdnfkdsdn'
          Cookies.set('token', token, { expires: inFifteenMinutes});
          router.push('/')
        },
      });
}

export default useLogin