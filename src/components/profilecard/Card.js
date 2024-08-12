import '../../Card.css';

function Card() {
  return (
    <div className='Main'>
      <div className="Card">
        <div className='Header'>
          <img className='Picture' src={ require('../../pfp.jpg')} alt='profile'/>
        </div>
        <div className='About'>
          <div className='Name'>
            <p className='BigJ'>Johnny Rogers</p>
            <p className='SmallJ'>@bigJ</p>
          </div>
          <div className='Logos'>
            <Icon src='www.google.com' icon='facebook'/>
            <Icon src='www.google.com' icon='linkedin'/>
            <Icon src='www.google.com' icon='twitter'/>
            <Icon src='www.google.com' icon='instagram'/>
            <Icon src='www.google.com' icon='pinterest'/>
          </div>
          <div className='Info'>
            Crafting brand and communication strategies, creating visual designs,
            leading art direction, and capturing portraits through photography.
          </div>
          <div className='Contact'>
            <button className='Follow'>Follow</button>
            <button className='Message'>Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon(props){
  return (
  <>
    <a href={'https://' + props.src} target='_blank' rel='noreferrer'> <img className='Icon' src={ require('../../' + props.icon + '.png')} alt='icon'/> </a>
  </>
  );
}

export default Card;
