import {Component} from 'react';
import styled from 'styled-components';

let Button = styled.button`
background : #3AB0FF;
color : #F9F2ED;
padding : 0.4rem 1.3rem;
margin-right : 1vw;
border-radius : 10px
`
let Img = styled.img`
width : 9vw;
height : 100%;
border : 1px solid black
`

class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom : '2vh', background : 'whitesmoke', padding : '2vh 2vw' }}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div>
                     <Img src={this.props.data.imageURL} alt={this.props.data.name}/>
                    </div>
                    <div style={{paddingLeft : '2vw'}}>
                    <h3 style={{marginTop : '0'}}>{this.props.data.name}</h3>
                    {
                        this.props.data.attributes.map((feature)=>(
                            <Button>{feature} &nbsp;</Button> 
                        ))
                    }
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '30%'}}> 
                    <div>
                       <p style={{marginTop : '0'}}>
                            <strong>{this.props.data.seller}</strong><br/>
                            {this.props.data.sellerAddress} <br/>
                            {this.props.data.rating}
                       </p>

                    </div>
                    <div>
                        <h5>${this.props.data.price} AUD</h5>
                    </div>
                    <div>
                        <button>Add to Cart</button><br/><br/>
                        <button> Make Offer</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Items;