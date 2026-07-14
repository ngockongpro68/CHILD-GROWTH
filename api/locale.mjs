export default {
  fetch(request) {
    if (!["GET", "HEAD"].includes(request.method)) {
      return new Response(null, {
        status: 405,
        headers: { "Allow": "GET, HEAD", "Cache-Control": "private, no-store" }
      });
    }

    const country = String(request.headers.get("x-vercel-ip-country") || "").toUpperCase();
    const language = country === "VN" ? "vi" : "en";

    return new Response(request.method === "HEAD" ? null : JSON.stringify({ language }), {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "private, no-store",
        "Vary": "X-Vercel-IP-Country"
      }
    });
  }
};
