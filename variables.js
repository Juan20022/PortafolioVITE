const proyectos =[
    {
        img:"./img/Cafeteria.png",
        title:"Cafeteria Artesana HN"
    },
    {
        img:"./img/Ft.jpg",
        title:"Frites & Grill"
    },
];

const handleBarsContext ={
    "/index.html":{
        "title":"Home",
        "proyectos":proyectos
    }
}

const pageContext = (page) => {
    const context = {...handleBarsContext[page] }
    return context;
}

export default pageContext