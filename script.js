const cursorFollower = document.createElement("div");
cursorFollower.id = "cursor-follower";
document.body.appendChild(cursorFollower);

document.addEventListener("mousemove", (event) => {
    cursorFollower.style.left = `${event.pageX}px`;
    cursorFollower.style.top = `${event.pageY}px`;
});

cursorFollower.style.position = "absolute";
cursorFollower.style.width = "15px";
cursorFollower.style.height = "15px";
cursorFollower.style.borderRadius = "50%";
cursorFollower.style.backgroundColor = "#ff758c";
cursorFollower.style.pointerEvents = "none";
cursorFollower.style.transition = "transform 0.1s ease-out";
cursorFollower.style.transform = "translate(-50%, -50%)";