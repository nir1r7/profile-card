import '../../Card.css';

function Card() {
  return (
    <div className='Main'>
      <div className="Card">
        <div className='Header'>
          <div className='Picutre'>
            pfp
          </div>
        </div>
        <div className='About'>
          <div className='Name'>
            <p className='BigJ'>Johnny Rogers</p>
            <p className='SmallJ'>@bigJ</p>
          </div>
          <div className='Logos'>
            <div>L1</div>
            <div>L2</div>
            <div>L3</div>
            <div>L4</div>
            <div>L5</div>
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

export default Card;
