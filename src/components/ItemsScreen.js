import Items from './Items';
import {Component} from 'react';

class ItemsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items : [
                {
                    name : "Nord Stage 3 88 Keys",
                    price : 5738,
                    rating : "5⭐(31)",
                    attributes : ["Brand New","Free Shipping","15% Off"],
                    seller : "E.M.L.A Music",
                    sellerAddress : "Le Havre, France",
                    imageURL : "https://cdn.pixabay.com/photo/2015/08/26/10/03/synthesizer-908298__480.jpg"
                },
                {
                    name : "Line 6 Helix Rack Guitar Processor - 1x opened box",
                    price : 1831.57,
                    rating : "5⭐(561)",
                    attributes : ["Brand New"],
                    seller : "Pro Music Tools",
                    sellerAddress : "Munchen, Germany",
                    imageURL : "https://support.musicgateway.com/wp-content/uploads/2021/03/Copy-of-800-x-500-Blog-Post-42-2.png"
                }, 
                {
                    name : "Nord Lead A1",
                    price : 1700,
                    rating : "5⭐(341)",
                    attributes : ["Brand New","Free Shipping"],
                    seller : "Gear Garage",
                    sellerAddress : "Dulwich Hill, Australia",
                    imageURL : "https://cdn.shopify.com/s/files/1/1672/0575/products/s-1-1000x750-1_2048x.jpg?v=1555098627"
                }, 
                {
                    name : "Moog Subsequent 37",
                    price : 1700,
                    rating : "5⭐(1031)",
                    attributes : ["Free Shipping"],
                    seller : "Turn Lab",
                    sellerAddress : "Antwerpen, Belgium",
                    imageURL : "https://dt7v1i9vyp3mf.cloudfront.net/styles/news_large/s3/imagelibrary/s/spotlight_oberheim-CazHlfQiI9TwVjR_VZtidEZIohMSDAoU.jpg"
                }, 
                {
                    name : "Moog Minitaur 2010s Black",
                    price : 682.80,
                    rating : "5⭐(456)",
                    attributes : ["Brand New","Free Shipping"],
                    seller : "Andrew's Gear Outlet",
                    sellerAddress : "Ojai CA, US",
                    imageURL : "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/03/synthesizer.jpg"
                }, 
            ]
        }
    }

    render(){
        return (
            <div>
                <h1 align="center">Cart Items</h1>
            <div>
            {
                this.state.items.map((item,index)=> (<CartItem key={index} data={item}/>))
            }
            </div>
            </div>
        )
    }

}

export default ItemsScreen;