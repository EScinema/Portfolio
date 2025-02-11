function videofunc() {
    document.getElementById("videoview").style.color = "whitesmoke";
    document.getElementById("galleryview").style.color = "#E9A23B";
    document.getElementById("video").style.display = "flex";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("explgallery").style.display = "none";
};

function galleryfunc() {
    document.getElementById("videoview").style.color = "#E9A23B";
    document.getElementById("galleryview").style.color = "whitesmoke";
    document.getElementById("video").style.display = "none";
    document.getElementById("gallery").style.display = "flex";
    document.getElementById("explgallery").style.display = "block";
};

function populategallery() {
    const gallerychildren = document.getElementById("gallery").children
    for (let i = 0; i < gallerychildren.length; i++) {
        gallerychildren[i].querySelector("img").src = "images/gallery/" + (gallerychildren.length - i) + ".jpg";
    };
}