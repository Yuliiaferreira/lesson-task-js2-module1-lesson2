import { url } from "./constants/api.js";
import displayMessage from "./components/displayMessage.js";
import createHtml from "./components/createHtml.js";

async function callApi() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        createHtml(json.data, ".result-container");
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".result-container");
    }
}

callApi();



