export default {
  fetch(request) {
    const country = String(request.headers.get("x-vercel-ip-country") || "").toUpperCase();
    const language = country === "VN" ? "vi" : "en";

    return Response.json(
      { language },
      {
        headers: {
          "Cache-Control": "private, no-store",
          "Vary": "X-Vercel-IP-Country"
        }
      }
    );
  }
};
