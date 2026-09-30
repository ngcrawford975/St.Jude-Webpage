document.addEventListener("DOMContentLoaded", () => {

    const servers = {
        server1: {
            name: "Thea",
            answers: [
                "My name is Thea Palmer and I have been with the Wilmington, NC Melting Pot for over 9 years.",
                "St. Jude’s matters to me personally because I have a little boy of my own, and becoming a parent has given me an even greater appreciation for how precious childhood is. Knowing that St. Jude gives children the chance to focus on being kids while their families can get lifesaving care and support means a lot to me.",
                "What inspires me most about the children and families of St. Jude is their strength and how they continue to find joy even while going through something so hard. Seeing all the children still laugh, play, and be themselves, and seeing their families supporting them every step of the way, is so inspiring. This all inspires me to appreciate the little things more and to do what I can to support the St. Jude’s mission. I got a once in a life time opportunity to go tour the St. Jude hospital in Memphis and that was the most inspiring. The amount of work and research they put in to not only childhood cancer, but other diseases and disorders is amazing",
                `My favorite memory has been seeing everyone come together at The Melting Pot with the same goal of supporting St. Jude. I’ve loved seeing how our guests and team continue to show up and support the cause year after year. I’m also really proud that I’ve been able to increase my fundraising amount each year that I’ve worked at the Melting Pot. I’m so excited to see how much more we all can raise each year, and it’s very rewarding to see that hard work turn into something that helps St. Jude. One of the fun parts has been setting fundraising goals that come with a little extra motivation, like getting to pie our owner in the face when we reached our goal! When people donate to St. Jude, I want them to know how much it means to me. Every donation, no matter the amount, means that someone believes in what we’re doing and wants to be part of helping the kids and their families. Even contributions that may seem small matter and add up to something meaningful. It means so much to see people believe in the cause and support the kids with me.`,
                "I raise money for St. Jude because I want to do my part to help give kids the chance to grow up, make memories, and have a healthy future. I have seen the impact it has on kids and their families, and I want to do whatever I can to be part of that impact."
            ]
        },
        server2: {
            name: "Drake",
            answers: [
                "Drake, and this May will be 10 years with The Melting Pot. ",
                ". It’s a way to make a difference for kids who can’t make that difference for themselves. ",
                "Having our team members work together and trying to raise money together.",
                "Watching Chad run around with his prize cart and getting hit with a pie. ",
                "I raise money for St. Jude because it allows kids and parents to not have to worry about bills and can just worry about their child and improving their health. "
            ]
        },
        server3: {
            name: "Madeline",
            answers: [
                "My name is Madeline and I have been part of The Melting Pot family for 8 & 1/2 years!",
                "Supporting St. Jude matters to me because I believe every child deserves the chance to grow up healthy and happy. I love being able to support a cause that helps children and their families during such a difficult time.",
                "What inspires me most is how strong the kids and their families are. They go through so much but they continue to stay positive and hopeful. ",
                "My favorite memory has been seeing our team and guest come together to raise money and support such an important cause. One year during the fundraiser, once we met our goal we were able to “pie” our manager!",
                "I raise money for St. Jude because I want to help give children hope and a chance for a brighter future."
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
            name: "Charlie",
            answers: [
                "My name is Charlie, I’ve been working at the melting pot for over 4 years.",
                "St. Jude matters to me because everyone deserves the chance to have a happy, healthy childhood.",
                "Every day I am inspired by how courageous the kids and the family of the kids are at St. Jude’s Hospital.  Having to go through something so traumatic at a young age and still being able to see the light at the end of the day is commendable in more ways than one.",
                "I have a lot of favorite memories from my time at the Melting Pot, raising money for St. Jude, my absolute favorites have always been the shock and excitement I see in guests faces when I tell them 100% of our profits go to St. Jude. It’s not often that a business dedicates so much time and effort into raising money for charity, but the Melting Pot reflects that business can and should invest time into raising money.",
                "It has been a pleasure to contribute to the betterment of the thousands of kids at St. Jude’s Hospital. I’m confident that we will hit our donation goals this year and I’m forever excited to be apart of this journey!"
            ]
        },
        server6: {
            name: "Ryleigh",
            answers: [
                "My name is Ryleigh and I have been a part of the Melting Pot family for 2 1/2 years.",
                "Supporting St. Jude matters to me because every child deserves hope, healing, and the chance to simply be a kid.",
                "I am inspired by their strength and positivity through life's toughest challenges.",
                "My favorite memory from fundraising at The Melting Pot is seeing guests come together to support such an important cause and knowing that every donation makes a difference.",
                "I raise money for St. Jude because small acts of kindness can change a child's life."
            ]
        },
        server7: {
            name: "Kylie",
            answers: [
                "I am Kylie. This is my third year at the melting pot and my second year raising money for St. Jude.",
                "Supporting St. Jude matters to me because I think it is important to be grateful and giving back is one of the best ways you can do that. ",
                "The children and families of St. Jude are inspiring because they are in a situation that is out of anybody’s control yet they show so much gratitude towards being able to get the best possible care we can give even though it’s what we should do and what they deserve. The children are so grateful, resilient, and strong, and it is so important that we do what we can for them to be healthy and comfortable because they will grow up to be some of the best people. The situations these families are in are so unconventional because it takes away the families ability to focus on the things that keep a household running. That is why this cause means so much to me because it helps them regain control in an uncontrollable situation because St. Jude’s services extend to the families of the children as well and helping them while they are out of work and allowing them to be there for there child and focus on their needs instead of bills. Experience with situations out of your control for me can cause hard feelings to deal with and to get rid of so St. Jude offering mental health services as well for families and for the children is so important. I also believe the immense research done by St. Jude is amazing because it instills hope in people for the future. ",
                "My favorite memory from fundraising at the melting pot was one of my tables that donated $1,000. It was actually the child that recommended to the mom that they should donate, and I thought that was sweet. The benefits we give for donating are super cool but the conversation I had with the mom was very rewarding. I went over all we would give back to her with that donation, but she was asking me deeper about the cause and what her donation would go towards. I liked being able to reassure her that 100% will be given to the cause and all the different things that money could cover. She decided on the $1,000 and gave her daughter the final decision. It was an enjoyable experience because she was interested in what all that money could do and I was happy to be able to provide her an answer and give her confidence that this is a great decision. Getting a donation feels rewarding each time. Seeing my personal total donations rise and talking to my tables who are so willing to donate feels good because I would do the same and it gives a visual of a true difference being made.",
                "My ability to contribute to that is the reason I raise money for St.Jude."
            ]
        },
        server8: {
            name: "Max",
            answers: [
                "My name is Max, and I have been with the Melting Pot for 6 months now.",
                "St. Jude matters to me personally because my cousin, who I lived with and was very close to, had Duchenne muscular dystrophy. Although he did not receive treatment at St. Jude, many of th things he experienced was very similar to what these kids face, and he lived with his condition throughout his life. ",
                "What inspires me most about these kids is that, even while facing something so devastating, they can still smile, laugh, and find reasons to love life. I believe that laughter and genuine smiles are some of the purest things a person can experience. Knowing that St. Jude helps provide children with opportunities to experience those moments, despite everything they are going through, makes ths cause especially personal to me.",
                "I reaise money for St. Jude because I believe they care about the children as whole people, not only their physical health, but also their emotional and mental well-being. My cousin was such a kind soul, and evenwith everything his condition put him through, he continued to smile and bring joy to the people around him.",
            ]
        },
        server9: {
            name: "Adam",
            answers: [
                "My name is Adam, and I have been part of The Melting Pot family for about 3 months.",
                "Supporting St. Jude matters to me because almost every family has been affected by a serious or terminal illness in some way, including my own. Going through something like that is already incredibly difficult, and the last thing families should have to worry about is how they're going to pay for treatment. Knowing that St. Jude helps relieve that financial burden so families can focus on their child is something I find really meaningful.",
                "What inspires me most is their ability to keep going through situations that most people can't even imagine facing. Despite everything they are dealing with, they continue to stay positive, support one another, and keep moving forward. That kind of strength and determination is something I really admire.",
                "My family has experienced the impact that serious illness can have on loved ones, so I understand how overwhelming those situations can be. Seeing an organization like St. Jude step in to help families focus on their child is one of the reasons this cause means so much to me.",
                "I raise money for St. Jude because no family should have to choose between caring for their child and worrying about the cost of treatment during one of the most difficult times in their lives."
            ]
        },
        server10: {
            name: "Allie",
            answers: [
                "My name is Allie, and I’ve been part of The Melting Pot family since July 2026",
                "Supporting St. Jude is important to me because every child deserves the opportunity to receive the care they need, regardless of their family’s financial situation. Even though I don’t have a personal connection to St. Jude, I’m grateful to be part of something that helps make a meaningful difference for children and their families.",
                "What inspires me most is the strength of the children and their families as they go through something so difficult. I don’t have a personal experience with St. Jude, but being able to contribute to a cause that supports these families is something I’m proud to be a part of.",
                "Since I’m new to The Melting Pot, I’m most excited to experience my first St. Jude fundraising campaign and see our team and guests come together to support such an important cause. I’m excited to be part of something that brings our restaurant community together while making a difference.",
                "I rais money for St. Jude because I want to be part of something that gives children and their families hope and support when they need it most."
            ]
        },
        server11: {
            name: "Jenny",
            answers: [
                "Hi my name is Jenny and have been with the Melting Pot for 9 years. ",
                `As a child, I helped my family raise money for St. Jude. I knew it mattered to us, but from a distance, I could not yet grasp the fear, heartbreak, and hope carried by every family behind its name.
                That changed when I had the opportunity to visit St. Jude Children’s Research Hospital. Seeing the hospital and learning more about the children and families there made the mission deeply personal. St. Jude was no longer just a name my family supported—it became a place filled with children fighting for their lives and parents doing everything they could to help them.
                No child should have to know what it feels like to fight for their life, and no parent should have to know what it feels like to watch them do it.
                I think about how, for these families, there is a life before cancer and a life after cancer. In an instant, everything changes. The things that seemed important before suddenly aren’t. A family would give anything just to have more ordinary days together.
                And when you’re fighting for your child’s life, you shouldn’t also have to be asking yourself, How am I going to pay for this? Where are we going to stay? How are we going to get there?
                St. Jude helps take those questions off a family’s shoulders. It allows parents to focus on the question that matters most: How do we help our child get better?`,
                `That’s why I am so incredibly proud of our servers. They understand that every one of us can be part of giving these children and their families more chances—more treatments, more breakthroughs, more hope and, hopefully, more time together.
                Sometimes when we’re fundraising, it’s easy to look at a $5, $10, or $20 donation and wonder how much difference one donation can really make. But that’s exactly how change happens.
                Every dollar is part of the next breakthrough.
                Another piece of research. Another discovery. Another treatment that works better than the one before it. Another answer to a question researchers haven’t solved yet. Another chance for a child.
                And those breakthroughs build on each other.
                What we know today came from research someone helped fund yesterday. What we help fund today could become the breakthrough that changes a child’s life tomorrow.`,
                `So every year, we try to raise a little more. And then a little more again. Because when thousands of people decide that their small part matters, those dollars become research. Research becomes breakthroughs. Breakthroughs become better treatments. And better treatments can give a family something absolutely priceless:
                More time.
                Another birthday.
                Another Christmas morning.
                Another first day of school.
                Another family vacation.
                Another ordinary day together.`,
                "I raise money for St. Jude because I believe every child deserves the chance for there to be so much more to their story."
            ]
        }
    };

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

});