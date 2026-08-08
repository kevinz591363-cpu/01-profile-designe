// Section 1: Profile Designer
// Modify the sample content below, then test every interaction.
const themeButton=document.querySelector('#themeButton');const helloButton=document.querySelector('#helloButton');const message=document.querySelector('#message');themeButton.addEventListener('click',()=>document.body.classList.toggle('sunset'));helloButton.addEventListener('click',()=>{const name=document.querySelector('#studentName').textContent;message.textContent='Welcome to '+name+"'s website!";});
document.querySelector('#year').textContent=new Date().getFullYear();
