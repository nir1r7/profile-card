import '../../Card.css';

function Card() {
  return (
    <div className='Main'>
      <div className="Card">
        <div className='Header'>
          <div className='Curved'>
          <img className='Picture' src={ require('../../pfp.jpg')} alt='profile'/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319" className='svg1'><path fill="white" fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,80C384,75,480,117,576,154.7C672,192,768,224,864,197.3C960,171,1056,85,1152,48C1248,11,1344,21,1392,26.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          </div>
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
            <a href='/'><button className='Follow'><span>Follow</span></button></a>
            <a href='/'><button className='Message'><span>Message</span></button></a>

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
