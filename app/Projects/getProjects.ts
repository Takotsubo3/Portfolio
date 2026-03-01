export async function getProjects(){
    const res = await fetch ("../../Data/projects.json");
    return res.json();
}