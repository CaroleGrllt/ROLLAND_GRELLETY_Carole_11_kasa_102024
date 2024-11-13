import Accomodations from './accomodation.json'

// Loader pour vérifier si l'hébergement existe
export default async function accomodationLoader({ params }) {
    const { id } = params;
    const place     = Accomodations.find(place => place.id === id)

    try {

        if (!place) {
            // Rediriger vers une page 404 si le statut de réponse n'est pas OK (ex: 404)
            throw new Response("Not Found", { status: 404 });
        }

        // Si la réponse est OK, renvoyer les données de l'hébergement
        return place;

    } catch (error) {
        // Si une erreur survient, lancer une erreur 404
        throw new Response("Not Found", { status: 404 });
    }
}

