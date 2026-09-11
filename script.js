const SUPABASE_URL = "https://iapmfgzltztjxgxpvewt.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_Xl7oe_Oblt0T0z0uR-WwWA_eUguVm0-";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

    async function loadManga() {
        
      const { data, error } = await supabase
        .from("manga")
        .select("*")

    if (error) {
        console.error("Error loading manga: ", error);
        return;
    }

    const container = document.getElementById("manga-container");

    data.forEach(function(manga) {

        const card = document.createElement("div");

        card.className = "manga-card";

        card.innerHTML = 
            <h2>${manga.title}</h2>
            <p><strong>Author:</strong> ${manga.author}</p>
            <p><strong>Type:</strong> ${manga.type}</p>
            <p><strong>Status:</strong> ${manga.status}</p>
            <p>${manga.description}</p>
        ;

        containter.appendChild(card);
    });

}

loadManga();
