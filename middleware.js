console.log("MIDDLEWERE")
export { auth as default } from "./auth"

export const config = {
    matcher: ["/cores/:path*"],
  }