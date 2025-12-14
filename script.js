// Fetch GitHub stars only

// Fetch GitHub stars
async function fetchGitHubStars() {
    try {
        const response = await fetch('https://api.github.com/repos/taglyatelle/taglyatelle');
        if (!response.ok) {
            throw new Error('Failed to fetch repository data');
        }
        const data = await response.json();
        const starCount = data.stargazers_count;
        const starElement = document.getElementById('star-count');
        if (starElement) {
            starElement.textContent = starCount.toLocaleString();
        }
    } catch (error) {
        console.error('Error fetching GitHub stars:', error);
        const starElement = document.getElementById('star-count');
        if (starElement) {
            starElement.textContent = '0';
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        fetchGitHubStars();
        setVideoPlaybackSpeed();
    });
} else {
    fetchGitHubStars();
    setVideoPlaybackSpeed();
}

// Set video playback speed to 2x
function setVideoPlaybackSpeed() {
    const video = document.getElementById('demo-video');
    if (video) {
        video.playbackRate = 2.0;
    }
}

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
});
