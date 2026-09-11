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

  console.log(data);
}
loadManga();
