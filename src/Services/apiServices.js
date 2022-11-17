const apiUrl = 'https://newsapi.org';

export async function getEverything(data){
    const params = new URLSearchParams({
        ...data,
        apiKey: '2d5debd860354c8fa67d4458c2ad9578' ,
    });
    return await fetch (`${apiUrl}/v2/everything?${params}`);
}