function bck() {
    window.location.href = "index.html";
}
function go() {
    alert('🎊login successfully 🎊');
    window.location.href = "Html4.html";
}
function sub() {
    alert('🎊login successfully 🎊');
    window.location.href = "Html4.html";
}
function toggleSearch() {
    const searchBox = document.getElementById('searchBox');
    searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
}

function searchText() {
    const input = document.getElementById('searchInput').value;
    const bodyText = document.body.innerHTML;
    const highlightStart = '<span class="highlight">';
    const highlightEnd = '</span>';
    const regex = new RegExp(input, 'gi');
    const newText = bodyText.replace(regex, (match) => highlightStart + match + highlightEnd);
    document.body.innerHTML = newText;
}


const popup = document.getElementById("popup");
const popupBtn = document.getElementById("popupBtn");
const closeBtn = document.querySelector(".close");


