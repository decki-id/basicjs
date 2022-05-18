// get all video elements
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// choose only 'JAVASCRIPT LANJUTAN'
let jsLanjutan = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
    // get duration of each video
    .map(item => item.dataset.duration)
    // change duration to int, change minutes to seconds
    .map(time => {
        // 10:30 -> [10, 30] split
        const parts = time.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })
    // sum all seconds
    .reduce((total, seconds) => total + seconds);

// change format to hour:minutes:seconds
const hour = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - hour * 3600;
const
    minutes = Math.floor(jsLanjutan / 60),
    seconds = jsLanjutan - minutes * 60;

// put to DOM
const pDuration = document.querySelector('.total-durasi');
pDuration.textContent = `${hour} hours, ${minutes} minutes, ${seconds} seconds.`;
const
    totalVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length,
    pTotalVideo = document.querySelector('.jumlah-video');
pTotalVideo.textContent = `${totalVideo} video.`;