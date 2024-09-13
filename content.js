// Função para remover elementos com base em seletores CSS
function removeAds() {
    // Lista de seletores CSS que geralmente são usados por anúncios
    const adSelectors = [
      '.advertisement', 
      '.ad-banner', 
      '.sponsored', 
      '.promoted',
      // Adicione outros seletores conforme necessário
    ];
  
    adSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
  }
  
  // Executa a função de remoção quando a página é carregada
  document.addEventListener('DOMContentLoaded', removeAds);
  
  // Também adiciona um observador de mutações para lidar com anúncios que são carregados dinamicamente
  const observer = new MutationObserver(removeAds);
  observer.observe(document.body, { childList: true, subtree: true });
  