
// I did this project a while back but i guess i never submitted it. My hard drive crashed since this so I dont have my interpretation. 


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Positioning Exercise</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Don't change anything here! -->
  <div class="one">
    <div class="two">
      <div class="three">
        <div class="four"></div>
      </div>
    </div>
  </div>
</body>
</html>



body {
  margin: 0;
  border: 5px solid black;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
}

.one {
  width: 400px;
  height: 400px;
  background-color: red;
}

.two {
  width: 300px;
  height: 300px;
  background-color: yellow;
}

.three {
  width: 200px;
  height: 200px;
  background-color: green;
}

.four {
  width: 100px;
  height: 100px;
  background-color: blue;
}

/* Exercise 1 */

/* 
.two,
.three,
.four {
  position: relative;
  top: 50px;
  left: 50px;
}
*/

/* Exercise 2 */

/* 
.four {
  position: absolute;
  right: 0;
}
*/

/* Exercise 3 */

/*
.one {
  position: relative;
}

.three {
  position: absolute;
  bottom: 0;
  right: -200px;
}

.four {
  position: absolute;
  bottom: 0;
}
*/

/* Exercise 4 */

/*
.one {
  position: relative;
}

.two,
.four {
  position: absolute;
  bottom: 0;
  right: 0;
}

.three {
  position: absolute;
  top: -100px;
  left: -100px;
}
*/

/* Exercise 5 */

/*
.two {
  position: fixed;
  bottom: 5px;
  right: 5px;
}

.three {
  position: absolute;
  top: -200px;
}

.four {
  position: fixed;
  top: 5px;
  left: 5px;
}
*/
!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<button>Sign Up</button>
<hr>
<div class="card">
  <div class="img"></div>
  <div class="title">I iz a catz.</div>
  <div class="description">
    Lorem ipsum dolor amet craft beer 90's art party, vegan four dollar
    toast green juice vaporware next level fingerstache mustache shaman
    DIY brunch ethical. Plaid fam cornhole trust fund, umami knausgaard
    authentic shabby chic kogi godard tote bag palo santo beard
    locavore coloring book.
  </div>
</div>
<hr>
<div class="tiles">
  <div class="tile">
    <div class="img-wrapper img-1">
    </div>
    <div class="caption">
      NOM NOM NOM
    </div>
  </div>
  <div class="tile">
    <div class="img-wrapper img-2">
    </div>
    <div class="caption">
      WANNA DANCE?
    </div>
  </div>
  <div class="tile">
    <div class="img-wrapper img-3">
    </div>
    <div class="caption">
      HIGH FIVE!
    </div>
  </div>
</div>
</body>
</html>
css-mocks/style.css
hr {
  margin: 50px;
}

/* Part 1 */

button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #1e90ff;
  color: white;
  margin: 50px auto;
  display: block;
}

button:focus {
  outline: none;
}

button:hover {
  cursor: pointer;
  background-color: #115ba2;
}

/* Part 2 */

.card {
  width: 30%;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 auto;
  box-shadow: 0px 2px 2px 0px #bbb;
}

.img {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1yCAnWze1-qu-KQY75TIdMbLdDs3Y4T4WQegXF9Tspo2xI8v");
  width: 100%;
  padding-bottom: 50%;
  background-size: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.title {
  background-color: #eee;
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
}

.description {
  padding: 15px;
  background-color: #eee;
  border-top: 1px solid #ccc;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 14px;
}

/* Part 3 */

.tiles {
  display: flex;
  justify-content: space-around;
}

.tile {
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  border: 8px solid peachpuff;
  background-color: peachpuff;
}

.img-wrapper {
  width: 100%;
  height: 100%;
  background-position: center;
  border-radius: 8px;
  background-size: cover;
}

.img-1 {
  background-image: url("https://media.giphy.com/media/HrB1MUATg24Ra/giphy.gif");
}

.img-2 {
  background-image: url("https://media.giphy.com/media/Y8bL4lil6jive/giphy.gif");
}

.img-3 {
  background-image: url("https://media.giphy.com/media/OcZp0maz6ALok/giphy.gif");
}

.caption {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 300px;
  transition: top 0.6s;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  text-align: center;
  border-radius: 8px;
}

.tile:hover .caption {
  top: 0;
}
