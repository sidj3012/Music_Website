//For specific artists click
songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
]

document.getElementById("arijit").addEventListener('click',()=>{
    songs = [
        {songName: "Tum Hi Ho", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
        {songName: "Kesariya", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
        {songName: "Jmoome JO Pathaan", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
        {songName: "Kalank- Title Track", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
        {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    ]
    document.getElementById("heading").innerHTML="Arijit Singh"
    func();
})
document.getElementById("justin").addEventListener('click',()=>{
    songs = [
        {songName: "Tum Hi Ho", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
        {songName: "Kesariya", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
        {songName: "Jmoome JO Pathaan", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
        {songName: "Kalank- Title Track", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
        {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    ]
    document.getElementById("heading").innerHTML="Justin Bieber"
    func();
})

function func(){
    document.getElementById("container").style.display="block";
    document.getElementById("container2").style.display="none";

    audioElement = new Audio('songs/1.mp3');
    songIndex = 0;
    masterPlay = document.getElementById('masterPlay');
    myProgressBar = document.getElementById('myProgressBar');
    gif = document.getElementById('gif');
    masterSongName = document.getElementById('masterSongName');
    songItems = Array.from(document.getElementsByClassName('songItem'));

   const songItemContainer = document.getElementById("songItemContainer");
   
   songs.forEach((song, index) => {
       const songItem = document.createElement("div");
       songItem.className = "songItem";
   
       songItem.innerHTML = `
           <img alt="${index + 1}" src="${song.coverPath}">
           <span class="songName">${song.songName}</span>
           <span class="songlistplay">
               <span class="timestamp">
                   <i id="${index}" class="far songItemPlay fa-play-circle"></i>
               </span>
           </span>
       `;
   
       songItemContainer.appendChild(songItem);
   });
    
   
   
   // Handle play/pause click
   masterPlay.addEventListener('click', ()=>{
       if(audioElement.paused || audioElement.currentTime<=0){
           audioElement.play();
           masterPlay.classList.remove('fa-play-circle');
           masterPlay.classList.add('fa-pause-circle');
           gif.style.opacity = 1;
       }
       else{
           audioElement.pause();
           masterPlay.classList.remove('fa-pause-circle');
           masterPlay.classList.add('fa-play-circle');
           gif.style.opacity = 0;
       }
   })
   // Listen to Events
   audioElement.addEventListener('timeupdate', ()=>{ 
       // Update Seekbar
       progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
       myProgressBar.value = progress;
   })
   
   myProgressBar.addEventListener('change', ()=>{
       audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
   })
   
   const makeAllPlays = ()=>{
       Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
           element.classList.remove('fa-pause-circle');
           element.classList.add('fa-play-circle');
       })
   }
   
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.addEventListener('click', (e)=>{ 
           makeAllPlays();
           songIndex = parseInt(e.target.id);
           e.target.classList.remove('fa-play-circle');
           e.target.classList.add('fa-pause-circle');
           audioElement.src = `songs/${songIndex+1}.mp3`;
           masterSongName.innerText = songs[songIndex].songName;
           audioElement.currentTime = 0;
           audioElement.play();
           gif.style.opacity = 1;
           masterPlay.classList.remove('fa-play-circle');
           masterPlay.classList.add('fa-pause-circle');
       })
   })
   
   document.getElementById('next').addEventListener('click', ()=>{
       if(songIndex>=9){
           songIndex = 0
       }
       else{
           songIndex += 1;
       }
       audioElement.src = `songs/${songIndex+1}.mp3`;
       masterSongName.innerText = songs[songIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
   
   })
   
   document.getElementById('previous').addEventListener('click', ()=>{
       if(songIndex<=0){
           songIndex = 0
       }
       else{
           songIndex -= 1;
       }
       audioElement.src = `songs/${songIndex+1}.mp3`;
       masterSongName.innerText = songs[songIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
   })
}