document.getElementById('fetchButton').addEventListener('click', async () => {
  const category = document.getElementById('category').value;
  const imageContainer = document.getElementById('imageContainer');
  const waifuImage = document.getElementById('waifuImage');

  try {
    const response = await fetch(`https://api.waifu.pics/sfw/${category}`);
    const data = await response.json();
    waifuImage.src = data.url;
    imageContainer.classList.remove('hidden');
  } catch (error) {
    console.error('Erro ao buscar a imagem:', error);
    alert('Ocorreu um erro ao buscar a imagem.');
  }
});
