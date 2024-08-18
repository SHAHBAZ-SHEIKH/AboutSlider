const AboutItem = [
    {
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYVcVOpFOva-83wPMHzyIe4kxENJshPHohJw&s",
        namegroup:"History",
        description:"Thus, the Kashmir region in its contemporary form dates from 1846, when, by the treaties of Lahore and Amritsar at the conclusion of the First Sikh War, Raja Gulab Singh, the Dogra ruler of Jammu, was created maharaja (ruling prince).",
        category:"History"
    },
    {
        url:"https://www.clarkson.edu/sites/default/files/2023-06/Innovation-Entrepreneurship-Hero-1600x900.jpeg",
        namegroup:"Vision",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id, eum quaerat alias fugiat doloremque voluptatum quis, sint saepe, aliquid minima nihil laboriosam. Vitae sed perspiciatis non vero nisi culpa.",
        category:"Vision"
    },
    {
        url:"https://bairesdev.mo.cloudinary.net/blog/2021/09/software-developer-1.jpg?tx=w_1920,q_auto",
        namegroup:"Goals",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id, eum quaerat alias fugiat doloremque voluptatum quis, sint saepe, aliquid minima nihil laboriosam. Vitae sed perspiciatis non vero nisi culpa.",
        category:"Goals"
    },

]

function historyHandler(category){
    console.log("text",category)
    let merge = document.getElementById("merge")

    let buttons = merge.querySelectorAll('.btndiv button');


    buttons.forEach(button => {
        button.classList.remove('active');
    });


    event.target.classList.add('active');

    AboutItem.filter((Item) => Item.category == category).forEach((Item) =>{
        merge.innerHTML = `
        <div class="image">
                <img src=${Item.url} alt="">
            </div>
            <div class="vision">
                <div class="btndiv">
                    <button class="${category === 'History' ? 'active' : ''}" onclick="historyHandler('History')">History</button>
                    <button class="${category === 'Vision' ? 'active' : ''}" onclick="historyHandler('Vision')">Vision</button>
                    <button class="${category === 'Goals' ? 'active' : ''}" onclick="historyHandler('Goals')">Goals</button>
                </div>

                <div class="paradiv">
                    <h4>${Item.namegroup}</h4>
                    <p>${Item.description}</p>
                </div>
            </div>
        `

    })

    

}

