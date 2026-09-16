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
        name: "Gage",
        answers: [
            "My name is Gage, and I have been a part of the Melting Pot family for over 5 years now.",
            "Supporting St. Jude matters to me because it is one of the last few things left that truly bring people together. Most times, it is hard to find common ground with a great number of people, but St. Jude is one of those things that everyone can get behind and support. It's bigger than all of us.",
            "If I had to choose one thing that inspires me most about the family's and children, it would have to be the sheer strength and resilience that they show in the face of adversity. The ability to keep going, to keep fighting, and to keep smiling despite the challenges they face",
            "My favorite memory of fundraising for St. Jude at the Melting Pot would have to be the feeling during that time of year. Knowing that for a few months out of the year, I'm not just clocking in and out of work, I'm becoming a part of something huge, and making a true difference for families I'll never meet.",
            "I raise money for St. Jude because no one deserves it more."
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