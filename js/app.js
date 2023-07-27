let projectElementTemplate = `
<div class="project">
<div class="project-image">
  <img src="" alt="Project">
</div>
<div class="project-info">
  <h5></h5>
  <p></p>
  <div class="project-links">
    <a href="" target="_blank" class="btn btn-success project-link">Live Preview</a>
    <a href="" target="_blank" class="btn btn-danger project-link">GitHub</a>
  </div>
</div>
</div>
`

let projectDatas = [
    {
        id:1,
        image: "https://cdn.acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png",
        title: "Simple E-commerce(Frontend)",
        description: "This project includes a slider displaying technology products. Users can add items to their cart, adjust quantities, and view the total amount.",
        link: "https://my-simple-ecommerce.netlify.app/",
        github: "https://github.com/TeymurMemmedov/simple-ecommerce"

    },

    {
        id:2,
        image:"https://www.coolmathgames.com/sites/default/files/Tic%20Tac%20Toe%20OG%20Image.png",
        title:"Tic Tac Toe Game",
        description: `
        This is a two-player "X" and "O" board game with a 3x3 grid. Players can enter their names, take turns making moves, and the current player is highlighted. The game detects wins and ties, displaying appropriate messages. Players can restart the game, and their statistics are tracked. `,

        link:"https://my-xox-game.netlify.app/",
        github:"https://github.com/TeymurMemmedov/tic-tac-toe"
        
    },

    {
        id:3,
        image:"https://img.nuhcixan.az/news/2021/11/photo_55122.jpg?v=MjAyMS0xMS0wNyAxMjo0MzowOQ==",
        title:"Statistics about Second Karabakh War",
        description: `
       
        This project allows users to view the data in an HTML table and sort it alphabetically or by village count. The code provides a dropdown menu for sorting options and a "More Info" button to display additional information through a modal interface. `,

        link:"https://44gunlukmuharibe.netlify.app/",
        github:"https://github.com/TeymurMemmedov/44-gunluk-muharibe"
        
    },

    {
        id:4,
        image:"https://upload.wikimedia.org/wikipedia/az/5/55/Kontakt_Home.jpg",
        title:"Kontakt.az Clone",
        description: `
        This is a clone of the popular "Kontakt.az" website. But when I created it, I hadn't learned JavaScript yet.
         `,

        link:"https://kontakthomeclone.netlify.app/",
        github:"https://github.com/TeymurMemmedov/kontakt-clone"
        
    }


]

let projectsSection = document.querySelector('.projects');

// for (const project of projectDatas) {
//     projectsSection.innerHTML += 
// `
//     <div class="project">
//     <div class="project-image">
//     <img src="${project.image}" alt="Project">
//     </div>
//     <div class="project-info">
//     <h5>${project.title}</h5>
//     <p>${project.description}</p>
//     <div class="project-links">
//         <a href="${project.link}" target="_blank" class="btn btn-success project-link">Live Preview</a>
//         <a href="${project.github}" target="_blank" class="btn btn-danger project-link">GitHub</a>
//     </div>
//     </div>
//     </div>
// `
    
// }

for (const project of projectDatas) {
    projectsSection.innerHTML += 
`

<div class="d-flex align-self-stretch border border-danger" style="width: 22rem;">
    <div class="card shadow-sm mb-4">
        <img src="${project.image}" alt="Project" class="card-img-top" alt="">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title ">${project.title}</h5>
            <p class="text-muted">${project.description}</p>
            <div class="mt-auto border border-danger">
                <a href="${project.link}" target="_blank" class="btn btn-success btn-block">Live Preview</a>
                <a href="${project.github}" target="_blank" class="btn btn-danger btn-block">Github Repo</a>
            </div>
        </div>
    </div>
</div>
`
    
}

