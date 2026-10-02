const products = [...document.querySelectorAll(".product-card")];
const searchForm = document.getElementById("searchForm");
const noResults = document.getElementById("noResults");

function filterProducts() {
  const term = document.getElementById("searchInput").value.toLowerCase().trim();
  const category = document.getElementById("categoryFilter").value;
  const location = document.getElementById("locationFilter").value;
  let visible = 0;

  products.forEach(card => {
    const matchesTerm = !term || card.dataset.name.toLowerCase().includes(term);
    const matchesCategory = !category || card.dataset.category === category;
    const matchesLocation = !location || card.dataset.location === location;
    const show = matchesTerm && matchesCategory && matchesLocation;
    card.style.display = show ? "" : "none";
    if (show) visible++;
  });

  noResults.hidden = visible !== 0;
}

searchForm.addEventListener("submit", e => {
  e.preventDefault();
  filterProducts();
  document.getElementById("maquinas").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".category-card").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("categoryFilter").value = button.dataset.category;
    filterProducts();
    document.getElementById("maquinas").scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("showAll").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
  document.getElementById("categoryFilter").value = "";
  document.getElementById("locationFilter").value = "";
  filterProducts();
  document.getElementById("maquinas").scrollIntoView({ behavior: "smooth" });
});

const modal = document.getElementById("interestModal");
const modalMachine = document.getElementById("modalMachine");

document.querySelectorAll(".interest-btn").forEach(button => {
  button.addEventListener("click", () => {
    modalMachine.textContent = button.dataset.machine;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

document.getElementById("interestForm").addEventListener("submit", e => {
  e.preventDefault();
  const machine = modalMachine.textContent;
  alert(`Interesse registrado no protótipo para: ${machine}\n\nNa próxima etapa conectaremos este formulário ao Google Sheets e ao WhatsApp.`);
  e.target.reset();
  closeModal();
});

document.getElementById("requestForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Pedido registrado no protótipo. Na próxima etapa conectaremos este formulário ao Google Sheets/WhatsApp.");
  e.target.reset();
});

document.getElementById("sellerBtn").addEventListener("click", () => {
  alert("Na próxima etapa este botão poderá abrir um formulário de cadastro e pagamento do anúncio.");
});

document.querySelector(".menu-btn").addEventListener("click", () => {
  alert("Menu mobile: na próxima etapa podemos transformar este botão em um menu lateral.");
});
