export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        data:"Hello world!"
    };
};