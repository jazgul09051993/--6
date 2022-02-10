document.body.style.background="hsl(217, 54%, 11%";

const div=document.getElementById('card');
div.style.backgroundColor = 'rgb(27, 46, 73)';
div.style.width="400px";
div.style.height="700px";
div.style.borderRaduis="20px";
div.style.padding="25px";
div.fontFamily='"Ronoto Condensed", sans-serif';
div.style.fontSize="23px";
div.style.margin="auto";

const img=document.createElement("img");
img.setAttribute('src',"images/image-equilibrium.jpg");
card.prepend(img);
img.style.width="100%";
img.style.marginBottom="25px";
img.alignItems="center";
img.style.borderRadius="20px";

const a=document.createElement('a');
a.href="a";
a.innerText="Equilibrium #3429";
a.style.fontSize="18 px";
a.style.color="white";
a.style.fontWeight="600";
a.style.fontFamily='"Outfit", sans-serif';
a.style.textDecoration="none";
card.append(a);

const p=document.createElement('p');
p.innerText='Our Equilibrium collection promotes balance and calm.';
p.style.color='rgb(139, 172, 218)';
p.style.fontFamily='"Open-Sans", sans-serif';
card.append(p);

const icons=document.createElement('div');
icons.style.display='flex';
card.append(icons);

const icon = document.createElement("img");
icon.src = "images/icon-ethereum.svg";
icon.style.marginRight = "5px";
icons.appendChild(icon);

const p2=document.createElement('p2');
p2.innerText='0.041ETH';
p2.style.fontFamily='"Open-Sans", sans-serif';
p2.style.color='hsl(178, 100%, 50%)';
p2.stylefontSize='18px';
icons.appendChild(p2);

const imgTime = document.createElement("img");
imgTime.style.marginRight = "5px";
imgTime.src = "images/icon-clock.svg";
imgTime.style.marginLeft='160px';
icons.appendChild(imgTime);

const p3=document.createElement('p3');
p3.setAttribute('src',"images/icon-ethereum.svg");
p3.innerText='3 days  left';
p3.style.color='rgb(139, 172, 218)';
p3.stylefontSize='18px';
p3.style.fontFamily='Outfit", sans-serif';
p3.style.float='right';
icons.appendChild(p3);

const hr=document.createElement('hr');
hr.style.color="hsl(215, 32%, 27%)";
hr.style.marginTop='25px';
card.append(hr);

const profile = document.createElement("div");
profile.className = "profile";
profile.style.alignItems = "center";
profile.style.marginTop = "20px";
profile.style.display = "flex";
card.appendChild(profile);



const profileImg = document.createElement("img");
profileImg.className = "avatar-img";
profileImg.src = "./images/image-avatar.png";
profileImg.style.maxWidth = "35px";
profileImg.style.marginRight = "18px";
profileImg.style.border = "2px solid white";
profileImg.style.borderRadius = "50%";
profile.appendChild(profileImg);


const profileText = document.createElement("span");
profileText.className = "avatar-text";
profileText.innerText = "Creation of"
profileText.style.fontSize = "19px"
profileText.style.color = "hsl(215, 51%, 70%)";
profileText.style.textAlign = "center";
profile.appendChild(profileText)


const userName = document.createElement("span");
userName.className = "user-name";
userName.style.color = "white";
userName.innerText = " Jules Wyvern";
profileText.appendChild(userName)


alert("Я оцениваю свою работу на 110 баллов")