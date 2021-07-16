//calls makeRequest() passing various args and prints the op
const testing = async () => {
    try {
        const [data, err] = await makeRequest(
            "get",
            "https://rickandmortyapi.com/api/character/7546"
        );

        if (err) {
            console.error(err);
        } else if (data) {
            console.log(data);
        } else {
            console.error("something went wrong in testing() function");
        }

        const [data1, err1] = await makeRequest(
            "post",
            "https://jsonplaceholder.typicode.com/posts", {
                title: "swastik",
                body: "gowda",
                userId: 21,
            }
        );

        if (err) {
            console.error(err);
        } else if (data) {
            console.log(data);
        } else {
            console.error("something went wrong in testing() function");
        }
    } catch (e) {
        console.error(e);
    }
};

class Error {
    constructor(message) {
        this.name = "Error";
        this.message = message;
    }
}

//sends request to the url based on the http method & other constraints
const makeRequest = async (httpMethod, url, arg = null) => {
    try {
        if (httpMethod === "get" && url && !arg) {
            let response = await axios.get(url);
            return [response.data, null];
        } else if (httpMethod === "post" && url && arg) {
            let response = await axios.post(url, arg);
            return [response.data, null];
        } else if (httpMethod === "get" && url && arg) {
            throw new Error("No arg should be passed for get method!");
        } else if (httpMethod === "post" && url && !arg) {
            throw new Error("arg should be passed for post method!");
        } else {
            throw new Error("unknown error in makeRequest() function");
        }
    } catch (e) {
        return [null, e];
    }
};

testing();