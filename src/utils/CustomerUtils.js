import jwtDecode from "jwt-decode";

export default function getEmailFromToken() {
    const tokenCookie = getCookieByName("auth");
    if (tokenCookie != null) {
        if (tokenCookie.length > 50) {
            return jwtDecode(tokenCookie).mail;
        }
    }
    return null;
};


export function getCookieByName(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
    })
    return cookie[name];
}