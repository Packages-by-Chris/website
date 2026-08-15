export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const pathname = url.pathname

    // Ensure trailing-slash routes (site is built with trailingSlash: true)
    if (pathname.length > 1 && !pathname.endsWith("/") && !/\.[a-z0-9]+$/i.test(pathname)) {
      url.pathname = `${pathname}/`
      return Response.redirect(url.toString(), 308)
    }

    // Serve from the static export (./out)
    const response = await env.ASSETS.fetch(request)
    return response
  },
}
