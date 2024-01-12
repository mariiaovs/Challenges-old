console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

/* const likeButton = document.querySelector('[data-js="like-button"]');

likeButton.addEventListener("click", handleLikeButtonClick); */

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
newPost.classList.add("post");

const newPostText = document.createElement("p");
newPostText.classList.add("post__content");
newPostText.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");

const newPostUserName = document.createElement("span");
newPostUserName.classList.add("post__username");
newPostUserName.textContent = "@username";

const newPostButton = document.createElement("button");
newPostButton.classList.add("post__button");
newPostButton.setAttribute("data-js", "like-button");
newPostButton.textContent = "♥ Like";

newPostFooter.append(newPostUserName, newPostButton);
newPost.append(newPostText, newPostFooter);
document.body.append(newPost);

const likeButtons = document.querySelectorAll('[data-js="like-button"]');

for (likeButton of likeButtons) {
  likeButton.addEventListener("click", handleLikeButtonClick);
}

/* likeButtons[0].addEventListener("click", handleLikeButtonClick);

likeButtons[1].addEventListener("click", handleLikeButtonClick); */
