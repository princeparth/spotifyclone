let songIndex = 0;
let audioElement = new Audio('songs/song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif')


let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "As if its your last", filePath: "songs/song1.mp3", coverPath: "cover page/cover1.jpg"},
    {songName: "The Nights", filePath: "songs/song2.mp3", coverPath: "cover page/cover2.jpg"},
    {songName: "Boy with Luv", filePath: "songs/song3.mp3", coverPath: "cover page/cover3.jpg"},
    {songName: "Pheli Mohabbhat", filePath: "songs/song4.mp3", coverPath: "cover page/cover4.jpg"},
    {songName: "Dynamite", filePath: "songs/song5.mp3", coverPath: "cover page/cover5.jpeg"},
    {songName: "Heat Waves", filePath: "songs/song6.mp3", coverPath: "cover page/cover6.jpeg"},
    {songName: "Kahani Suno 2.O", filePath: "songs/song7.mp3", coverPath: "cover page/cover7.jpg"},
    {songName: "let Me Love You", filePath: "songs/song8.mp3", coverPath: "cover page/cover8.jpg"},
    {songName: "Maan Meri Jaan", filePath: "songs/song9.mp3", coverPath: "cover page/cover9.jpg"},
    {songName: "Rock with You", filePath: "songs/song10.mp3", coverPath: "cover page/cover10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterSongName .innerText = songs[songIndex].songName
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{ 

    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgessBar.value = progress;
    
})

myProgessBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgessBar.value * audioElement.duration/100;
})



const Play = ()=>{
    Array.from (document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
 }

Array.from (document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.addEventListener('click', (e)=>{
           Play();
          songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`songs/song${songIndex+1}.mp3`
        masterSongName .innerText = songs[songIndex].songName
        audioElement.currentTime=0
        audioElement.play()
        gif.style.opacity = 1;
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
      

        
    })
        
      })
    
      


document.getElementById('next').addEventListener('click',()=>{
      if(songIndex>=9){
        songIndex = 0
      }
      else{
        songIndex += 1;
      }
      
      audioElement.src =`songs/song${songIndex+1}.mp3`
      masterSongName .innerText = songs[songIndex].songName
      audioElement.currentTime=0
      audioElement.play()
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
      songIndex = 0
    }
    else{
      songIndex -= 1;
    }
    
    audioElement.src =`songs/song${songIndex+1}.mp3`
    masterSongName .innerText = songs[songIndex].songName
    audioElement.currentTime=0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})