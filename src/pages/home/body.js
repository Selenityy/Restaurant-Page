export default function homeBody() {
    const content = document.getElementById("content");

    const body = document.createElement("div");
    body.setAttribute("id", "bodyContent");
    content.appendChild(body);
}