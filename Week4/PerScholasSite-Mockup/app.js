const closeBannerButton = document.querySelector('.close-banner')
console.log(closeBannerButton.parentElement)

// closeBannerButton.style.display = 'none'

closeBannerButton.onclick = () => {
    closeBannerButton.parentElement.style.display = 'none';
}