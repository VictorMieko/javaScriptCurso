export async function fetchAnime(nome) {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(nome)}`);
    try{
        
        if (!response.ok) {
            throw new Error(`Erro na API: Status ${response.status}`);
        }      
        const data = await response.json();
        return data.data;
    } catch(e){
        console.error(`Falha ao buscar dados do anime: ${e}`);
        return [];
    }
}
