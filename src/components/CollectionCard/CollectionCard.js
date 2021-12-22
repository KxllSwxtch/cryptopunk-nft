import wethImage from "../../assets/weth.png"
import "./CollectionCard.css"

function CollectionCard({ id = "", name = "", traits = [], image = "" }) {
  return (
    <div className='collectionCard'>
      <img src={image} alt='Collection Card' />
      <div className='details'>
        <div className='name'>
          {name} <div className='id'>#{id}</div>
        </div>
        <div className='priceContainer'>
          <img src={wethImage} className='wethImage' alt='WETH' />
          <div className='price'>{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard
