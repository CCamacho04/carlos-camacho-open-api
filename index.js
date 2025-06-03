const characterButton = document.getElementById('fetch-character');
const starshipButton = document.getElementById('fetch-species');
const content = document.getElementById('content');

characterButton.addEventListener('click', fetchCharacter);
starshipButton.addEventListener('click', fetchSpecies);

async function fetchCharacter()
{
    try
    {
        const id = Math.floor(Math.random() * 83) + 1;
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
        const data = await response.json();
        const character = data.result.properties;

        content.innerHTML = `
            <h2>${character.name}</h2>
            <p><strong>Birth Year:</strong> ${character.birth_year}</p>
            <p><strong>Gender:</strong> ${character.gender}</p>
        `;
    }
    catch(error) 
    {
        content.innerHTML = `<p>Error fetching character.</p>`;
        console.error(error);
    }
}

async function fetchSpecies()
{
    try
    {
        const id = Math.floor(Math.random() * 37) + 1;
        const response = await fetch(`https://www.swapi.tech/api/species/${id}`);
        const data = await response.json();
        const species = data.result.properties;

        content.innerHTML = `
            <h2>${species.name}</h2>
            <p><strong>Language:</strong> ${species.language}</p>
            <p><strong>Average Lifespan:</strong> ${species.average_lifespan}</p>
        `;
    }
    catch(error)
    {
        content.innerHTML = `<p>Error fetching character.</p>`;
        console.error(error);
    }
}