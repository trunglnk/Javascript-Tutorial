async function fetchRemoteAPI(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Network request error:", error);
        return null;
    }
}

async function fetchFileContent(url) {
    try {
        const response = await fetch(url);
        const content = await response.text();
        return content;
    } catch (error) {
        console.error("File fetching error:", error);
        return null;
    }
}

async function makeNetworkRequests() {
    try {
        const apiData = await fetchRemoteAPI("https://jsonplaceholder.typicode.com/todos/");
        const fileContent = await fetchFileContent("https://raw.githubusercontent.com/openai/gym/master/README.md");

        console.log("API response:", apiData);
        console.log("File content:", fileContent);

        // Make a network request to the additional API
        const additionalAPIURL = "https://api.github.com/users/bard";
        const additionalAPIData = await fetchRemoteAPI(additionalAPIURL);

        console.log("Additional API response:", additionalAPIData);

        // Process the responses here
    } catch (error) {
        console.error("Error:", error);
    }
}

async function main() {
    await makeNetworkRequests();
    // await readFile();
}

main();
