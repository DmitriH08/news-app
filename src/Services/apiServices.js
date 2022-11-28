const apiUrl = 'https://newsapi.org';

export async function getEverything(data) {
    const params = new URLSearchParams({
        ...data,
        apiKey: process.env.REACT_APP_API_KEY,
    });
    return await fetch(`${apiUrl}/v2/everything?${params}`);
}

export async function getSources() {
    return await fetch(`${apiUrl}/v2/top-headlines/sources?apiKey=2d5debd860354c8fa67d4458c2ad9578`);
}
