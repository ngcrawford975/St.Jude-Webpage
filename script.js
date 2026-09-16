const servers = {
    server1: {
        name: "Server Name 1",
        answers: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",
            "Answer 5"
        ]
    },
    server2: {
        name: "Server Name 2",
        answers: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",
            "Answer 5"
        ]
    },
    server3: {
        name: "Server Name 3",
        answers: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",
            "Answer 5"
        ]
    },
    server4: {
        name: "Server Name 4",
        answers: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",
            "Answer 5"
        ]
    },
    server5: {
        name: "Server Name 5",
        answers: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",
            "Answer 5"
        ]
    },
    server6: {
        name: "Server Name 6",
        answers: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",
            "Answer 5"
        ]
    },
    server7: {
        name: "Server Name 7",
        answers: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",
            "Answer 5"
        ]
    },
    server8: {
        name: "Server Name 8",
        answers: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",
            "Answer 5"
        ]
    },
    server9: {
        name: "Server Name 9",
        answers: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",
            "Answer 5"
        ]
    },
    server10: {
        name: "Server Name 10",
        answers: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",
            "Answer 5"
        ]
    },
    server11: {
        name: "Server Name 11",
        answers: [
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",
            "Answer 5"
        ]
    }
};

    // Add all 11 servers here

const modal = document.getElementById("serverModal");
const modalName = document.getElementById("modalName");
const modalAnswers = document.getElementById("modalAnswers");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".server-card").forEach(card => {
    card.addEventListener("click", () => {
        const id = card.getAttribute("data-server");
        const server = servers[id];

        modalName.textContent = server.name;

        modalAnswers.innerHTML = "";
        server.answers.forEach(ans => {
            const li = document.createElement("li");
            li.textContent = ans;
            modalAnswers.appendChild(li);
        });

        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});