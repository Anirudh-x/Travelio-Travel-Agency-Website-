const form = {
  signInForm() {
    document.querySelector('.form').innerHTML = `
      <form>
        <button class="close-button">x</button>
        <h3>Welcome Back !</h3>
      
        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" class="sign-page-input">
      
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" class="sign-page-input">
      
        <button class="sign-page-button">Sign In</button>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
      </form>
    `
  },
  
  signUpForm() {
    document.querySelector('.form').innerHTML = `
      <form>
        <button class="close-button">x</button>
        <h3>Welcome To Travelio !</h3>
      
        <label for="username">Username</label>
        <input type="text" placeholder="Username" id="username" class="sign-page-input">
  
        <label for="username">Email</label>
        <input type="text" placeholder="Email or Phone" id="username" class="sign-page-input">
      
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" class="sign-page-input">
      
        <button class="sign-page-button">Create an Account</button>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
      </form>
    `;
  },
}


let prev = document.getElementById('prev');
let next = document.getElementById('next');
let thumbnail = document.getElementsByClassName('thumbnail');
let hero = document.getElementById('hero');
let backgroundImg = new Array(
  "images/bg1.png",
  "images/bg2.png",
  "images/bg3.png",
  "images/bg4.png",
  "images/bg5.png",
  "images/bg6.png",
  "images/bg7.png",
);

let i = 0;
next.onclick = function() {
  if (i < 6) {
    hero.style.backgroundImage = `url("${backgroundImg[i+1]}")`;
    thumbnail[i+1].classList.add("active");
    thumbnail[i].classList.remove("active");
    i++;
  }
}
prev.onclick = function() {
  if (i > 0) {
    hero.style.backgroundImage = `url("${backgroundImg[i-1]}")`; 
    thumbnail[i-1].classList.add("active");
    thumbnail[i].classList.remove("active");
    i--;
  }
}


document.querySelector('.sign-in').addEventListener('click', () => {

  document.querySelector('.sign-div').classList.add('form');

  form.signInForm();
})

document.querySelector('.sign-up').addEventListener('click', () => {

  document.querySelector('.sign-div').classList.add('form');

  form.signUpForm();
})

document.querySelector('.close-button').addEventListener('click', () => {
  document.querySelector('.sign-div').classList.remove('form')
})

