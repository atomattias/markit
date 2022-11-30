import { create } from "apisauce";


const apiClient = create({ baseURL: "http://172.20.1.48:9000/api" });

apiClient.get('listings').then(response => {

    if (!response.ok) {
        return response.problem;
    }  
})

export default apiClient;
