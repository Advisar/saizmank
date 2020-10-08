let baseUrl = "http://localhost:8000";

async function fetch(url, options = {}) {
    const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };

    return await window.fetch(
        new URL(url, baseUrl),
        {...options, headers}
    );
}

const iceCreamFunctions = {
    getFlavors: async (filter = "") => {
        const response = await fetch("/flavors?filter=" + filter, {method: "GET"});
        return response.json();
    },
    getContainers: async () => {
        const response = await fetch("/containers", {method: "GET"});
        return response.json();
    },
    getSauces: async () => {
        const response = await fetch("/sauces", {method: "GET"});
        return response.json();
    },
    getToppings: async () => {
        const response = await fetch("/toppings", {method: "GET"});
        return response.json();
    },
}
export default iceCreamFunctions;