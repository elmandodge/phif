const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    windows.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/404.html",
    "/": "/index.html",
    "/news": "/news.html",
    "/faq": "/faq.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = text;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();