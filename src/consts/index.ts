import type { IconType } from "react-icons";
import type { Drinks } from "../interfaces/cocktail"
import type { Nav } from "../interfaces/nav.interface"
import { FaGithubAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export const navlinks: Nav[] = [
    {
        id: 'cocktails',
        title: 'Cocktails'
    },
    {
        id: 'about',
        title: 'About us'
    },
    {
        id: 'work',
        title: 'The Art'
    },
    {
        id: 'contact',
        title: 'Contact'
    },
]

export const cocktailList: Drinks[] = [
    {
        name: "Chapel Hill Shiraz",
        country: 'AU',
        detail: "Bottle",
        price: '₦10k'
    },
    {
        name: "Rhino Pale Ale",
        country: 'CA',
        detail: "750ml",
        price: '₦40k'
    },
    {
        name: "Caten Malbee",
        country: 'AU',
        detail: "Bottle",
        price: '₦30k'
    },
    {
        name: "Grey Goose Vodka",
        country: "FR",
        detail: "1 L Bottle",
        price: "₦47k"
    }
]

export const mockTailLists: Drinks[] = [
    {
        name: "Bols Curaçao Triple Sec",
        country: "NL",
        detail: "70 cl Bottle",
        price: "₦40K"
    },
    {
        name: "Tropical Bloom",
        country: "US",
        detail: "Bottle",
        price: "₦60k"
    },
    {
        name: "Passionfruit Mint",
        country: "US",
        detail: "Bottle",
        price: "₦50k"
    },
    {
        name: "Citrus Glow",
        country: "CA",
        detail: "750 ml",
        price: "₦90k"
    },
    {
        name: "Lavender Fizz",
        country: "IE",
        detail: "600 ml",
        price: "₦100k"
    },
]

// const profileLists: {imgPath: string;}[] =  [
//     {
//         imgPath: ''
//     }
// ]

export const featureLists: string[] = [
    'Perfectly balanced blends',
    'Garnished to perfection',
    'Ice-cold every time',
    'Expertly shaken & stirred'
]

export const goodLists: string[] = [
    'Handpicked ingredients',
    'Signature techniques',
    'Bartending artistry in action',
    'Freshly muddled flavors'
]

export const storeInfo = {
    heading: 'Where to find us',
    address: "41 Que Ave, Los Angele, CA",
    contact: {
        phone: "(213) 832-72622",
        email: 'cocktails@serve.com'
    }
}

export const openingHours: Record<string, string>[] = [
    {
        day: "Mon-Thu", time: "7:00am - 11pm"
    },
    {
        day: "Fri", time: "11:00am - 2am"
    },
    {
        day: "Sat", time: "9:00am - 11pm"
    },
    {
        day: "Sun", time: "3:00pm - 11pm"
    },
]

export const socials: {
    name: string, icon: IconType, url:string;
}[] = [
    {
        name: "Github",
        icon: FaGithubAlt,
        url: "github.com/4ssh1"
    },
    {
        name: "Twitter",
        icon: FaTwitter,
        url: "x.com/justsa_rah"
    }
]

export const sliderLists = [
    {
        id: 1,
        name: "Voilet Breeze",
        image: '/drink-1.jpg',
        title: "Simple ingredient, Bold Flavor",
        description: "Made with tequila and orange liqueur, the Margarita is easy to make and full of character"
    },
    {
        id: 2,
        name: "Raspberry Mojito",
        image: '/drink-2.jpg',
        title: "A Zesty Classic That Never Fails",
        description: "Made with tequila and orange liqueur, the Margarita is easy to make and full of character"
    },
    {
        id: 3,
        name: "Classic Mojito",
        image: '/drink-3.jpg',
        title: "Simple ingredient, Bold Flavor",
        description: "Made with tequila and orange liqueur, the Margarita is easy to make and full of character"
    },
    {
        id: 4,
        name: "Curacao Mojito",
        image: '/drink-4.jpg',
        title: "Crafted With Care, Poured With Love",
        description: "Made with tequila and orange liqueur, the Margarita is easy to make and full of character"
    }
]