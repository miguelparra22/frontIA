import { predict } from "replicate-api";



    const prediction = await predict({
        model: "stability-ai/stable-diffusion", // The model name
        input: { prompt: "multicolor hyperspace" }, // The model specific input
        token: "Token 4e8cd78610196ad3d86d9e86c549294e7c93ccb4", // You need a token from replicate.com
        poll: true, // Wait for the model to finish
      })
      
      console.log(prediction.outputs[0])
    


  export {prediction}