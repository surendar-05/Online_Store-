import { code, db, globe, lock } from "../assets/icons";
import client1 from '../assets/images/client1.png'
import client2 from '../assets/images/client2.png'
import client3 from '../assets/images/client3.png'
import client4 from '../assets/images/client4.png'

export const aboutgrids = [
    {
        icon: code,
        heading: 'SSL Certificate',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        label: 'View More'
    },
    {
        icon: db,
        heading: 'Personal Domain',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        label: 'View More'
    },
    {
        icon: globe,
        heading: 'Media Storage',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        label: 'View More'
    },
    {
        icon: lock,
        heading: 'Code Editor',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        label: 'View More'
    }
];


export const clients = [
    {
        image: client1,
        about: 'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro.',
        name: 'Celia Almeda',
        profile: 'Web Developer'
    },

    {
        image: client2,
        about: 'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro.',
        name: 'Nat Reynolds',
        profile: 'Android Developer'
    },

    {
        image: client3,
        about: 'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro.',
        name: 'Bob Roberts',
        profile: 'UI/UX Designer'
    },

    {
        image: client4,
        about: 'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro.',
        name: 'Mattie Smith',
        profile: 'Full Stack Developer'
    }
]


export const pricing = [
    {
        plan : 'Starter Plan',
        price : 'Free',
        label : 'Proceed Free',
        about : 'Free static.app domain included, No credit card'
    },

    {
        plan : 'Yearly Plan',
        price : '$9/month',
        label : 'Proceed Anually',
        about : 'Free static.app domain included, No credit card'
    },

    {
        plan : 'Monthly Plan',
        price : '$12/month',
        label : 'Proceed Monthly',
        about : 'Free static.app domain included, No credit card'
    }
]