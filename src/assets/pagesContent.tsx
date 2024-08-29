import boutique1 from './Boutique1.jpg'
import boutique2 from './Boutique2.jpeg'
import boutique3 from './Boutique3.jpg'
import boutique4 from './Boutique4.jpg'
import bluevilas1 from './BlueVilas1.jpg'
import bluevilas2 from './BlueVilas2.jpg'
import bluevilas3 from './BlueVilas3.jpg'
import bluevilas4 from './BlueVilas4.jpg'
import infinity1 from './Infinity1.jpg'
import infinity2 from './Infinity2.jpg'
import infinity3 from './Infinity3.jpg'
import infinity4 from './Infinity4.jpeg'
import destaque1 from './destaque1.jpg'
import destaque2 from './destaque2.jpg'
import destaque3 from './destaque3.jpg'
import destaque4 from './destaque4.jpg'
import destaque5 from './destaque5.jpg'
import destaque6 from './destaque6.jpg'
import destaque7 from './Boutique2.jpeg'
import noticia1 from './cardNoticias1.jpg'
import noticia2 from './cardNoticias2.jpg'
import noticia3 from './cardNoticias3.jpg'
import noticia4 from './cardNoticias4.jpg'
import noticia5 from './cardNoticias5.jpg'
import noticia6 from './cardNoticias6.jpg'
import noticia7 from './cardNoticias7.jpg'


//EMPREENDIMENTOS/SPOTLIGHT

interface Empreendimento {
    id: number;
    name: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    text: string;
  }

export const empreendimentos: Empreendimento[] = [
    { 
        id: 1 ,
        name: "Boutique - Estoril",
        img1: boutique1,
        img2: boutique2,
        img3: boutique3,
        img4: boutique4,
        text: ""
    },
    { 
        id: 2 ,
        name: "Blue Villas - Cascais",
        img1: bluevilas1,
        img2: bluevilas2,
        img3: bluevilas3,
        img4: bluevilas4,
        text: ""
    },
    { 
        id: 3 ,
        name: "Infinty - Lisboa",
        img1: infinity1,
        img2: infinity2,
        img3: infinity3,
        img4: infinity4,
        text: ""
    },
   
]; 

//CONTACTS

interface ContactInfo {
    telefone: string;
    morada: string;
    email: string;
    codigoPostal: string;
}

// Define and export the contactInfo object
export const contactInfo: ContactInfo = {
    telefone: "(+351) 923445691",
    morada: "Rua Antonio Martins Sampaio, nº24",
    email: "construcoes.geral@gmail.com",
    codigoPostal: "3000-284, Afife"
};

//HOME

interface TextoQuemSomos {
    p1: string,
    p2: string,
    p3: string
}

export const textoQuemSomos: TextoQuemSomos = {
    p1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nulla totam aut labore quas dolorem! Exercitationem, eum.",
    p2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?",
    p3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?"
};

export interface Destaque {
    id: number;
    img: string;
    title: string;
    cardText: string;
    text: string;
}

export const destaques: Destaque[] = [
    {
        id: 1,
        img: destaque1,
        title: 'Boutique - Estoril',
        cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque!',  
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?',  
    },
    {
        id: 2,
        img: destaque2,
        title: 'Blue Villas - Cascais',
        cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque!', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?',  

    },
    {
        id: 3,
        img: destaque3,
        title: 'Infinty - Lisboa',
        cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque!',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?',  
    },
    {
        id: 4,
        img: destaque4,
        title: 'Cooperativa Camões - Oeiras',
        cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque!',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?',
    },
    {
        id: 5,
        img: destaque5,
        title: 'Nature - Sintra',
        cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque!',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?',
    },
    {
        id: 6,
        img: destaque6,
        title: 'Condominio Afife - Afife',
        cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque!',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?',
    },
    {
        id: 7,
        img: destaque7,
        title: 'Porto Villa - Porto',
        cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque!',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?',
    },
]

export interface Noticia {
    id: number;
    img: string;
    title: string;
    cardText: string;
    text: string;
}

export const noticias: Noticia[] = [
    {
        id: 1,
        img: noticia1,
        title: 'Lorem ipsum dolor sit amet!',
        cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque!',  
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?',  
    },
    {
        id: 2,
        img: noticia2,
        title: 'Sunt magni enim dolores atque!',
        cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque!', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?',  

    },
    {
        id: 3,
        img: noticia3,
        title: 'Lorem ipsum dolor sit amet!',
        cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque!',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?',  
    },
    {
        id: 4,
        img: noticia4,
        title: 'Sunt magni enim dolores atque!',
        cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque!',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?',
    },
    {
        id: 5,
        img: noticia5,
        title: 'Lorem ipsum dolor sit amet!',
        cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque!',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?',
    },
    {
        id: 6,
        img: noticia6,
        title: 'Sunt magni enim dolores atque!',
        cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque!',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?',
    },
    {
        id: 7,
        img: noticia7,
        title: 'Lorem ipsum dolor sit amet!',
        cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque!',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id vel, perferendis velit iure vitae sunt magni enim dolores atque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?',
    },
]
