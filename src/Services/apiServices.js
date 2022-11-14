export async function getEverything(data){
    return await fetch ('https://newsapi.org/v2/everything?q=bitcoin&apiKey=2d5debd860354c8fa67d4458c2ad9578')
}