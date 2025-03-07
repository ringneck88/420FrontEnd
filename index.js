/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

/**
 * Handles incoming fetch requests and serves the appropriate response.
 *
 * @param {Request} request - The incoming request object.
 * @param {Object} env - The environment object containing bindings and assets.
 * @param {Object} env.ASSETS - The assets binding used to fetch static assets.
 * @returns {Promise<Response>} - The response to be sent back to the client.
 *
 * @example
 * // Example usage:
 * const response = await fetch(request, env);
 *
 * @troubleshooting
 * - Ensure `env.ASSETS` is correctly configured and accessible.
 * - Verify the request URL and path are correct.
 * - Check for any network issues that might affect the fetch operation.
 */
export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        if (url.pathname === "/") {
            const html = await env.ASSETS.fetch(request);
            return new Response(html.body, {
                headers: { 'Content-Type': 'text/html' },
            });
        }
        return env.ASSETS.fetch(request);
    },
};
